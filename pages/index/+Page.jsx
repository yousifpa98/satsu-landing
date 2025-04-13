import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Play,
  Activity,
  Shield,
  Zap,
  Code,
  Globe,
  BarChart,
} from "lucide-react";

// Import dashboard screenshot - replace with your actual image path
import dashboardImage from "../../assets/dashboard.svg";

export default function Page() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const { scrollY } = useScroll();
  const dashboardY = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent -z-10" />

        {/* CSS Grid pattern */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left column - Text content */}
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <span className="inline-flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-sm font-medium text-violet-400 ring-1 ring-inset ring-violet-400/20 mb-6">
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-violet-400" />
                    Google Analytics Alternative
                  </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Privacy-first Web Analytics
                  <span className="bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">
                    {" "}
                    for Developers.
                  </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  className="text-xl text-zinc-300 mt-4 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  A lightweight Google Analytics alternative – fast,
                  cookie-free, and 100% GDPR compliant.
                </motion.p>

                {/* Explainer paragraph */}
                <motion.p
                  className="text-zinc-400 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Most analytics tools are bloated, invasive, or hard to set up.
                  Google Analytics feels like overkill for small or
                  privacy-conscious projects. Matomo is complex. Others require
                  self-hosting or cost too much. Satsu is the fix – a clean,
                  developer-focused analytics tool that tracks what matters with
                  one tiny script. No cookies, no banners, no bloat.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 rounded-lg flex items-center gap-2"
                  >
                    Get Started Free
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                 {/*  <Button
                    size="lg"
                    variant="outline"
                    className="text-zinc-200 border-zinc-700 hover:bg-zinc-800 flex items-center gap-2"
                  >
                    <Play className="h-4 w-4" />
                    View Live Demo
                  </Button> */}
                </motion.div>
              </motion.div>
            </div>

            {/* Right column - Dashboard preview */}
            <motion.div
              className="flex-1 relative"
              ref={containerRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0.95,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Browser frame */}
                <div className="w-full rounded-xl shadow-2xl bg-zinc-800 border border-zinc-700 overflow-hidden">
                  {/* Browser controls */}
                  <div className="h-8 bg-zinc-900 flex items-center gap-1.5 px-4">
                    <div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
                    <div className="h-5 ml-4 rounded-full bg-zinc-800 w-2/3 border border-zinc-700"></div>
                  </div>
                  {/* Dashboard screenshot */}
                  <motion.div style={{ y: dashboardY }}>
                    <img
                      src={dashboardImage}
                      alt="Satsu Analytics Dashboard"
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </div>

                {/* Floating code snippet */}
                <motion.div
                  className="absolute -left-8 bottom-20 sm:bottom-32 max-w-xs"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 p-4 rounded-lg shadow-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs text-zinc-400">script.js</div>
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-zinc-600"></div>
                        <div className="h-2 w-2 rounded-full bg-zinc-600"></div>
                        <div className="h-2 w-2 rounded-full bg-zinc-600"></div>
                      </div>
                    </div>
                    <pre className="text-xs text-indigo-300 font-mono whitespace-pre-wrap">
                      <code>
                        {`<script src="https://cdn.satsu.dev/s.js"
  data-site="YOUR_ID"
  async></script>`}
                      </code>
                    </pre>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-zinc-900/50 py-16" id="features">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <FeatureCard
              icon={<Code className="h-5 w-5 text-violet-400" />}
              title="One-line install"
              description="Add a single script tag to your site, and you're ready to go. No complex setup or configuration needed."
            />
            <FeatureCard
              icon={<Shield className="h-5 w-5 text-violet-400" />}
              title="No cookies required"
              description="Track visitors without using cookies. No consent banners needed, no privacy headaches."
            />
            <FeatureCard
              icon={<Zap className="h-5 w-5 text-violet-400" />}
              title="Super lightweight"
              description="Our tracking script is under 3KB, ensuring minimal impact on your site's performance."
            />
            <FeatureCard
              icon={<Activity className="h-5 w-5 text-violet-400" />}
              title="Real-time dashboard"
              description="See visitor data as it happens with a clean, intuitive dashboard showing the metrics that matter."
            />
            <FeatureCard
              icon={<Globe className="h-5 w-5 text-violet-400" />}
              title="Works everywhere"
              description="Compatible with any website, framework, or static site generator. No special integration needed."
            />
            <FeatureCard
              icon={<BarChart className="h-5 w-5 text-violet-400" />}
              title="Essential metrics only"
              description="Focus on what matters: page views, referrers, and countries. No overwhelming data or complex reports."
            />
          </motion.div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            className="bg-gradient-to-r from-violet-950/50 to-indigo-950/50 rounded-2xl p-8 md:p-12 border border-violet-900/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to take control of your analytics?
                </h3>
                <p className="text-zinc-300 mb-6 md:mb-0 max-w-xl">
                  Set up in under 2 minutes – no credit card required. Start
                  tracking visitors with a privacy-first approach.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 rounded-lg flex items-center gap-2"
                >
                  Get Started Free
                  <ChevronRight className="h-4 w-4" />
                </Button>
               {/*  <Button
                  size="lg"
                  variant="outline"
                  className="text-zinc-200 border-zinc-700 hover:bg-zinc-800 flex items-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  View Live Demo
                </Button> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-violet-800/40 transition-colors duration-300"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-10 w-10 bg-violet-500/10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm">{description}</p>
    </motion.div>
  );
}
