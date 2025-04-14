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
  Clock,
  AlertTriangle,
  FileText,
  User,
  Lock,
  CreditCard,
  X
} from "lucide-react";

import { useHead } from '../../lib/useHead';;
import Head from './+Head.jsx';
import { extractHeadData } from '../../lib/parseHead';

export default function TermsPage() {
  useHead(extractHeadData(Head));
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* CSS Grid pattern */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col items-center text-center">
            {/* Terms badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="outline" className="px-4 py-1.5 bg-violet-400/10 text-violet-400 border-violet-400/20">
                Legal
              </Badge>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Terms of Service
            </motion.h1>
            
            {/* Date information */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-x-12 gap-y-4 text-zinc-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-violet-400" />
                <span>Effective Date: April 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-violet-400" />
                <span>Last Updated: April 2025</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            <Section
              number="1"
              title="Acceptance of Terms"
              icon={<FileText className="h-6 w-6" />}
              content={
                <p>By creating an account or using Satsu, you agree to these Terms of Service. If you do not agree, please do not use the service.</p>
              }
            />
            
            <Section
              number="2"
              title="Who We Are"
              icon={<User className="h-6 w-6" />}
              content={
                <p>Satsu is operated by an individual based in Germany. This is a personal project built for developers, indie creators, and small teams. There is no registered company behind it (yet).</p>
              }
            />
            
            <Section
              number="3"
              title="Use of the Service"
              icon={<Globe className="h-6 w-6" />}
              content={
                <>
                  <p className="mb-6">You may use Satsu to collect anonymous traffic data for websites you own or operate.</p>
                  
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-0">
                    <h4 className="text-white font-medium flex items-center gap-2 mb-4">
                      <XCircle className="h-5 w-5 text-red-400" />
                      <span>You agree <strong>not to use Satsu</strong>:</span>
                    </h4>
                    
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">–</span>
                        <span>On websites that promote or host illegal content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">–</span>
                        <span>For the purpose of reselling access or creating a competing product</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">–</span>
                        <span>For automated usage (e.g. scraping, spamming, bot-generated traffic)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">–</span>
                        <span>To circumvent privacy laws or inject tracking into third-party content</span>
                      </li>
                    </ul>
                  </div>
                </>
              }
            />
            
            <Section
              number="4"
              title="Your Data & Privacy"
              icon={<Lock className="h-6 w-6" />}
              content={
                <p>We store basic data such as pageviews, referrers, screen sizes, user agents, timestamps, and IP-based location data (city, country, etc.). Raw IPs are not stored. Account data (email, password, etc.) is handled securely and never shared or sold. For more, see our <a href="/privacy" className="text-violet-400 hover:text-violet-300">Privacy Policy</a>.</p>
              }
            />
            
            <Section
              number="5"
              title="Plans & Pricing"
              icon={<CreditCard className="h-6 w-6" />}
              content={
                <p>Satsu offers multiple pricing tiers: Free, Basic, and Pro. Prices are shown in euros or your local currency equivalent. All payments (once active) are monthly and may be cancelled anytime. We reserve the right to change pricing or feature access at any time, with notice.</p>
              }
            />
            
            <Section
              number="6"
              title="Uptime & Support"
              icon={<AlertTriangle className="h-6 w-6" />}
              content={
                <p>We strive to keep Satsu running smoothly – but there is <strong className="text-white">no guaranteed uptime, performance, or support</strong>. This is a small, independent service. You agree to use it <strong className="text-white">at your own risk</strong>. We are not responsible for data loss, outages, or service interruptions – even though we try our best to avoid them.</p>
              }
            />
            
            <Section
              number="7"
              title="Termination"
              icon={<X className="h-6 w-6" />}
              content={
                <>
                  <p className="mb-4">We reserve the right to suspend or delete accounts that violate these terms, abuse the service, or create legal risk.</p>
                  <p>You may delete your account at any time via your dashboard. All associated data will be removed.</p>
                </>
              }
            />
            
            <Section
              number="8"
              title="Changes to Terms"
              icon={<RefreshIcon className="h-6 w-6" />}
              content={
                <p>These terms may change in the future. We'll notify you via email or in the dashboard if anything major changes. Continued use after changes means you accept them.</p>
              }
            />
            
            <Section
              number="9"
              title="Governing Law"
              icon={<Shield className="h-6 w-6" />}
              content={
                <p>These terms are governed by German law. Any disputes will be handled under the jurisdiction of German courts.</p>
              }
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <p className="text-zinc-300 mb-2">
              If you have questions about these terms, reach out any time:
            </p>
            <a href="mailto:hello@satsu.pro" className="text-violet-400 hover:text-violet-300 flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              hello@satsu.pro
            </a>
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

// Custom refresh icon
function RefreshIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}