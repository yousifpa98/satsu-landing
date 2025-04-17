import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, Mail, ArrowRight } from "lucide-react";
import { useHead } from '../../lib/useHead';
import Head from './+Head.jsx';
import { extractHeadData } from '../../lib/parseHead';

export default function ForgotPasswordPage() {
  useHead(extractHeadData(Head));
  
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  
  const validateEmail = (email) => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email");
      return false;
    }
    setEmailError("");
    return true;
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) validateEmail(e.target.value);
    if (apiError) setApiError(null);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) return;
    
    setIsSubmitting(true);
    setApiError(null);
    
    try {
      const response = await fetch('https://api.satsu.pro/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send password reset email');
      }
      
      // Always show success even if email doesn't exist (for security)
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      setApiError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4">
      {/* Subtle background grid effect */}
      <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:radial-gradient(circle,white,transparent_75%)] -z-10" />
      
      {/* App logo / title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight text-white mb-8"
      >
        サツ | satsu
      </motion.h1>
      
      {/* Reset Password Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full max-w-md"
      >
        <Card className="bg-zinc-900 border-zinc-800">
          {isSubmitted ? (
            // Success State
            <>
              <CardHeader>
                <CardTitle className="text-white text-xl">Email Sent</CardTitle>
                <CardDescription>
                  Check your inbox for password reset instructions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center py-6">
                  <div className="h-16 w-16 bg-violet-500/10 rounded-full flex items-center justify-center text-violet-400">
                    <Mail className="h-8 w-8" />
                  </div>
                </div>
                <p className="text-zinc-300 text-center">
                  We've sent an email to <span className="font-medium text-white">{email}</span> with instructions to reset your password.
                </p>
                <p className="text-zinc-400 text-sm text-center">
                  If you don't see the email, please check your spam folder.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  onClick={() => window.location.href = "https://app.satsu.pro"} 
                  className="bg-zinc-800 hover:bg-zinc-700 text-white"
                >
                  Return to Login
                </Button>
              </CardFooter>
            </>
          ) : (
            // Request Form State
            <>
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Reset your password
                </CardTitle>
                <CardDescription>
                  Enter your email and we'll send you instructions to reset your password
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* API Error Message */}
                  {apiError && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>{apiError}</span>
                    </div>
                  )}
                  
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-zinc-300 block"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={handleEmailChange}
                      className={`bg-zinc-800 border-zinc-700 text-zinc-200 placeholder:text-zinc-500 ${
                        emailError ? "border-red-500 focus-visible:ring-red-500" : ""
                      }`}
                      required
                    />
                    {emailError && (
                      <div className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                        {emailError}
                      </div>
                    )}
                  </div>
                  
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="bg-violet-600 hover:bg-violet-700 text-white w-full flex items-center justify-center gap-2 mt-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4" />
                        Send Reset Link
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="border-t border-zinc-800 flex justify-center">
                <div className="text-zinc-400 text-sm">
                  Remember your password?{" "}
                  <a
                    href="https://app.satsu.pro"
                    className="text-violet-400 hover:text-violet-300 inline-flex items-center"
                  >
                    Log in
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardFooter>
            </>
          )}
        </Card>
      </motion.div>
    </div>
  );
}