import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  CheckCircle,
  MailCheck,
  Clock,
  RefreshCw
} from "lucide-react";

import { useHead } from '../../lib/useHead';;
import Head from './+Head.jsx';
import { extractHeadData } from '../../lib/parseHead';

export default function VerifyPage() {
  useHead(extractHeadData(Head));
  const [isResending, setIsResending] = useState(false);
  const [emailResent, setEmailResent] = useState(false);
  
  // Simulate email resend
  const handleResendEmail = () => {
    setIsResending(true);
    
    setTimeout(() => {
      setIsResending(false);
      setEmailResent(true);
      
      // Reset the "email resent" message after a few seconds
      setTimeout(() => {
        setEmailResent(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="w-full min-h-[calc(100vh-70px)] flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 md:py-16">
        <div className="container max-w-md mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Success icon */}
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
            </div>
            
            {/* Main headline */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Thanks for signing up!
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-zinc-300 mb-6">
              Your account is almost ready.
            </p>
            
            {/* Email section */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-medium text-white">Check your email</h2>
              </div>
              
              <div className="space-y-4 text-left">
                <p className="text-zinc-400">
                  We've sent a verification link to your email address. Please check your inbox and click the link to activate your account.
                </p>
                
                <div className="flex items-start gap-2 text-zinc-400">
                  <MailCheck className="h-5 w-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <p>Check your spam folder if you don't see it in your inbox.</p>
                </div>
                
                <div className="flex items-start gap-2 text-zinc-400">
                  <Clock className="h-5 w-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <p>The link will expire in 24 hours.</p>
                </div>
              </div>
              
              {/* Resend email button */}
              <div className="mt-6 border-t border-zinc-800 pt-4">
                <p className="text-sm text-zinc-400 mb-3">
                  Didn't receive the email?
                </p>
                
                {emailResent ? (
                  <div className="text-green-400 text-sm flex justify-center items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    Email sent! Check your inbox.
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    className="text-zinc-300 border-zinc-700 hover:bg-zinc-800"
                    disabled={isResending}
                    onClick={handleResendEmail}
                  >
                    {isResending ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Resend verification email
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
            
            {/* Help note */}
            <p className="text-sm text-zinc-500">
              Need help? Contact us at{" "}
              <a href="mailto:hello@satsu.pro" className="text-violet-400 hover:text-violet-300">
                hello@satsu.pro
              </a>
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* CSS Grid pattern */}
      <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(180deg,transparent,white,transparent)] -z-10 pointer-events-none" />
    </div>
  );
}