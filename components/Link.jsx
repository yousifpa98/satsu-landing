import { usePageContext } from "vike-react/usePageContext";
import { motion } from "framer-motion";

export function Link({ href, children, className = "", onClick }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  
  // Improved active state detection
  const isActive = 
    href === "/" 
      ? urlPathname === "/" 
      : urlPathname.startsWith(href) && 
        (urlPathname === href || urlPathname.charAt(href.length) === '/');
  
  // Combine provided className with active state
  const linkClasses = `${className} ${isActive ? "is-active text-white" : ""}`.trim();

  return (
    <a 
      href={href} 
      className={linkClasses || undefined}
      onClick={onClick}
    >
      {children}
      
      {/* Add a subtle background on active state */}
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-violet-500/15 rounded-md -z-10"
          layoutId="activeNavHighlight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </a>
  );
}