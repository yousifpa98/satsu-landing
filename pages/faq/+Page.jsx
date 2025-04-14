import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, MessageSquare } from "lucide-react";

import { useHead } from "../../lib/useHead";
import Head from "./+Head.jsx";
import { extractHeadData } from "../../lib/parseHead";

export default function FAQPage() {
  useHead(extractHeadData(Head));
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* CSS Grid pattern */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />

        <div className="container max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col items-center text-center">
            {/* FAQ badge */}
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
                Support
              </Badge>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Frequently Asked Questions
            </motion.h1>

            {/* Intro paragraph */}
            <motion.p
              className="text-lg text-zinc-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Got questions about Satsu? Here are some quick answers. If
              something's missing,
              <a
                href="/feedback"
                className="text-violet-400 hover:text-violet-300 inline-flex items-center gap-1 mx-1"
              >
                send us feedback <ChevronRight className="w-3 h-3" />
              </a>
              – we'll add it.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6">
          <FAQAccordion />
        </div>
      </section>

      {/* Still have questions? */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6">
          <MoreQuestionsCard />
        </div>
      </section>
    </div>
  );
}

function FAQAccordion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const faqs = [
    {
      question: "Is Satsu GDPR compliant?",
      answer:
        "Yes. Satsu doesn’t use cookies, doesn’t fingerprint users, and doesn’t share any data with third parties. IP addresses are processed only to determine visitor location and are not linked to user profiles. In most cases, you don’t need a cookie banner, and your visitors remain anonymous in practice.",
    },
    {
      question: "Do I need a cookie consent banner?",
      answer:
        "No. Satsu is 100% cookieless and does not collect any personally identifiable information (PII). That means no consent banners are required in the EU or anywhere else.",
    },
    {
      question: "What data does Satsu track?",
      answer:
        "We collect pageviews, referrer URLs, screen sizes, user agents, session identifiers, and IP-based location (country, region, city). Sessions help us measure visit duration and engagement – but we never link data to real identities or track users across sites.",
    },
    {
      question: "Is it really free?",
      answer:
        "Yes – Satsu is free during development. Once we launch, the core features will stay free forever. Advanced features may become part of a paid plan, but pricing will always be dev-friendly.",
    },
    {
      question: "How do I install it?",
      answer:
        "Sign up, add your site, and copy the provided script tag into your <head>. Once deployed, your dashboard will show real-time traffic immediately – no extra setup required.",
    },
    {
      question: "Can I use Satsu on multiple sites?",
      answer:
        "Yes. You can track as many projects as you want – especially while we're in open beta.",
    },
    {
      question: "Is Satsu open source?",
      answer:
        "No. We're fully hosted and focused on delivering the best experience without needing you to self-host or maintain anything.",
    },
    {
      question: "Can I give feedback or request a feature?",
      answer: (
        <>
          Absolutely. Head over to
          <a
            href="/feedback"
            className="text-violet-400 hover:text-violet-300 mx-1"
          >
            our feedback page
          </a>
          and let us know what you'd like to see.
        </>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 shadow-lg"
    >
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={itemVariants}>
            <AccordionItem
              value={`item-${index}`}
              className="border-zinc-800 last:border-0"
            >
              <AccordionTrigger className="text-lg font-medium text-zinc-100 hover:text-violet-400 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-300 text-base pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}

function MoreQuestionsCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-violet-950/30 to-indigo-950/30 rounded-2xl p-8 border border-violet-800/20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 mix-blend-screen" />

      <div className="relative z-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Still have questions?
        </h3>

        <p className="text-zinc-300 mb-6 max-w-lg mx-auto">
          We're building Satsu with your feedback in mind. If you have questions
          that aren't answered here, or suggestions for how we can improve, let
          us know.
        </p>

        <Button
          size="lg"
          className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 rounded-lg flex items-center gap-2 mx-auto"
        >
          <MessageSquare className="h-4 w-4" />
          <a href="/feedback">Send Feedback</a>
        </Button>
      </div>
    </motion.div>
  );
}
