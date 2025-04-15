import { usePageContext } from "vike-react/usePageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft, Home, RefreshCw } from "lucide-react";
import { Link } from "../../components/Link.jsx";

export default function ErrorPage() {
  const { is404, urlPathname } = usePageContext();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  // Define error content based on is404
  const title = is404 ? "404 - Page Not Found" : "500 - Server Error";
  const description = is404 
    ? "We couldn't find the page you're looking for. It might have been moved or doesn't exist."
    : "Something went wrong on our server while processing your request. We're working on fixing it.";
  const icon = <AlertTriangle className="h-16 w-16 text-amber-400" />;
  
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 [background-size:30px_30px] [background-image:linear-gradient(to_right,#8b5cf6/5%_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6/5%_1px,transparent_1px)] bg-center [mask-image:radial-gradient(circle_at_center,black_30%,transparent_80%)] -z-10 opacity-70" />
      
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 mix-blend-screen" />
      
      <motion.div
        className="container max-w-md mx-auto px-6 py-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex justify-center mb-6"
          variants={itemVariants}
        >
          {icon}
        </motion.div>
        
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-zinc-300 mb-10"
          variants={itemVariants}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Button
            variant="outline"
            className="border-zinc-700 hover:bg-zinc-800 text-zinc-200 flex items-center gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          
          <Link href="/">
            <Button
              className="bg-violet-600 hover:bg-violet-700 text-white flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          {!is404 && (
            <Button
              variant="outline"
              className="border-zinc-700 hover:bg-zinc-800 text-zinc-200 flex items-center gap-2"
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          )}
        </motion.div>
        
        {/* Error details (for debugging, can be removed in production) */}
        <motion.div 
          className="mt-12 text-xs text-zinc-500 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800"
          variants={itemVariants}
        >
          <p>Error occurred at: <code>{urlPathname}</code></p>
          <p className="mt-1">Type: <code>{is404 ? "404 Not Found" : "500 Server Error"}</code></p>
        </motion.div>
      </motion.div>
    </div>
  );
}