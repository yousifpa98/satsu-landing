import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Check,
  Zap,
  DollarSign,
  Code,
  Bolt,
  Lock,
  Users,
  BarChart,
} from "lucide-react";

import { useHead } from '../../../lib/useHead';
import Head from './+Head.jsx';
import { extractHeadData } from '../../../lib/parseHead';

export default function FathomComparePage() {
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
              <Badge
                variant="outline"
                className="px-4 py-1.5 bg-violet-400/10 text-violet-400 border-violet-400/20"
              >
                VS Fathom
              </Badge>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Satsu vs Fathom
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-violet-400 font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Minimal analytics, built for developers – not teams.
            </motion.p>

            {/* Intro paragraph */}
            <motion.p
              className="text-lg text-zinc-300 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Fathom is one of the strongest privacy-focused analytics tools out
              there. It's fast, elegant, and built with ethics in mind. But if
              you're a solo dev or indie builder looking for something even
              leaner, simpler, and more focused, Satsu might be the better fit.
              <span className="block mt-2">
                Here's how the two tools compare.
              </span>
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
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Analytics without the bloat
              </h3>

              <p className="text-zinc-300 mb-2">
                Fathom is a great choice for ethical businesses and small teams.
                But if you're looking for something even more focused,
                developer-first, and made for the solo creator economy, Satsu
                keeps things tighter, simpler, and faster.
              </p>

              <p className="text-zinc-300 mb-8 font-medium">
                Track your site. Stay compliant. Keep building.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 rounded-lg flex items-center gap-2"
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

function ComparisonPoints() {
  const points = [
    {
      id: "pricing",
      title: "Pricing Philosophy",
      satsu:
        "Free during development, and once pricing begins, it'll stay hobbyist- and indie-friendly. No usage-based traps, no team features you don't need. Just clean analytics – always affordable, and with a core that stays free forever.",
      fathom:
        "Starts at $14/month, which is fair for small teams and businesses. But if you're running personal or side projects, the cost can feel high – especially if you track multiple domains.",
    },
    {
      id: "script",
      title: "Script Size & Speed",
      satsu:
        "Under 3 KB – still blazing fast, with zero impact on performance.",
      fathom: "Around 1.5 KB – super fast.",
    },
    {
      id: "setup",
      title: "Setup Simplicity",
      satsu:
        "Skips the account step. Just grab the script, add it to your site, and you're done. It's developer-first and frictionless – ideal for tiny sites, static pages, and fast prototyping.",
      fathom: "Requires a quick signup and gives you a script to embed.",
    },
    {
      id: "realtime",
      title: "Real-Time Tracking",
      satsu:
        "Gives you instant tracking with no sampling or delays – what you see is exactly what's happening right now.",
      fathom: "Supports near real-time analytics, updating every few seconds.",
    },
    {
      id: "privacy",
      title: "Privacy & Compliance",
      satsu:
        "100% GDPR and CCPA compliant, cookieless, and privacy-first. Satsu takes a no-options-needed approach: privacy is always on, with no extra settings or configs.",
      fathom:
        "100% GDPR and CCPA compliant, cookieless, and privacy-first. Neither tracks personal data, and both let your users browse freely without annoying banners.",
    },
    {
      id: "features",
      title: "Features & Focus",
      satsu:
        "Stays laser-focused on simple, essential tracking: pageviews, referrers, devices, and locations. No fluff. No team dashboards. Just data that matters – for devs.",
      fathom:
        "Has added features like uptime monitoring, teams, custom events, and more. That's great for growing products – but also means a heavier UI and broader scope.",
    },
    {
      id: "hosting",
      title: "Open Source / Hosting",
      satsu:
        "Closed source and fully hosted. No servers, no updates, no self-hosting headaches.",
      fathom:
        "Closed source and fully hosted – just like Satsu. No servers, no updates, no self-hosting headaches.",
    },
  ];

  return (
    <div className="space-y-6">
      {points.map((point, index) => (
        <ComparisonCard
          key={point.id}
          title={point.title}
          index={index + 1}
          satsu={point.satsu}
          fathom={point.fathom}
        />
      ))}
    </div>
  );
}

function ComparisonCard({ title, index, satsu, fathom }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Get icon based on comparison point title
  const getIcon = (title) => {
    switch (title) {
      case "Pricing Philosophy":
        return <DollarSign className="h-5 w-5" />;
      case "Script Size & Speed":
        return <Zap className="h-5 w-5" />;
      case "Setup Simplicity":
        return <Code className="h-5 w-5" />;
      case "Real-Time Tracking":
        return <Bolt className="h-5 w-5" />;
      case "Privacy & Compliance":
        return <Lock className="h-5 w-5" />;
      case "Features & Focus":
        return <BarChart className="h-5 w-5" />;
      case "Open Source / Hosting":
        return <Users className="h-5 w-5" />;
      default:
        return <Check className="h-5 w-5" />;
    }
  };

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
            {getIcon(title)}
          </div>
          <CardTitle className="text-lg font-semibold text-white">
            {index}. {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
            <div className="p-5 bg-amber-900/5">
              <div className="font-medium text-amber-400 mb-2">Fathom</div>
              <p className="text-zinc-400 text-sm">{fathom}</p>
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
    "You're a solo developer or indie hacker",
    "You want simple analytics for a side project or open source site",
    "You don't need team access, multi-user dashboards, or extras",
    "You care about speed, privacy, and setup time more than feature depth",
    "You want to start free and stay affordable – without usage-based stress",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gradient-to-br from-violet-950/20 to-zinc-900/95 border border-zinc-800/60 rounded-xl p-6 md:p-8"
    >
      <h3 className="text-2xl font-bold text-white mb-8">
        When Satsu is a better fit than Fathom:
      </h3>

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
