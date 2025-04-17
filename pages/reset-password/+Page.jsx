import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, LogIn, Eye, EyeOff } from "lucide-react";
import { useHead } from "../../lib/useHead";
import Head from "./+Head.jsx";
import { extractHeadData } from "../../lib/parseHead";

export default function ResetPasswordPage() {
  useHead(extractHeadData(Head));

  const [token, setToken] = useState(null);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Extract token from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get("token");
    setToken(tokenFromUrl);

    const verifyToken = async () => {
      setIsLoading(true);

      if (!tokenFromUrl) {
        setIsExpired(true);
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `https://api.satsu.pro/auth/verify-reset-token?token=${tokenFromUrl}`
        );
        if (!res.ok) setIsExpired(true);
      } catch (err) {
        console.error("Token verification error:", err);
        setIsExpired(true);
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (apiError) setApiError(null);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  useEffect(() => {
    const { password } = formData;
    let strength = 0;

    if (!password) return setPasswordStrength(0);
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    setPasswordStrength(Math.min(Math.floor(strength * 16.6), 100));
  }, [formData.password]);

  useEffect(() => {
    const newErrors = {};
    if (touched.password) {
      if (!formData.password) newErrors.password = "Password is required";
      else if (formData.password.length < 8)
        newErrors.password = "Password must be at least 8 characters";
    }

    if (
      touched.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);
  }, [formData, touched]);

  const validateForm = () => {
    const newErrors = {};
    setTouched({ password: true, confirmPassword: true });

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords don't match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setApiError(null);

    try {
      const res = await fetch("https://api.satsu.pro/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password: formData.password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to reset password");

      setIsSuccess(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (err) {
      console.error("Reset error:", err);
      setApiError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPasswordStrengthInfo = () => {
    if (passwordStrength === 0) return { color: "bg-zinc-700", label: "" };
    if (passwordStrength < 30) return { color: "bg-red-500", label: "Weak" };
    if (passwordStrength < 60) return { color: "bg-yellow-500", label: "Fair" };
    if (passwordStrength < 80) return { color: "bg-green-500", label: "Good" };
    return { color: "bg-emerald-500", label: "Strong" };
  };

  const strengthInfo = getPasswordStrengthInfo();

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 bg-grid-pattern -z-10" />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-8"
        >
          サツ | satsu
        </motion.h1>
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-8 w-8 text-violet-500 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0..."
            />
          </svg>
          <p className="text-zinc-300">Verifying your reset link...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-8">
      <div className="absolute inset-0 bg-grid-pattern -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="bg-zinc-900 border-zinc-800">
          {isExpired ? (
            <>
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Invalid or Expired Link
                </CardTitle>
                <CardDescription>
                  This password reset link is no longer valid
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center py-6">
                  <div className="h-16 w-16 bg-red-500/10 rounded-full flex items-center justify-center text-red-400">
                    <AlertCircle className="h-8 w-8" />
                  </div>
                </div>
                <p className="text-zinc-300 text-center">
                  Please request a new password reset link.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button
                  onClick={() => (window.location.href = "/forgot-password")}
                  className="bg-violet-600 text-white"
                >
                  Request New Link
                </Button>
                <Button
                  onClick={() =>
                    (window.location.href = "https://app.satsu.pro")
                  }
                  variant="outline"
                  className="text-zinc-300"
                >
                  Back to Login
                </Button>
              </CardFooter>
            </>
          ) : isSuccess ? (
            <>
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Password Reset Successful
                </CardTitle>
                <CardDescription>
                  Your password has been updated
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center py-6">
                  <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-400">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                </div>
                <p className="text-zinc-300 text-center">
                  You’ll be redirected shortly.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  onClick={() => (window.location.href = "/")}
                  className="bg-violet-600 text-white flex items-center gap-2"
                >
                  <LogIn className="h-4 w-4" />
                  Log In Now
                </Button>
              </CardFooter>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Set New Password
                </CardTitle>
                <CardDescription>
                  Create a new password for your Satsu account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {apiError && (
                    <div className="bg-red-500/10 text-red-400 px-4 py-3 rounded-lg flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 mt-0.5" />
                      <span>{apiError}</span>
                    </div>
                  )}

                  {/* Password */}
                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-zinc-300"
                    >
                      New Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`bg-zinc-800 border-zinc-700 text-zinc-200 pr-10 ${
                          touched.password && errors.password
                            ? "border-red-500"
                            : ""
                        }`}
                        placeholder="Enter new password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {formData.password && (
                      <div className="mt-2">
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${strengthInfo.color} transition-all`}
                            style={{ width: `${passwordStrength}%` }}
                          />
                        </div>
                        <div className="text-xs text-zinc-400 mt-1">
                          {strengthInfo.label}
                        </div>
                      </div>
                    )}
                    {touched.password && errors.password && (
                      <div className="text-red-400 text-sm flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.password}
                      </div>
                    )}
                  </div>

                  {/* Confirm */}
                  <div className="space-y-2">
                    <label
                      htmlFor="confirmPassword"
                      className="text-sm font-medium text-zinc-300"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`bg-zinc-800 border-zinc-700 text-zinc-200 pr-10 ${
                          touched.confirmPassword && errors.confirmPassword
                            ? "border-red-500"
                            : ""
                        }`}
                        placeholder="Confirm new password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {touched.confirmPassword && errors.confirmPassword && (
                      <div className="text-red-400 text-sm flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 bg-violet-600 text-white"
                  >
                    {isSubmitting ? "Resetting Password..." : "Reset Password"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="border-t border-zinc-800 text-sm text-zinc-400 justify-center">
                Remember your password?{" "}
                <a
                  href="https://app.satsu.pro"
                  className="text-violet-400 hover:text-violet-300 ml-1"
                >
                  Log in
                </a>
              </CardFooter>
            </>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
