import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Check, X, AlertCircle, ArrowRight } from "lucide-react";

// Import comparison table data
import { features } from "./comparisonData";

export default function ComparePage() {
  // Features to show in the compact table
  const keyFeatures = features.slice(0, 6);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* CSS Grid pattern */}
        <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col items-center text-center">
            {/* Feature badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="outline" className="px-4 py-1.5 bg-violet-400/10 text-violet-400 border-violet-400/20">
                Analytics Comparison
              </Badge>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Satsu vs <span className="bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">Google Analytics, Plausible, Fathom & Matomo</span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              className="text-xl text-zinc-300 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              There are plenty of analytics tools out there. Some are bloated, some invasive, and some just too complex. Here's how Satsu stacks up – no fluff, just facts.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Key Comparison Table */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <CompactComparisonTable features={keyFeatures} />
        </div>
      </section>
      
      {/* Detailed Tabs Comparison */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <TabComparison />
        </div>
      </section>
      
      {/* Conclusion */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <Conclusion />
        </div>
      </section>
    </div>
  );
}

function CompactComparisonTable({ features }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // List of services
  const services = ["Satsu", "Google Analytics", "Plausible", "Fathom", "Matomo"];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };
  
  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Render check, x, or other icons based on value
  const renderValue = (value, serviceName) => {
    // Special styling for Satsu to make it stand out
    const isSatsu = serviceName === "Satsu";
    
    if (value === true || value === "Yes") {
      return <Check className={`h-5 w-5 ${isSatsu ? "text-violet-400" : "text-emerald-400"}`} />;
    } else if (value === false || value === "No") {
      return <X className={`h-5 w-5 ${isSatsu ? "text-zinc-500" : "text-red-400"}`} />;
    } else if (value === "Partial" || value === "Configurable") {
      return <AlertCircle className={`h-5 w-5 ${isSatsu ? "text-violet-400/70" : "text-amber-400"}`} />;
    } else {
      // For text values
      return <span className={isSatsu ? "text-violet-400 font-medium" : ""}>{value}</span>;
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50 shadow-lg"
    >
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-zinc-800">
            <TableHead className="w-[180px] font-medium text-zinc-100">Feature</TableHead>
            {services.map((service) => (
              <TableHead 
                key={service} 
                className={`text-center ${service === "Satsu" ? "text-violet-400 font-semibold" : "text-zinc-300"}`}
              >
                {service}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, idx) => (
            <motion.tr 
              key={feature.id} 
              variants={rowVariants}
              className="border-zinc-800/50 hover:bg-zinc-900/30"
            >
              <TableCell className="font-medium text-zinc-200">
                {feature.name}
              </TableCell>
              {services.map((service) => (
                <TableCell 
                  key={`${feature.id}-${service}`} 
                  className={`text-center ${service === "Satsu" ? "bg-zinc-900/50" : ""}`}
                >
                  {renderValue(feature.values[service.toLowerCase().replace(' ', '_')], service)}
                </TableCell>
              ))}
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}

function TabComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Categories to show as tabs
  const categories = [
    { id: "privacy", label: "Privacy & Compliance" },
    { id: "performance", label: "Performance" },
    { id: "setup", label: "Setup & Usage" },
    { id: "business", label: "Business Model" }
  ];
  
  // Map features to categories
  const featuresByCategory = {
    privacy: [
      {
        title: "Privacy by Default",
        satsu: "Fully privacy-first. No cookies, no personal data collection. GDPR and CCPA compliant out of the box.",
        others: "Google Analytics requires consent banners and tracks extensive user data. Plausible and Fathom are also privacy-friendly, while Matomo requires manual configuration for privacy."
      },
      {
        title: "Consent & Cookie Banners",
        satsu: "Never needed – Satsu doesn't use cookies or track personal data.",
        others: "Required for Google Analytics. Not needed for Plausible and Fathom. Matomo may require them depending on configuration."
      }
    ],
    performance: [
      {
        title: "Script Size & Load Time",
        satsu: "Extremely lightweight at under 3KB – minimal impact on your site speed.",
        others: "Google Analytics is heavy (40-100KB+). Plausible (~1KB) and Fathom (~1.5KB) are also lightweight. Matomo is significantly heavier, especially self-hosted."
      },
      {
        title: "Real-Time Dashboard",
        satsu: "Instant updates as traffic comes in – no sampling, no delays.",
        others: "Google Analytics often delays data and samples reports. Plausible and Fathom offer real-time stats. Matomo's real-time performance depends on hosting configuration."
      }
    ],
    setup: [
      {
        title: "Installation Process",
        satsu: "One script tag – that's it. Copy, paste, and you're tracking.",
        others: "Google Analytics requires multiple steps and often Tag Manager. Plausible and Fathom use simple scripts. Matomo requires extensive configuration and usually self-hosting."
      },
      {
        title: "Hosting & Maintenance",
        satsu: "Fully hosted – no server setup, no maintenance headaches.",
        others: "Google Analytics is hosted by Google. Plausible and Fathom offer hosted and self-hosted options. Matomo typically requires self-hosting unless you pay for their cloud service."
      }
    ],
    business: [
      {
        title: "Pricing Model",
        satsu: "Currently free during development. Will remain affordable for developers and indie projects. Core features will always be free.",
        others: "Google Analytics is free but monetizes your data. Plausible and Fathom are paid only, with pricing that scales by pageviews. Matomo is free if self-hosted, but cloud version is enterprise-priced."
      },
      {
        title: "Target Audience",
        satsu: "Built for developers, indie hackers, and privacy-focused creators who want simple, honest analytics.",
        others: "Google Analytics targets marketers and enterprise teams. Plausible and Fathom focus on ethical site owners and bloggers. Matomo serves large organizations with complex compliance needs."
      }
    ]
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">Detailed Comparison</h2>
        
        <Tabs defaultValue="privacy" className="w-full">
          <div className="flex justify-center w-full mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-violet-600 data-[state=active]:text-white data-[state=active]:shadow-none"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              {featuresByCategory[category.id].map((feature, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ComparisonItem
                      title="Satsu"
                      description={feature.satsu}
                      highlighted
                    />
                    <ComparisonItem
                      title="Other Tools"
                      description={feature.others}
                    />
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.div>
  );
}

function ComparisonItem({ title, description, highlighted = false }) {
  return (
    <div className={`flex gap-4 p-4 rounded-lg ${highlighted ? 'bg-violet-950/20 border border-violet-800/30' : 'bg-zinc-800/20'}`}>
      <div className={`font-medium text-base ${highlighted ? 'text-violet-400' : 'text-zinc-300'}`}>
        {title}
      </div>
      <div className="text-zinc-300 flex-1">
        {description}
      </div>
    </div>
  );
}

function Conclusion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-violet-950/30 to-indigo-950/30 rounded-2xl p-8 md:p-10 border border-violet-800/20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 mix-blend-screen" />
      
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">The simple choice for developers</h3>
        
        <div className="space-y-4 text-zinc-300 mb-8">
          <p>
            Satsu keeps things simple. It's fast, clean, and built for developers who want actionable insights without violating user trust.
          </p>
          <p>
            Where others go for feature lists and complexity, Satsu focuses on clarity, privacy, and a no-nonsense developer experience.
          </p>
          <p>
            If you're tired of GA's bloat, Matomo's complexity, or paying monthly just to track a few pages – Satsu might be exactly what you've been looking for.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 rounded-lg flex items-center gap-2"
          >
            Try Satsu Today
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-zinc-200 border-zinc-700 hover:bg-zinc-800 flex items-center gap-2"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}