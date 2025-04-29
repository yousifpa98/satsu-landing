import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  AtSign, 
  MessageCircle, 
  ArrowRight,
  Copy,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

import { useHead } from '../../lib/useHead';
import Head from './+Head.jsx';
import { extractHeadData } from '../../lib/parseHead';

export default function ContactPage() {
  useHead(extractHeadData(Head));
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* CSS Grid pattern */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col items-center text-center">
            {/* Contact badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="outline" className="px-4 py-1.5 bg-violet-400/10 text-violet-400 border-violet-400/20">
                Contact
              </Badge>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let's Keep It Simple.
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-zinc-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              No forms. No ticket systems. Just reach out like it's 2007.
            </motion.p>
            
            {/* Intro paragraph */}
            <motion.p
              className="text-lg text-zinc-400 mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We're not a corporation. We're devs – just like you. If you've got questions, ideas, feedback, or just want to say hey, here's how you can reach us:
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 max-w-2xl mx-auto">
            <EmailCard />
            <ThreadsCard />
            <FeedbackCard />
          </div>
        </div>
      </section>
      
      {/* Closing Message */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <ClosingMessage />
        </div>
      </section>
    </div>
  );
}

function EmailCard() {
  const [copied, setCopied] = useState(false);
  const email = "hello@satsu.pro";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 overflow-hidden relative"
    >
      <div className="flex items-start gap-5">
        <div className="h-12 w-12 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 flex-shrink-0">
          <Mail className="h-6 w-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
          <p className="text-zinc-400 mb-4">
            Shoot us a message. We read everything, and usually reply within 1–2 days. Bug reports, feature ideas, questions, rants – all welcome.
          </p>
          
          <div className="flex items-center gap-3 flex-wrap">
            <a 
              href={`mailto:${email}`}
              className="bg-zinc-800 hover:bg-zinc-750 transition-colors text-zinc-100 px-4 py-2 rounded-lg inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              <span>{email}</span>
            </a>
            
            <button
              onClick={copyToClipboard}
              className="bg-zinc-800 hover:bg-zinc-750 transition-colors text-zinc-100 px-3 py-2 rounded-lg inline-flex items-center gap-2"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ThreadsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 overflow-hidden relative"
    >
      <div className="flex items-start gap-5">
        <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
          <AtSign className="h-6 w-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">Threads</h3>
          <p className="text-zinc-400 mb-4">
            We post updates, dev notes, and random thoughts.
          </p>
          
          <a 
            href="https://www.threads.com/@satsuapp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 transition-colors text-white px-4 py-2 rounded-lg inline-flex items-center gap-1"
          >
            <AtSign className="h-4 w-4" />
            <span>satsuapp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function FeedbackCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 overflow-hidden relative"
    >
      <div className="flex items-start gap-5">
        <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
          <MessageCircle className="h-6 w-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">Feedback Page</h3>
          <p className="text-zinc-400 mb-4">
            If you'd rather leave anonymous feedback or request a feature:
          </p>
          
          <a 
            href="/feedback"
            className="bg-zinc-800 hover:bg-zinc-750 transition-colors text-zinc-100 px-4 py-2 rounded-lg inline-flex items-center gap-2"
          >
            Go to Feedback Page
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ClosingMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-violet-950/30 to-indigo-950/30 rounded-2xl p-8 md:p-10 border border-violet-800/20 relative overflow-hidden text-center"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 mix-blend-screen" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold text-white mb-4">We're building Satsu to be as human as possible.</h3>
        <p className="text-zinc-300">
          No auto-replies. No chatbots. Just us. Reach out anytime.
        </p>
      </div>
    </motion.div>
  );
}