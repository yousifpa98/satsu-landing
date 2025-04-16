import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  ExternalLink,
  Globe,
  ChevronRight,
  Compass,
  Clock,
  Smartphone,
  Activity,
  FileText,
  ArrowDown,
  FileCode
} from "lucide-react";
import { useHead } from '../../lib/useHead';
import Head from './+Head.jsx';
import { extractHeadData } from '../../lib/parseHead';

export default function FeaturesPage() {
  useHead(extractHeadData(Head));
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* CSS Grid pattern */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col items-center text-center">
            {/* Features badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="outline" className="px-4 py-1.5 bg-violet-400/10 text-violet-400 border-violet-400/20">
                Features
              </Badge>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              All the insights. <span className="bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">None of the bloat.</span>
            </motion.h1>
            
            {/* Intro paragraph */}
            <motion.p
              className="text-xl text-zinc-300 mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Satsu gives you the analytics you actually need — fast, focused, and privacy-friendly. 
              No marketing fluff, no dark patterns. Just clean visibility into what matters.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Main Features */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BarChart3 className="h-6 w-6" />}
              title="Pageviews"
              description="Track how many people visit each page, when, and how often. Clean charts, zoomable timeframes, and real-time view support."
              delay={0}
            />
            
            <FeatureCard 
              icon={<Compass className="h-6 w-6" />}
              title="Referrers"
              description="See where your traffic is coming from – including direct hits, search engines, and referring sites. No attribution hacks, just the raw truth."
              delay={0.1}
            />
            
            <FeatureCard 
              icon={<Clock className="h-6 w-6" />}
              title="Page Performance"
              description="Get average response times per page — spot slowdowns and track uptime trends without needing a separate tool."
              delay={0.2}
            />
            
            <FeatureCard 
              icon={<Globe className="h-6 w-6" />}
              title="Location"
              description="Country, region, and city-level geodata (anonymized by default). Perfect for seeing where your users actually are — no creepy fingerprinting required."
              delay={0.3}
            />
            
            <FeatureCard 
              icon={<Smartphone className="h-6 w-6" />}
              title="Devices"
              description="Break down traffic by screen size to understand how many users are on mobile, tablet, or desktop."
              delay={0.4}
            />
            
            <FeatureCard 
              icon={<Activity className="h-6 w-6" />}
              title="Uptime Monitoring"
              description="Track whether your site is online, how fast it responds, and when it last went down — all without leaving your analytics."
              delay={0.5}
            />
          </div>
        </div>
      </section>
      
      {/* Coming Soon */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <ComingSoonSection />
        </div>
      </section>
      
      {/* Why Not More? */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <WhyNotMoreSection />
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <FeaturesCTA />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay }}
      className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-violet-800/40 transition-colors duration-300"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="h-12 w-12 bg-violet-500/10 rounded-lg flex items-center justify-center mb-6">
        <div className="text-violet-400">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-zinc-300">{description}</p>
    </motion.div>
  );
}

function ComingSoonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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
      className="bg-gradient-to-br from-violet-950/30 to-indigo-950/30 rounded-xl p-8 border border-violet-900/30 overflow-hidden relative"
    >
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-white -z-10 mix-blend-overlay" />
      
      <motion.div variants={itemVariants} className="mb-6 flex justify-center sm:justify-start">
        <Badge variant="outline" className="px-3 py-1 bg-violet-400/10 text-violet-400 border-violet-400/20">
          Coming Soon
        </Badge>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <motion.div variants={itemVariants} className="flex gap-4">
          <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Reports & Digests</h4>
            <p className="text-zinc-300">
              Get weekly and monthly summaries straight to your inbox — clean, focused and ready for humans.
            </p>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex gap-4">
          <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
            <FileCode className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-2">CSV & JSON Export</h4>
            <p className="text-zinc-300">
              Export your data anytime. No paywall, no nonsense.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function WhyNotMoreSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
        Why not more?
      </h3>
      
      <div className="max-w-2xl mx-auto text-zinc-300 space-y-4">
        <p>
          Satsu isn't trying to be your marketing dashboard.
        </p>
        <p>
          It's built for developers who want fast, focused insights — not a bloated UI full of vanity metrics.
        </p>
        <p>
          We build features with care, and we ship only what makes sense.
        </p>
      </div>
    </motion.div>
  );
}

function FeaturesCTA() {
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
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to ditch the bloat?
          </h3>
          <p className="text-zinc-300 mb-8">
            Experience fast, focused analytics that respect both you and your users.
            Set up in under 2 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-violet-600 hover:bg-violet-700 text-white flex items-center gap-2"
              size="lg"
            >
              <a href="/signup">Get Started Free</a>
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-zinc-700 hover:bg-zinc-800 text-zinc-200 flex items-center gap-2"
              size="lg"
            >
              <a href="/roadmap">See Full Roadmap</a>
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}