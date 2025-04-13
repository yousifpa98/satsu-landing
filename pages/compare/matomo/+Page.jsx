import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, 
  Check, 
  Server, 
  Layout, 
  Zap, 
  Lock, 
  Bolt, 
  Target, 
  Code 
} from "lucide-react";

import { useHead } from '../../../lib/useHead';
import Head from './+Head.jsx';
import { extractHeadData } from '../../../lib/parseHead';

export default function MatomoComparePage() {
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
                VS Matomo
              </Badge>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Satsu vs Matomo
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-violet-400 font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A faster, simpler alternative to enterprise-grade analytics.
            </motion.p>
            
            {/* Intro paragraph */}
            <motion.p
              className="text-lg text-zinc-300 mb-6 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Matomo is a powerful analytics suite with deep customization and enterprise-grade compliance tools. It's popular among privacy-focused organizations and public institutions – especially those needing self-hosted data control.
            </motion.p>
            
            <motion.p
              className="text-lg text-zinc-300 mb-4 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="font-semibold">But for most developers and indie projects, Matomo is simply too heavy.</span>
            </motion.p>
            
            <motion.p
              className="text-lg text-zinc-300 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              If you want fast, real-time, cookie-free tracking without server setup or bloated features, <span className="font-semibold">Satsu might be exactly what you need.</span>
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Key Differences Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <ComparisonPoints />
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
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Build, don't configure</h3>
              
              <p className="text-zinc-300 mb-8">
                Matomo is powerful – but it's built for complex teams, not fast-moving developers. Satsu cuts through the noise. It's fast, ethical, and made for indie builders who just want to understand their traffic without becoming a data engineer.
              </p>
              
              <Button 
                size="lg" 
                className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 rounded-lg flex items-center gap-2 mx-auto"
              >
                <a href="/signup">Get Started Free</a>
                <ChevronRight className="h-4 w-4" />
              </Button>
              
              <p className="text-zinc-400 text-sm mt-4">
                The lightweight, privacy-first Matomo alternative for devs who prefer building over configuring.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ComparisonPoints() {
  const points = [
    {
      id: "hosting",
      title: "Hosting & Setup",
      icon: <Server />,
      matomo: "Primarily a self-hosted tool. That means provisioning a server, installing updates, managing security, and scaling infrastructure yourself – unless you pay for their expensive cloud service.",
      satsu: "Fully hosted and maintenance-free. One script tag, and you're live. No infrastructure, no updates, no hassle."
    },
    {
      id: "simplicity",
      title: "Simplicity & UX",
      icon: <Layout />,
      matomo: "Has a huge feature set – from heatmaps to goal tracking to tag managers – but that also means complexity. The UI feels like older versions of Google Analytics: dense, multi-layered, and built for analysts.",
      satsu: "Clean and modern. The dashboard shows just what you need: pageviews, visitors, devices, referrers – no digging, no overwhelm. It's fast, dark-mode by default, and built for developers who value clarity."
    },
    {
      id: "performance",
      title: "Script Weight & Performance",
      icon: <Zap />,
      matomo: "Tracking script is relatively heavy, often exceeding 20 KB or more depending on plugins.",
      satsu: "Ultra-lightweight – under 3 KB – and has virtually zero performance impact. If your site performance matters (and it should), the difference is huge."
    },
    {
      id: "privacy",
      title: "Privacy & Compliance",
      icon: <Lock />,
      matomo: "Can be GDPR/CCPA compliant – but only if you configure it properly. Many features (like cookies or IP logging) are on by default.",
      satsu: "Privacy-first by default. No cookies, no IP tracking, no fingerprinting. No consent banner required. Just ethical tracking with full compliance out of the box."
    },
    {
      id: "realtime",
      title: "Real-Time Analytics",
      icon: <Bolt />,
      matomo: "Supports real-time analytics, but performance can suffer depending on your hosting setup.",
      satsu: "Delivers true real-time stats, with no sampling or server bottlenecks – optimized for speed from day one."
    },
    {
      id: "features",
      title: "Features vs Focus",
      icon: <Target />,
      matomo: "Feature-rich, with modules for everything from SEO reports to eCommerce tracking. But for many devs, that's overkill.",
      satsu: "Takes the opposite approach: focused, minimal analytics with exactly what you need and nothing you don't."
    },
    {
      id: "opensource",
      title: "Open Source",
      icon: <Code />,
      matomo: "Fully open source and ideal for teams that require full control of their data stack.",
      satsu: "Closed source and fully hosted – which is exactly what many solo devs prefer. You get speed, simplicity, and no setup stress."
    }
  ];
  
  return (
    <div className="space-y-6">
      {points.map((point, index) => (
        <ComparisonCard 
          key={point.id}
          title={point.title}
          index={index + 1}
          icon={point.icon}
          matomo={point.matomo}
          satsu={point.satsu}
        />
      ))}
    </div>
  );
}

function ComparisonCard({ title, index, icon, matomo, satsu }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-5 border-b border-zinc-800 bg-zinc-900/80 flex flex-row items-center space-x-4">
          <div className="h-8 w-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
            {icon}
          </div>
          <CardTitle className="text-lg font-semibold text-white">
            {index}. {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
            <div className="p-5 bg-red-900/5">
              <div className="font-medium text-red-400 mb-2">Matomo</div>
              <p className="text-zinc-400 text-sm">{matomo}</p>
            </div>
            <div className="p-5 bg-violet-900/10">
              <div className="font-medium text-violet-400 mb-2">Satsu</div>
              <p className="text-zinc-300 text-sm">{satsu}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function BetterFitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const benefits = [
    "You're a solo dev or small team with no time for server setup",
    "You just want quick, privacy-friendly insights, not an analytics suite",
    "You care about performance and page speed",
    "You want to start tracking in under a minute",
    "You're not looking for heatmaps, session replay, or complex funnels"
  ];
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
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
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gradient-to-br from-violet-950/20 to-zinc-900/95 border border-zinc-800/60 rounded-xl p-6 md:p-8"
    >
      <h3 className="text-2xl font-bold text-white mb-8">When Satsu is a better fit than Matomo:</h3>
      
      <div className="space-y-5">
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