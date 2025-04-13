import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, MessageSquare, Github, Heart, Zap, Sparkles, Lock } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* CSS Grid pattern */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex flex-col items-center text-center">
            {/* Price tag badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-400/10 text-violet-400 border border-violet-400/20">
                <span className="font-mono text-sm">$0.00</span>
                <span className="mx-2 text-zinc-500">/</span>
                <span className="text-sm">Early Access</span>
              </div>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Fair by Design. <span className="bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">Free for Now.</span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              className="text-xl text-zinc-300 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Satsu is currently free while in active development. We're building in public – and your feedback helps shape what Satsu becomes.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <PricingInfoCard />
            </div>
            <div className="md:col-span-1">
              <FreeFeaturesCard />
            </div>
          </div>
        </div>
      </section>
      
      {/* Feedback CTA Section */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <FeedbackCTA />
        </div>
      </section>
    </div>
  );
}

function PricingInfoCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 h-full"
    >
      <motion.h3 
        variants={itemVariants}
        className="text-2xl font-semibold text-white mb-6"
      >
        About our pricing
      </motion.h3>
      
      <motion.div 
        variants={itemVariants}
        className="space-y-6 text-zinc-300"
      >
        <p className="leading-relaxed">
          Satsu is in early development – somewhere between alpha and beta. It already works, but we're still improving the experience, adding polish, and listening closely to what developers need. Right now, it's completely free to use. No paywalls, no credit cards, no strings attached. Just plug it in and track your site.
        </p>
        
        <p className="leading-relaxed">
          In the future, we'll introduce a simple and transparent pricing model to support ongoing development. But Satsu will always stay what it is at its core: affordable, independent, and made for developers who want a fast, privacy-first analytics tool without the bloat.
        </p>
        
        <p className="leading-relaxed">
          We're not building this for enterprises or marketing departments. We're building it for indie hackers, solo devs, hobby projects, and privacy-conscious creators who just want clean, reliable tracking.
        </p>
        
        <div className="pt-2 border-t border-zinc-800">
          <p className="text-sm text-zinc-400 italic">
            We believe in building useful tools, not locking people out. Pricing should never be a barrier to better analytics.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FreeFeaturesCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        staggerChildren: 0.08
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
  
  const features = [
    { icon: <Zap className="h-4 w-4 text-amber-400" />, text: "Real-time dashboard" },
    { icon: <Lock className="h-4 w-4 text-emerald-400" />, text: "GDPR-safe analytics" },
    { icon: <Sparkles className="h-4 w-4 text-sky-400" />, text: "Cookieless tracking" },
    { icon: <Heart className="h-4 w-4 text-rose-400" />, text: "No consent banners needed" },
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 border border-violet-800/30 rounded-xl p-6 md:p-6 h-full"
    >
      <motion.h3 
        variants={itemVariants}
        className="text-xl font-medium text-white mb-6"
      >
        What will always be free
      </motion.h3>
      
      <motion.div 
        variants={itemVariants}
        className="mb-6 text-zinc-300"
      >
        <p>
          The core features of Satsu – including cookieless tracking, GDPR-safe analytics, and real-time dashboards – will always be free. Whether you're running a small side project, an open source site, or just want to avoid Google, Satsu will be there for you.
        </p>
      </motion.div>
      
      <div className="space-y-3 mt-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center gap-3 text-zinc-200"
          >
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center">
              {feature.icon}
            </div>
            <span>{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FeedbackCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-violet-950/50 to-indigo-950/50 rounded-2xl p-8 border border-violet-900/30 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 mix-blend-screen" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center max-w-xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">We're shaping Satsu with the community.</h3>
          <p className="text-zinc-300 mb-8">
            Got feedback or ideas? We'd love to hear from you. Your input directly shapes what Satsu becomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-violet-600 hover:bg-violet-700 text-white flex items-center gap-2"
              size="lg"
            >
              <MessageSquare className="h-4 w-4" />
              <a href="/feedback">Send us a message</a>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-zinc-700 hover:bg-zinc-800 text-zinc-200 flex items-center gap-2"
              size="lg"
            >
              <Github className="h-4 w-4" />
              Join the discussion
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}