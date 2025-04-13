import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  ShieldCheck, 
  UserPlus, 
  Lock, 
  Trash, 
  LogIn,
  ArrowRight,
  AlertCircle,
  Eye,
  EyeOff
} from "lucide-react";

export default function SignupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    signupSource: '' // Changed from 'referral' to match your API
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear API error when user starts typing
    if (apiError) {
      setApiError(null);
    }
  };
  
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };
  
  // Password strength calculation
  useEffect(() => {
    const { password } = formData;
    if (!password) {
      setPasswordStrength(0);
      return;
    }
    
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    
    // Complexity checks
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    // Normalize to 0-100
    setPasswordStrength(Math.min(Math.floor(strength * 16.6), 100));
  }, [formData.password]);
  
  // Validate form on input change and blur
  useEffect(() => {
    const newErrors = {};
    
    // Only validate fields that have been touched
    if (touched.email) {
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
    }
    
    if (touched.fullName) {
      if (!formData.fullName) {
        newErrors.fullName = "Full name is required";
      } else if (formData.fullName.length < 2) {
        newErrors.fullName = "Name must be at least 2 characters";
      }
    }
    
    if (touched.password) {
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
    }
    
    if (touched.confirmPassword) {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords don't match";
      }
    }
    
    setErrors(newErrors);
  }, [formData, touched]);
  
  const validateForm = () => {
    // Touch all fields to trigger validation
    const allTouched = Object.keys(formData).reduce((acc, field) => {
      acc[field] = true;
      return acc;
    }, {});
    
    setTouched(allTouched);
    
    // Check if we have all required fields
    const requiredFields = {
      email: "Email is required",
      fullName: "Full name is required",
      password: "Password is required"
    };
    
    const newErrors = { ...errors };
    
    // Check for empty required fields
    Object.entries(requiredFields).forEach(([field, message]) => {
      if (!formData[field]) {
        newErrors[field] = message;
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    // Password validation
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setApiError(null);
    
    try {
      // Use your actual API endpoint
      const response = await fetch('https://api.satsu.pro/auth/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          fullName: formData.fullName,
          password: formData.password,
          signupSource: formData.signupSource || 'website'
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }
      
      // Redirect to verification page on successful registration
      window.location.href = "/verify";
    } catch (error) {
      console.error('Registration error:', error);
      setApiError(error.message || 'An error occurred during registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Get strength color and label
  const getPasswordStrengthInfo = () => {
    if (passwordStrength === 0) return { color: 'bg-zinc-700', label: '' };
    if (passwordStrength < 30) return { color: 'bg-red-500', label: 'Weak' };
    if (passwordStrength < 60) return { color: 'bg-yellow-500', label: 'Fair' };
    if (passwordStrength < 80) return { color: 'bg-green-500', label: 'Good' };
    return { color: 'bg-emerald-500', label: 'Strong' };
  };
  
  const strengthInfo = getPasswordStrengthInfo();
  
  return (
    <div className="w-full min-h-[calc(100vh-70px)] flex flex-col">
      {/* Main Content */}
      <div className="flex-1 py-12 md:py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left column - Text content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md"
              >
                {/* Header badge */}
                <div className="mb-6">
                  <Badge variant="outline" className="px-4 py-1.5 bg-violet-400/10 text-violet-400 border-violet-400/20">
                    Free during development
                  </Badge>
                </div>
                
                {/* Main headline */}
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                  Create Your Satsu Account
                </h1>
                
                {/* Subheadline */}
                <p className="text-xl text-zinc-300 mb-6">
                  Start tracking with real-time, privacy-first analytics – in minutes.
                </p>
                
                {/* Intro paragraph */}
                <p className="text-zinc-400 mb-10">
                  Satsu is built for developers who want clean, fast, and ethical analytics. Sign up to get access to your personal dashboard, add your websites, and start tracking traffic with a lightweight, cookie-free script.
                </p>
                
                {/* Trust features (desktop only) */}
                <div className="hidden md:block">
                  <h3 className="text-lg font-medium text-white mb-4">You're in good hands</h3>
                  <div className="space-y-3">
                    <TrustItem icon={<CheckCircle className="h-5 w-5" />} text="No credit card required" />
                    <TrustItem icon={<ShieldCheck className="h-5 w-5" />} text="Your data stays private – always" />
                    <TrustItem icon={<Trash className="h-5 w-5" />} text="You can delete your account at any time" />
                    <TrustItem icon={<Lock className="h-5 w-5" />} text="We don't track you, and we don't track your users" />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right column - Signup form */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-md mx-auto"
              >
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white">Create your account</CardTitle>
                    <CardDescription>
                      It takes less than a minute to start tracking.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* API Error Message */}
                    {apiError && (
                      <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-4 flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>{apiError}</span>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-300 block">
                          Email
                        </label>
                        <Input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="you@example.com" 
                          className={`bg-zinc-800 border-zinc-700 text-zinc-200 placeholder:text-zinc-500 ${
                            touched.email && errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
                          }`}
                        />
                        {touched.email && errors.email && (
                          <div className="text-red-400 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            {errors.email}
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="fullName" className="text-sm font-medium text-zinc-300 block">
                          Full Name
                        </label>
                        <Input 
                          type="text" 
                          id="fullName" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Jane Doe" 
                          className={`bg-zinc-800 border-zinc-700 text-zinc-200 placeholder:text-zinc-500 ${
                            touched.fullName && errors.fullName ? "border-red-500 focus-visible:ring-red-500" : ""
                          }`}
                        />
                        {touched.fullName && errors.fullName && (
                          <div className="text-red-400 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            {errors.fullName}
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="password" className="text-sm font-medium text-zinc-300 block">
                          Password
                        </label>
                        <div className="relative">
                          <Input 
                            type={showPassword ? "text" : "password"}
                            id="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="8+ characters" 
                            className={`bg-zinc-800 border-zinc-700 text-zinc-200 placeholder:text-zinc-500 pr-10 ${
                              touched.password && errors.password ? "border-red-500 focus-visible:ring-red-500" : ""
                            }`}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 focus:outline-none"
                            onClick={() => setShowPassword(!showPassword)}
                            tabIndex="-1"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        
                        {/* Password strength meter */}
                        {formData.password && (
                          <div className="mt-2 space-y-1">
                            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${strengthInfo.color} transition-all duration-300 ease-out`}
                                style={{ width: `${passwordStrength}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className={`
                                ${strengthInfo.label === 'Weak' ? 'text-red-400' : ''}
                                ${strengthInfo.label === 'Fair' ? 'text-yellow-400' : ''}
                                ${strengthInfo.label === 'Good' ? 'text-green-400' : ''}
                                ${strengthInfo.label === 'Strong' ? 'text-emerald-400' : ''}
                                ${!strengthInfo.label ? 'text-zinc-500' : ''}
                              `}>
                                {strengthInfo.label}
                              </span>
                              <span className="text-zinc-500">
                                {formData.password.length < 8 
                                  ? `At least ${8 - formData.password.length} more characters` 
                                  : ""}
                              </span>
                            </div>
                          </div>
                        )}
                        
                        {touched.password && errors.password && (
                          <div className="text-red-400 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            {errors.password}
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="confirmPassword" className="text-sm font-medium text-zinc-300 block">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <Input 
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword" 
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Re-enter password" 
                            className={`bg-zinc-800 border-zinc-700 text-zinc-200 placeholder:text-zinc-500 pr-10 ${
                              touched.confirmPassword && errors.confirmPassword ? "border-red-500 focus-visible:ring-red-500" : ""
                            }`}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 focus:outline-none"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            tabIndex="-1"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        {touched.confirmPassword && errors.confirmPassword && (
                          <div className="text-red-400 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="signupSource" className="text-sm font-medium text-zinc-300 block">
                          How did you hear about Satsu?
                        </label>
                        <select
                          id="signupSource"
                          name="signupSource"
                          value={formData.signupSource}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full p-2 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-200 focus:border-violet-500 focus:ring-violet-500 focus:ring-1 outline-none"
                        >
                          <option value="" disabled>Select an option...</option>
                          <option value="twitter">Twitter</option>
                          <option value="github">GitHub</option>
                          <option value="search">Search engine</option>
                          <option value="friend">Friend or colleague</option>
                          <option value="blog">Blog or article</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="bg-violet-600 hover:bg-violet-700 text-white w-full flex items-center justify-center gap-2 mt-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Creating account...
                          </>
                        ) : (
                          <>
                            <UserPlus className="h-4 w-4" />
                            Create Account
                          </>
                        )}
                      </Button>
                      
                      <div className="text-xs text-zinc-500 text-center mt-4">
                        By signing up, you agree to our 
                        <a href="/privacy" className="text-violet-400 hover:text-violet-300 mx-1">Privacy Policy</a>
                        and
                        <a href="/terms" className="text-violet-400 hover:text-violet-300 mx-1">Terms</a>.
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="border-t border-zinc-800 flex justify-center">
                    <div className="text-zinc-400 text-sm">
                      Already have an account?
                      <a href="https://app.satsu.pro" className="text-violet-400 hover:text-violet-300 inline-flex items-center ml-2">
                        Log in here
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
              
              {/* Trust features (mobile only) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="md:hidden mt-12 max-w-md mx-auto"
              >
                <h3 className="text-lg font-medium text-white mb-4">You're in good hands</h3>
                <div className="space-y-3">
                  <TrustItem icon={<CheckCircle className="h-5 w-5" />} text="No credit card required" />
                  <TrustItem icon={<ShieldCheck className="h-5 w-5" />} text="Your data stays private – always" />
                  <TrustItem icon={<Trash className="h-5 w-5" />} text="You can delete your account at any time" />
                  <TrustItem icon={<Lock className="h-5 w-5" />} text="We don't track you, and we don't track your users" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Grid pattern */}
      <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(180deg,transparent,white,transparent)] -z-10 pointer-events-none" />
    </div>
  );
}

function TrustItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400">
        {icon}
      </div>
      <span className="text-zinc-300">{text}</span>
    </div>
  );
}