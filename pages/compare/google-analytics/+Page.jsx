import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Check, X, ExternalLink } from "lucide-react";

import { useHead } from "../../../lib/useHead";
import Head from "./+Head.jsx";
import { extractHeadData } from "../../../lib/parseHead";

export default function GoogleAnalyticsComparePage() {
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
                VS Google Analytics
              </Badge>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Satsu vs Google Analytics
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-violet-400 font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The lightweight, privacy-first alternative for developers.
            </motion.p>

            {/* Intro paragraph */}
            <motion.p
              className="text-lg text-zinc-300 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Google Analytics is powerful, but it comes with serious baggage –
              from privacy concerns and cookie banners to bloated scripts and
              overwhelming dashboards. Satsu is a clean, focused alternative
              that gives developers exactly what they need: fast, ethical,
              real-time analytics – without the bloat or complexity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Comparison Reasons Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Developers Are Switching from Google Analytics to Satsu
          </motion.h2>

          <ComparisonReasons />
        </div>
      </section>

      {/* At a Glance Section */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <AtAGlance />
        </div>
      </section>

      {/* CTA Section */}
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
                Ready to upgrade your analytics?
              </h3>

              <p className="text-zinc-300 mb-8">
                Satsu is the Google Analytics alternative for developers who
                want to move fast, stay compliant, and respect their users. Skip
                the bloat. Drop in one script. Start tracking today – for free.
              </p>

              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 rounded-lg flex items-center gap-2 mx-auto"
              >
                <a href="/signup">Get Started Free</a>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ComparisonReasons() {
  const reasons = [
    {
      id: "privacy",
      title: "Privacy by Default",
      satsu:
        "Satsu collects no cookies, no session IDs, and no personal identifiers. We store IP-based location data to show you geo insights, but we don’t use it to track or identify users. No consent banner required. It's privacy-first where it matters most.",
      ga: "Collects personal data including full IP addresses, cookies, and user identifiers. Requires consent banners in most regions, with data often processed by third-party systems for marketing or profiling.",
    },
    {
      id: "lightweight",
      title: "Lightweight and Fast",
      satsu:
        "Loads in ~3 KB and has zero impact on performance. Your site stays fast, your users stay happy.",
      ga: "Adds 40–100 KB+ to your site, and often includes third-party calls and delays.",
    },
    {
      id: "realtime",
      title: "Real-Time, Not Sampled",
      satsu:
        "Shows you what's happening on your site right now. Every visitor, every pageview – in real-time, with no sampling.",
      ga: "Often delays data by hours and even samples your data on high-traffic pages. The result? Incomplete or confusing numbers.",
    },
    {
      id: "setup",
      title: "Simpler Setup",
      satsu:
        "Just one script. Drop it into your site and start tracking – in under 30 seconds.",
      ga: "Requires a Google account, a property, possibly Google Tag Manager, and then hope you didn't mess up.",
    },
    {
      id: "developers",
      title: "Built for Developers",
      satsu:
        "Built for developers. It gives you the numbers you actually care about – visitors, pageviews, referrers, devices – in one clean, dark-mode dashboard.",
      ga: "A tool for marketers, filled with dashboards, reports, segments, events, filters, views, and more.",
    },
    {
      id: "ethical",
      title: "Ethical by Default",
      satsu:
        "There's no tracking of individuals, no data resale, and no hidden agendas. Just ethical analytics, built for devs like you.",
      ga: "You're feeding data back to one of the largest advertising machines in the world.",
    },
  ];

  return (
    <div className="space-y-8">
      {reasons.map((reason, index) => (
        <ComparisonCard
          key={reason.id}
          title={reason.title}
          satsu={reason.satsu}
          ga={reason.ga}
          index={index}
        />
      ))}
    </div>
  );
}

function ComparisonCard({ title, satsu, ga, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
        <div className="p-6 border-b border-zinc-800 bg-zinc-900/80">
          <h3 className="text-xl font-semibold text-white flex items-center">
            {index + 1}. {title}
          </h3>
        </div>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            <div className="p-6 bg-zinc-900/50">
              <div className="flex items-start gap-3 mb-3">
                <div className="h-5 w-5 mt-0.5 text-red-400">
                  <X className="h-5 w-5" />
                </div>
                <h4 className="font-medium text-red-400">Google Analytics</h4>
              </div>
              <p className="text-zinc-400 ml-8">{ga}</p>
            </div>

            <div className="p-6 bg-violet-900/10">
              <div className="flex items-start gap-3 mb-3">
                <div className="h-5 w-5 mt-0.5 text-violet-400">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="font-medium text-violet-400">Satsu</h4>
              </div>
              <p className="text-zinc-300 ml-8">{satsu}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function AtAGlance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    "No cookies or banners required",
    "GDPR and CCPA compliant",
    "~3 KB script",
    "Real-time dashboard",
    "Zero personal data collected",
    "Hosted, simple, and fast",
    "Free during development",
    "Always affordable afterward",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
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
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="text-center"
    >
      <h3 className="text-2xl font-bold text-white mb-10">At a Glance</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex flex-col items-center hover:border-violet-800/50 transition-colors duration-300"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-10 w-10 bg-violet-600/20 rounded-full flex items-center justify-center mb-3">
              <Check className="h-5 w-5 text-violet-400" />
            </div>
            <p className="text-zinc-300 text-sm">{feature}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
