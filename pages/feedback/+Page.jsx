import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, MessageSquare, ArrowRight, ThumbsUp, Mail, Twitter } from "lucide-react";

export default function FeedbackPage() {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success, error
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* CSS Grid pattern */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col items-center text-center">
            {/* Feedback badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="outline" className="px-4 py-1.5 bg-violet-400/10 text-violet-400 border-violet-400/20">
                Feedback
              </Badge>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Help Us Make Satsu Better
            </motion.h1>
            
            {/* Intro paragraph */}
            <motion.p
              className="text-lg text-zinc-300 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're building Satsu in public – and your feedback shapes everything. Whether you found a bug, have a feature idea, or just want to say hi, we'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* What kind of feedback */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <FeedbackTypesCard />
        </div>
      </section>
      
      {/* Feedback Form */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <FeedbackForm formState={formState} setFormState={setFormState} />
            </div>
            <div className="md:col-span-1">
              <OtherFeedbackOptions />
            </div>
          </div>
        </div>
      </section>
      
      {/* Final Note */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <FinalNote />
        </div>
      </section>
    </div>
  );
}

function FeedbackTypesCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const feedbackTypes = [
    "Something didn't work as expected",
    "You're missing a feature",
    "You love (or hate) the UI",
    "You want to know what's planned",
    'You just want to say "yo, cool project"'
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">What kind of feedback?</h2>
      
      <div className="space-y-4">
        {feedbackTypes.map((type, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-violet-500/20 flex items-center justify-center mt-0.5">
              <span className="text-violet-400">–</span>
            </div>
            <p className="text-zinc-300">{type}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FeedbackForm({ formState, setFormState }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormState('submitting');
    
    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formspree.io/f/manevpdr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormState('success');
        e.target.reset();
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-xl text-white">Send us your thoughts</CardTitle>
          <CardDescription className="text-zinc-400">
            We read every message and use it to shape Satsu's future.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {formState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">Thanks for your feedback!</h3>
              <p className="text-zinc-300 mb-6">
                We appreciate you taking the time to share your thoughts. We'll carefully consider your input as we continue to improve Satsu.
              </p>
              <Button 
                variant="outline" 
                className="text-zinc-200 border-zinc-700 hover:bg-zinc-800"
                onClick={() => setFormState('idle')}
              >
                Send another message
              </Button>
            </div>
          ) : formState === 'error' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">Something went wrong</h3>
              <p className="text-zinc-300 mb-6">
                We couldn't send your feedback. Please try again or reach out via email at hello@satsu.dev
              </p>
              <Button 
                variant="outline" 
                className="text-zinc-200 border-zinc-700 hover:bg-zinc-800"
                onClick={() => setFormState('idle')}
              >
                Try again
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300 block">
                  Your email (optional)
                </label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="you@example.com" 
                  className="bg-zinc-800 border-zinc-700 text-zinc-200 placeholder:text-zinc-500"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-300 block">
                  Subject
                </label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Feature request, bug report, etc."
                  required
                  className="bg-zinc-800 border-zinc-700 text-zinc-200 placeholder:text-zinc-500"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300 block">
                  Your message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us what's on your mind..."
                  required
                  rows={6}
                  className="bg-zinc-800 border-zinc-700 text-zinc-200 placeholder:text-zinc-500 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-violet-600 hover:bg-violet-700 text-white w-full flex items-center justify-center gap-2"
                disabled={formState === 'submitting'}
              >
                {formState === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Feedback
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

function OtherFeedbackOptions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h3 className="text-xl font-semibold text-white mb-4">How to share it</h3>
      
      <div className="space-y-4">
        <a 
          href="mailto:hello@satsu.dev" 
          className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex items-center gap-4 hover:border-violet-800/30 transition-colors duration-300 group block"
        >
          <div className="h-10 w-10 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors duration-300">
            <Mail className="h-5 w-5 text-violet-400" />
          </div>
          <div>
            <div className="text-sm text-zinc-400">Email us</div>
            <div className="text-zinc-300 font-medium">hello@satsu.dev</div>
          </div>
        </a>
        
        <a 
          href="https://twitter.com/satsuapp" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex items-center gap-4 hover:border-violet-800/30 transition-colors duration-300 group block"
        >
          <div className="h-10 w-10 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors duration-300">
            <Twitter className="h-5 w-5 text-violet-400" />
          </div>
          <div>
            <div className="text-sm text-zinc-400">Twitter</div>
            <div className="text-zinc-300 font-medium">@satsuapp</div>
          </div>
        </a>
      </div>
    </motion.div>
  );
}

function FinalNote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <ThumbsUp className="h-10 w-10 text-violet-400 mx-auto mb-4 opacity-80" />
      <h3 className="text-xl font-medium text-white mb-4">No pressure. No sign-up. Just honest thoughts.</h3>
      <p className="text-zinc-300 max-w-xl mx-auto">
        Thanks for helping us build something better.
      </p>
    </motion.div>
  );
}