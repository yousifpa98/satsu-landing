import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  MessageSquare,
  Code,
  Zap,
  User,
  Clock,
} from "lucide-react";

export default function WhySatsuPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* CSS Grid pattern */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />

        <div className="container max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
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
                Our Story
              </Badge>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Why We Built Satsu
            </motion.h1>

            {/* Intro paragraph */}
            <motion.p
              className="text-xl text-zinc-300 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We love building small, fast things. But when it came to web
              analytics, nothing felt right. Google Analytics was too heavy.
              Matomo was too complex. Plausible and Fathom were solid – but
              still not built for how we work.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6">
          <TheProblemCard />
        </div>
      </section>

      {/* So We Built Satsu */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6">
          <BuiltSatsuSection />
        </div>
      </section>

      {/* For You If */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6">
          <ForYouIfSection />
        </div>
      </section>

      {/* Where We're Going & CTA */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6">
          <FutureAndCTA />
        </div>
      </section>
    </div>
  );
}

function TheProblemCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-6">The problem</h2>

      <p className="text-zinc-300 mb-6 leading-relaxed">
        We wanted real-time insights without tracking people. Something fast,
        respectful, and easy to drop into any project – even tiny ones. But most
        analytics tools either:
      </p>

      <ul className="space-y-3 mb-6">
        <motion.li
          className="flex items-start gap-3 text-zinc-300"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
            <span className="text-red-400">–</span>
          </div>
          <p>invaded privacy</p>
        </motion.li>

        <motion.li
          className="flex items-start gap-3 text-zinc-300"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
            <span className="text-red-400">–</span>
          </div>
          <p>slowed down our sites</p>
        </motion.li>

        <motion.li
          className="flex items-start gap-3 text-zinc-300"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div className="h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
            <span className="text-red-400">–</span>
          </div>
          <p>or made us pay monthly just to track a landing page</p>
        </motion.li>
      </ul>
    </motion.div>
  );
}

function BuiltSatsuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-white mb-6">
            So we built Satsu.
          </h2>

          <p className="text-zinc-300 leading-relaxed mb-6">
            It's not trying to do everything. It's just focused. One tiny
            script. One clear dashboard. No cookies. No setup.
          </p>

          <p className="text-zinc-300 leading-relaxed">
            We believe developers deserve better tools – ones that get out of
            the way, don't mess with performance, and don't force trade-offs
            between insight and ethics.
          </p>
        </div>

        <div className="md:w-1/3 flex-shrink-0">
          <div className="h-32 w-32 mx-auto md:mr-0 p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
            <span className="text-5xl font-bold text-violet-400">サツ</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ForYouIfSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const items = [
    {
      title: "You're a solo dev or indie hacker",
      icon: <User className="w-5 h-5 text-violet-400" />,
    },
    {
      title: "You care about privacy and speed",
      icon: <Zap className="w-5 h-5 text-violet-400" />,
    },
    {
      title: "You don't want to read docs just to see your traffic",
      icon: <Code className="w-5 h-5 text-violet-400" />,
    },
    {
      title: "You build fast and expect tools that do the same",
      icon: <Clock className="w-5 h-5 text-violet-400" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h2 className="text-2xl font-bold text-white mb-8 text-center">
        Satsu is for you if…
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 hover:border-violet-800/30 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <p className="text-zinc-300 mt-1">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FutureAndCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      className="space-y-16"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">
          Where we're going
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          We're still early. But we're committed to keeping the core
          forever-free, staying developer-focused, and never selling out user
          data. We don't want to be "the next GA." We want to be a better kind
          of simple.
        </p>
      </div>

      <div className="bg-gradient-to-r from-violet-950/30 to-indigo-950/30 rounded-2xl p-8 md:p-10 border border-violet-800/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 mix-blend-screen" />

        <div className="relative z-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Let's build it together.
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 rounded-lg flex items-center gap-2"
            >
              Get Started Free
              <ChevronRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-zinc-200 border-zinc-700 hover:bg-zinc-800 flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Send Feedback
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
