import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  Clock,
  Lightbulb,
  Rocket,
  Heart,
  ExternalLink,
  Sparkles,
  Mail
} from "lucide-react";
import { useHead } from '../../lib/useHead';
import Head from './+Head.jsx';
import { extractHeadData } from '../../lib/parseHead';

export default function RoadmapPage() {
  useHead(extractHeadData(Head));
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* CSS Grid pattern */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col items-center text-center">
            {/* Roadmap badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="outline" className="px-4 py-1.5 bg-violet-400/10 text-violet-400 border-violet-400/20">
                Roadmap
              </Badge>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The Satsu Roadmap
            </motion.h1>
            
            {/* Subheadline */}
            <motion.h2
              className="text-xl md:text-2xl text-violet-400 font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              What we're building – and why.
            </motion.h2>
            
            {/* Intro paragraph */}
            <motion.p
              className="text-lg text-zinc-300 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We're building Satsu with a clear vision: fast, transparent, developer-first analytics 
              that respect your users and your stack. No bloat, no cookie banners, no marketing gimmicks. 
              Just the tools you actually need – and nothing more.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Roadmap Timeline */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            <RoadmapSection 
              title="Now" 
              subtitle="What we're working on"
              icon={<Clock className="h-6 w-6" />}
              features={[
                { name: "Export pageview data (CSV & JSON)", completed: false },
                { name: "Basic conversion goals (e.g. visits to /thank-you)", completed: false },
                { name: "Daily & weekly email summaries", completed: false },
                { name: "Changelog inside the dashboard", completed: false },
                { name: "Anonymized IPs & GDPR-safe defaults", completed: true },
              ]}
              gradient="from-emerald-900/20 to-emerald-900/10"
              borderColor="border-emerald-800/30"
              iconBgColor="bg-emerald-500/10"
              iconColor="text-emerald-400"
            />
            
            <RoadmapSection 
              title="Next" 
              subtitle="What's coming soon"
              icon={<Calendar className="h-6 w-6" />}
              features={[
                { name: "Stats API for programmatic access", completed: false },
                { name: "Multi-site dashboard with tags & filters", completed: false },
                { name: "Saved filter views", completed: false },
                { name: "Extended data retention for Pro plans", completed: false },
                { name: "Advanced uptime checks (DNS, Ping, Port)", completed: false },
              ]}
              gradient="from-violet-900/20 to-violet-900/10"
              borderColor="border-violet-800/30"
              iconBgColor="bg-violet-500/10"
              iconColor="text-violet-400"
            />
            
            <RoadmapSection 
              title="Later" 
              subtitle="On our mind"
              icon={<Lightbulb className="h-6 w-6" />}
              features={[
                { name: "404 & broken link monitoring", completed: false },
                { name: "Real-time feed view", completed: false },
                { name: "Lighthouse performance snapshots", completed: false },
                { name: "Frontend SDKs (e.g. satsu-react, satsu-next)", completed: false },
                { name: "Plugin integrations for Astro, Nuxt, Webflow, etc.", completed: false },
              ]}
              gradient="from-amber-900/20 to-amber-900/10"
              borderColor="border-amber-800/30"
              iconBgColor="bg-amber-500/10"
              iconColor="text-amber-400"
            />
          </div>
        </div>
      </section>
      
      {/* Building Philosophy */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <BuildingPhilosophy />
        </div>
      </section>
      
      {/* Feedback CTA */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <FeedbackCTA />
        </div>
      </section>
    </div>
  );
}

function RoadmapSection({ title, subtitle, icon, features, gradient, borderColor, iconBgColor, iconColor }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
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
      className={`bg-gradient-to-br ${gradient} rounded-xl p-8 border ${borderColor} overflow-hidden relative`}
    >
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-white -z-10 mix-blend-overlay" />
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Section header */}
        <div className="md:w-1/3">
          <div className="flex items-center gap-3 mb-4">
            <div className={`flex-shrink-0 h-12 w-12 rounded-lg ${iconBgColor} flex items-center justify-center ${iconColor}`}>
              {icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className={`text-sm ${iconColor}`}>{subtitle}</p>
            </div>
          </div>
        </div>
        
        {/* Features list */}
        <div className="md:w-2/3">
          <motion.ul className="space-y-4" variants={containerVariants}>
            {features.map((feature, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mt-0.5 
                  ${feature.completed ? 'bg-green-500/20 text-green-500' : 'bg-zinc-800/50 text-zinc-400'}`}>
                  {feature.completed ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  )}
                </div>
                <span className="text-lg text-zinc-200">
                  {feature.name}
                  {feature.completed && (
                    <span className="ml-2 inline-flex text-sm bg-green-900/30 text-green-500 px-2 py-0.5 rounded-full">
                      done ✓
                    </span>
                  )}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}

function BuildingPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
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
      className="flex flex-col items-center text-center"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-violet-500/10 text-violet-400">
          <Rocket className="h-6 w-6" />
        </div>
      </motion.div>
      
      <motion.h3
        variants={itemVariants}
        className="text-3xl font-bold text-white mb-6"
      >
        Built lean. Built ethical.
      </motion.h3>
      
      <motion.p
        variants={itemVariants}
        className="text-lg text-zinc-300 max-w-2xl mb-10"
      >
        Satsu is bootstrapped and independent. We don't chase vanity metrics – we build what matters, 
        and we release only when it's solid. Our roadmap reflects what you ask for, what we believe in, 
        and what makes privacy-first analytics actually useful.
      </motion.p>
      
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
        <FeaturePill icon={<Heart className="h-4 w-4" />} text="Independent & bootstrapped" />
        <FeaturePill icon={<CheckCircle className="h-4 w-4" />} text="GDPR-compliant by default" />
        <FeaturePill icon={<Sparkles className="h-4 w-4" />} text="Developer-first approach" />
      </motion.div>
    </motion.div>
  );
}

function FeaturePill({ icon, text }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/70 rounded-full border border-zinc-700">
      <div className="text-violet-400">{icon}</div>
      <span className="text-zinc-200 text-sm font-medium">{text}</span>
    </div>
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
          <p className="text-xl font-medium text-white mb-6">
            Missing something? Tell us what you'd love to see.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-violet-600 hover:bg-violet-700 text-white flex items-center gap-2"
              size="lg"
            >
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@satsu.pro">hello@satsu.pro</a>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-zinc-700 hover:bg-zinc-800 text-zinc-200 flex items-center gap-2"
              size="lg"
            >
              <a href="/feedback">Send Feedback</a>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}