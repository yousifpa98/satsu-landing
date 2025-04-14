import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  XCircle,
  Mail,
  Shield,
  Globe,
  Server,
  UserPlus,
  RefreshCw,
  Trash
} from "lucide-react";

import { useHead } from '../../lib/useHead';;
import Head from './+Head.jsx';
import { extractHeadData } from '../../lib/parseHead';

export default function PrivacyPage() {
  useHead(extractHeadData(Head));
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* CSS Grid pattern */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col items-center text-center">
            {/* Privacy badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="outline" className="px-4 py-1.5 bg-violet-400/10 text-violet-400 border-violet-400/20">
                Privacy
              </Badge>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Privacy Policy
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-violet-400 font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We track traffic – not people.
            </motion.p>
            
            {/* Intro paragraph */}
            <motion.p
              className="text-lg text-zinc-300 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Satsu is built to give you real insights without violating trust. We collect only what we need to help you understand your traffic – never to track, profile, or sell data. Here's what we do and don't do.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            <Section
              number="1"
              title="What we collect from your visitors"
              icon={<Globe className="h-6 w-6" />}
              content={
                <>
                  <p className="mb-6">When someone visits a page on a site using Satsu, we collect:</p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="text-violet-400">–</span>
                      <span>Page path</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-violet-400">–</span>
                      <span>Referrer URL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-violet-400">–</span>
                      <span>User agent string</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-violet-400">–</span>
                      <span>Screen width</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-violet-400">–</span>
                      <span>Timestamp of the visit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-violet-400">–</span>
                      <span>IP-based geolocation (country, region, city, approximate coordinates)</span>
                    </li>
                  </ul>
                  
                  <p className="mb-8">We use the IP address solely to determine location and discard it immediately after that process. We <strong className="text-white">do not store raw IP addresses</strong> or use them for fingerprinting, profiling, or identification.</p>
                  
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
                    <h4 className="text-white font-medium flex items-center gap-2 mb-4">
                      <XCircle className="h-5 w-5 text-red-400" />
                      <span>We do <strong>not</strong> collect:</span>
                    </h4>
                    
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">–</span>
                        <span>Cookies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">–</span>
                        <span>Session identifiers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">–</span>
                        <span>Personally identifiable information (PII)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">–</span>
                        <span>Click behavior</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">–</span>
                        <span>Names, emails, or user accounts of your visitors</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p>Everything is stored anonymously and aggregated. We cannot identify or follow individual users across sessions or websites.</p>
                </>
              }
            />
            
            <Section
              number="2"
              title="Is Satsu GDPR/CCPA compliant?"
              icon={<Shield className="h-6 w-6" />}
              content={
                <p>Yes. We do not store personal data, use cookies, or require user consent banners under current GDPR and CCPA guidelines. Your users remain anonymous and unprofiled.</p>
              }
            />
            
            <Section
              number="3"
              title="Do I need a cookie banner?"
              icon={<CheckCircle className="h-6 w-6" />}
              content={
                <p>No. Since Satsu doesn't use cookies or store personal identifiers, no consent banner is required.</p>
              }
            />
            
            <Section
              number="4"
              title="What we store about you (as a Satsu user)"
              icon={<UserPlus className="h-6 w-6" />}
              content={
                <>
                  <p className="mb-6">When you create a Satsu account, we store:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-violet-400">–</span>
                      <span>Your email</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-violet-400">–</span>
                      <span>Your full name</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-violet-400">–</span>
                      <span>Your hashed password (never stored in plain text)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-violet-400">–</span>
                      <span>Your signup source (e.g. referral, organic, etc.)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-violet-400">–</span>
                      <span>Account creation and activity timestamps</span>
                    </li>
                  </ul>
                  
                  <p>This data is used to operate your account, recover access if needed, and send important service updates (very rarely).</p>
                </>
              }
            />
            
            <Section
              number="5"
              title="Where is the data hosted?"
              icon={<Server className="h-6 w-6" />}
              content={
                <p>All data is processed and stored on secure servers located in the EU. We use modern encryption, backups, and strict access controls.</p>
              }
            />
            
            <Section
              number="6"
              title="Do we sell or share your data?"
              icon={<XCircle className="h-6 w-6" />}
              content={
                <p>No. Never. We don't share, sell, rent, or give away your data or your visitors' data to any third party – ever.</p>
              }
            />
            
            <Section
              number="7"
              title="How can I delete my data?"
              icon={<Trash className="h-6 w-6" />}
              content={
                <p>You can delete your account at any time via your dashboard or by emailing us at <a href="mailto:hello@satsu.pro" className="text-violet-400 hover:text-violet-300">hello@satsu.pro</a>. All associated data (including your sites and traffic data) will be permanently deleted from our systems.</p>
              }
            />
            
            <Section
              number="8"
              title="Contact"
              icon={<Mail className="h-6 w-6" />}
              content={
                <p>If you have any questions about how Satsu handles privacy, just email us directly: <a href="mailto:hello@satsu.pro" className="text-violet-400 hover:text-violet-300">hello@satsu.pro</a></p>
              }
            />
          </div>
        </div>
      </section>
      
      {/* Footer Information */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-12 gap-y-4 text-zinc-400 text-sm">
              <div className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                <span>Last Updated: April 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ number, title, icon, content }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="border-b border-zinc-800 pb-12 last:border-0"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="sm:w-48 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
              {icon}
            </div>
            <div className="text-xl font-semibold text-white sm:hidden">
              {number}. {title}
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-6 hidden sm:block">
            {number}. {title}
          </h3>
          
          <div className="text-zinc-300 leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </motion.div>
  );
}