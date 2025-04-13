import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Mail, Globe, Info, ExternalLink as ExternalLinkIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useHead } from '../../lib/useHead';;
import Head from './+Head.jsx';
import { extractHeadData } from '../../lib/parseHead';

export default function ImprintPage() {
  useHead(extractHeadData(Head));
  const [language, setLanguage] = useState("en"); // Default to English
  const [showIndicator, setShowIndicator] = useState(false);
  
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
    setShowIndicator(true);
    
    // Hide the indicator after 2 seconds
    setTimeout(() => {
      setShowIndicator(false);
    }, 2000);
  };

  // Check URL for language param on initial load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam === 'de' || langParam === 'en') {
      setLanguage(langParam);
    }
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* CSS Grid pattern with subtle animation */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent -z-10" />
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col items-center text-center">
            {/* Imprint badge */}
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
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={language}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block"
                  >
                    {language === "en" ? "Imprint" : "Impressum"}
                  </motion.span>
                </AnimatePresence>
                
                {/* Decorative underline */}
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-violet-500/50 rounded-full"></span>
              </span>
            </motion.h1>

            {/* Language toggle with animation indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 relative"
            >
              <Button 
                variant="outline" 
                size="sm"
                className="bg-zinc-900/80 border border-zinc-700 hover:border-violet-500/50 text-zinc-300 hover:text-white flex items-center gap-2 px-4 py-2 transition-all duration-300 shadow-lg shadow-violet-900/20"
                onClick={toggleLanguage}
              >
                <Globe className="h-4 w-4 text-violet-400" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={language}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {language === "en" ? "Auf Deutsch anzeigen" : "View in English"}
                  </motion.span>
                </AnimatePresence>
              </Button>
              
              {/* Success indicator */}
              <AnimatePresence>
                {showIndicator && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 flex items-center justify-center gap-1 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs"
                  >
                    <Check className="h-3 w-3" />
                    <span>{language === "en" ? "English selected" : "Deutsch ausgewählt"}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-zinc-900/50 flex-grow">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-900/80 border border-zinc-800 rounded-xl p-8 mb-10 shadow-xl shadow-violet-950/10"
            >
              {language === "en" ? (
                <EnglishContent />
              ) : (
                <GermanContent />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-t from-zinc-950 to-transparent">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <Info className="h-5 w-5 text-violet-400 mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-semibold text-white mb-4">
              {language === "en" ? "Contact" : "Kontakt"}
            </h3>
            <p className="text-zinc-300 mb-4">
              {language === "en" 
                ? "If you have questions, reach out any time:" 
                : "Bei Fragen kontaktieren Sie uns jederzeit:"}
            </p>
            <a 
              href="mailto:hello@satsu.app" 
              className="inline-flex items-center justify-center gap-2 bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 hover:text-violet-300 px-5 py-2 rounded-full transition-all duration-300 border border-violet-500/20 hover:border-violet-500/40 shadow-lg shadow-violet-900/10"
            >
              <Mail className="h-4 w-4" />
              hello@satsu.app
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContentSection({ icon, title, children, isFirst = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: isFirst ? 0.1 : 0.3 }}
      className="border-b border-zinc-800 last:border-0 pb-6 last:pb-0 pt-6 first:pt-0"
    >
      <div className="flex items-start gap-4">
        <div className="h-8 w-8 rounded-lg bg-violet-500/10 flex-shrink-0 flex items-center justify-center text-violet-400 mt-1">
          {icon}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">{title}</h2>
          <div className="text-zinc-300 leading-relaxed">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}

function LinkWithIcon({ href, children }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center gap-1 text-violet-400 hover:text-violet-300 transition-colors border-b border-violet-500/30 hover:border-violet-500/50 pb-0.5"
    >
      {children}
      <ExternalLinkIcon className="h-3 w-3 opacity-70" />
    </a>
  );
}

function EnglishContent() {
  return (
    <div className="space-y-6">
      <ContentSection 
        icon={<Info className="h-5 w-5" />}
        title="This service is operated by:"
        isFirst
      >
        <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
          <p className="whitespace-pre-line">
            <strong className="text-white font-medium">Yousif Paulus</strong>{"\n"}
            Graf-Adolf-Str. 2{"\n"}
            51065 Cologne{"\n"}
            Germany
          </p>
        </div>
      </ContentSection>
      
      <ContentSection
        icon={<Mail className="h-5 w-5" />}
        title="Contact:"
      >
        <p>
          Email: <a href="mailto:hello@satsu.app" className="text-violet-400 hover:text-violet-300 border-b border-violet-500/30 hover:border-violet-500/50 pb-0.5">hello@satsu.app</a>
        </p>
      </ContentSection>
      
      <ContentSection
        icon={<Check className="h-5 w-5" />}
        title="Responsible for content in accordance with § 55 Abs. 2 RStV (German Interstate Broadcasting Agreement):"
      >
        <p>Yousif Paulus</p>
      </ContentSection>
      
      <ContentSection
        icon={<Info className="h-5 w-5" />}
        title="Disclaimer:"
      >
        <p className="italic">
          Despite careful control of the content, we assume no liability for the content of external links. The content of linked websites is the sole responsibility of their respective operators.
        </p>
      </ContentSection>
      
      <ContentSection
        icon={<Globe className="h-5 w-5" />}
        title="Online Dispute Resolution Platform (EU Commission):"
      >
        <p className="mb-4">
          <LinkWithIcon href="https://ec.europa.eu/consumers/odr/">
            https://ec.europa.eu/consumers/odr/
          </LinkWithIcon>
        </p>
        <p className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50 text-sm">
          We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
        </p>
      </ContentSection>
    </div>
  );
}

function GermanContent() {
  return (
    <div className="space-y-6">
      <ContentSection 
        icon={<Info className="h-5 w-5" />}
        title="Angaben gemäß § 5 TMG:"
        isFirst
      >
        <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
          <p className="whitespace-pre-line">
            <strong className="text-white font-medium">Yousif Paulus</strong>{"\n"}
            Graf-Adolf-Str. 2{"\n"}
            51065 Köln{"\n"}
            Deutschland
          </p>
        </div>
      </ContentSection>
      
      <ContentSection
        icon={<Mail className="h-5 w-5" />}
        title="Kontakt:"
      >
        <p>
          E-Mail: <a href="mailto:hello@satsu.app" className="text-violet-400 hover:text-violet-300 border-b border-violet-500/30 hover:border-violet-500/50 pb-0.5">hello@satsu.app</a>
        </p>
      </ContentSection>
      
      <ContentSection
        icon={<Check className="h-5 w-5" />}
        title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:"
      >
        <p>Yousif Paulus (Anschrift wie oben)</p>
      </ContentSection>
      
      <ContentSection
        icon={<Info className="h-5 w-5" />}
        title="Haftungsausschluss:"
      >
        <p className="italic">
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </ContentSection>
      
      <ContentSection
        icon={<Globe className="h-5 w-5" />}
        title="Plattform der EU-Kommission zur Online-Streitbeilegung:"
      >
        <p className="mb-4">
          <LinkWithIcon href="https://ec.europa.eu/consumers/odr/">
            https://ec.europa.eu/consumers/odr/
          </LinkWithIcon>
        </p>
        <p className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50 text-sm">
          Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </ContentSection>
    </div>
  );
}