import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Check, Zap, DollarSign, Code, Bolt, Lock, Users } from "lucide-react";

import { useHead } from '../../../lib/useHead';
import Head from './+Head.jsx';
import { extractHeadData } from '../../../lib/parseHead';

export default function PlausibleComparePage() {
  useHead(extractHeadData(Head));
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* CSS Grid pattern */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col items-center text-center">
            {/* VS badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="outline" className="px-4 py-1.5 bg-violet-400/10 text-violet-400 border-violet-400/20">
                VS Plausible
              </Badge>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Satsu vs Plausible
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-violet-400 font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The simpler, developer-first alternative – with a forever-free core.
            </motion.p>
            
            {/* Intro paragraph */}
            <motion.p
              className="text-lg text-zinc-300 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Plausible is a solid Google Analytics alternative with strong privacy features and a growing reputation in the ethical analytics space. But if you're a solo developer, indie builder, or hobby creator who wants something even lighter, faster, and more focused, Satsu might be a better fit. Here's how the two compare – and why developers are choosing Satsu.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Key Differences Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Satsu vs Plausible: Key Differences
          </motion.h2>
          
          <KeyDifferences />
        </div>
      </section>
      
      {/* When Satsu is Better Section */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <BetterFitSection />
        </div>
      </section>
      
      {/* Summary & CTA Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            className="bg-gradient-to-r from-violet-950/30 to-indigo-950/30 rounded-2xl p-8 md:p-10 border border-violet-800/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 mix-blend-screen" />
            
            <div className="relative z-10 md:flex justify-between items-center gap-8">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">A different approach</h3>
                
                <p className="text-zinc-300 mb-2">
                  Plausible is a great analytics tool – no doubt about it. But if you're looking for something even leaner, more developer-focused, and designed to stay affordable (or free), Satsu delivers exactly that.
                </p>
                <p className="text-zinc-300">
                  It does less – on purpose – so you can build more.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Button 
                  size="lg" 
                  className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 rounded-lg flex items-center gap-2 w-full md:w-auto"
                >
                  <a href="/signup">Get Started Free</a>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function KeyDifferences() {
  const differences = [
    {
      id: "pricing",
      title: "Pricing Philosophy",
      description: "Plausible is fair, but starts at around $9/month and scales with pageviews. If you're running multiple side projects, costs can add up fast. Satsu is free during development – and once pricing starts, it'll stay affordable and simple. Even better: the core tracking features will always remain free for devs, forever.",
      icon: <DollarSign className="h-5 w-5 text-violet-400" />
    },
    {
      id: "script",
      title: "Script Size & Speed",
      description: "Plausible's script is impressively small (~1 KB), which makes it great for performance. Satsu is also ultra-lightweight – around 3 KB – and optimized to have zero noticeable impact on page load or Core Web Vitals.",
      icon: <Zap className="h-5 w-5 text-violet-400" />
    },
    {
      id: "setup",
      title: "Setup & Simplicity",
      description: "Both tools are easy to install with a single script tag – no accounts or dashboards to configure. But Satsu is focused purely on developers. It gives you the exact data you need – in a clean, fast, real-time interface. No extras, no clutter.",
      icon: <Code className="h-5 w-5 text-violet-400" />
    },
    {
      id: "realtime",
      title: "Real-Time Tracking",
      description: "Plausible updates every few seconds – which is pretty close to real-time. Satsu tracks in true real-time. No delay, no sampling. What's happening now is what you see now.",
      icon: <Bolt className="h-5 w-5 text-violet-400" />
    },
    {
      id: "privacy",
      title: "Data & Privacy",
      description: "Both Satsu and Plausible are GDPR/CCPA compliant and don't use cookies. However, Plausible is open source and self-hostable, while Satsu is a fully hosted, closed-source solution with zero personal data collection. That means no server maintenance, no setup headaches – just plug and go.",
      icon: <Lock className="h-5 w-5 text-violet-400" />
    },
    {
      id: "focus",
      title: "Focus & Audience",
      description: "Plausible is built for a wide audience: marketers, startups, agencies, and ethical businesses. Satsu is built for developers – period. It's designed for solo devs, hobby projects, indie SaaS, open-source maintainers, and anyone who wants tracking without distractions.",
      icon: <Users className="h-5 w-5 text-violet-400" />
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {differences.map((diff, index) => (
        <DifferenceCard 
          key={diff.id}
          title={diff.title}
          description={diff.description}
          icon={diff.icon}
          index={index}
        />
      ))}
    </div>
  );
}

function DifferenceCard({ title, description, icon, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-violet-800/30 transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="h-10 w-10 bg-violet-500/10 rounded-lg flex items-center justify-center mb-4">
            {icon}
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-3">
            {index + 1}. {title}
          </h3>
          
          <p className="text-zinc-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function BetterFitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const benefits = [
    "You're a solo developer or indie hacker running multiple small projects",
    "You want tracking without monthly fees (or with minimal cost later)",
    "You don't need dashboards full of marketing metrics – just pageviews, referrers, and real-time data",
    "You want to install and forget – no self-hosting, no config, no updates"
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
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-8"
    >
      <h3 className="text-2xl font-bold text-white mb-8">When Satsu is a better fit than Plausible:</h3>
      
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-violet-500/20 flex items-center justify-center mt-0.5">
              <Check className="h-4 w-4 text-violet-400" />
            </div>
            <p className="text-zinc-300">{benefit}</p>
          </motion.div>
        ))}
      </div>
      </motion.div>
  );
}