import "./style.css";
import "./tailwind.css";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ExternalLink, LogIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "../components/Link.jsx";

export default function LayoutDefault({ children }) {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
      <Header scrolled={scrolled} />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}

function Header({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className={`sticky top-0 z-50 backdrop-blur-lg ${
        scrolled
          ? "bg-zinc-900/80 border-b border-zinc-800/50 py-3"
          : "bg-transparent py-5"
      } px-6 flex items-center justify-between relative transition-all duration-300`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.a
        href="/"
        className="flex items-center gap-3 group z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative">
          <motion.div
            className="h-10 w-auto flex items-center justify-center"
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <span className="text-2xl font-bold text-violet-400">サツ</span>
          </motion.div>
          <motion.div
            className="absolute -inset-1 rounded-lg bg-violet-500/20 -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          />
        </div>
        <motion.span
          className="font-bold text-lg tracking-tight"
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          satsu
        </motion.span>
      </motion.a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-1 text-sm font-medium">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/why-satsu">Why Satsu</NavLink>
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>{" "}
        <NavLink href="/compare">Compare</NavLink>
        <NavLink href="/roadmap">Roadmap</NavLink>
        <NavLink href="/faq">FAQ</NavLink>
        <NavLink href="/feedback">Feedback</NavLink>
        <NavLink href="https://demo.satsu.pro">Demo</NavLink>
      </nav>

      {/* CTA and Login Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <motion.a
          href="https://app.satsu.pro"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-600 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center gap-1.5"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <LogIn className="w-4 h-4" />
          <span>Log in</span>
        </motion.a>

        <motion.a
          href="/signup"
          className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium text-sm transition-colors duration-200 flex items-center gap-1.5"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>Get Started Free</span>
          <ChevronRight className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Mobile Toggle */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="md:hidden z-10 text-zinc-300 hover:text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-lg border-b border-zinc-800/50 flex flex-col items-center gap-6 py-8 md:hidden z-0 overflow-hidden"
          >
            <MobileNavLink href="/" onClick={() => setOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/why-satsu" onClick={() => setOpen(false)}>
              Why Satsu
            </MobileNavLink>
            <MobileNavLink href="/features" onClick={() => setOpen(false)}>
              Features
            </MobileNavLink>
            <MobileNavLink href="/pricing" onClick={() => setOpen(false)}>
              Pricing
            </MobileNavLink>
            <MobileNavLink href="/compare" onClick={() => setOpen(false)}>
              Compare
            </MobileNavLink>
            <MobileNavLink href="/roadmap" onClick={() => setOpen(false)}>
              Roadmap
            </MobileNavLink>
            <MobileNavLink href="/faq" onClick={() => setOpen(false)}>
              FAQ
            </MobileNavLink>
            <MobileNavLink href="/feedback" onClick={() => setOpen(false)}>
              Feedback
            </MobileNavLink>
            <MobileNavLink
              href="https://demo.satsu.pro"
              onClick={() => setOpen(false)}
            >
              Demo
            </MobileNavLink>

            <motion.div
              className="mt-4 pt-6 border-t border-zinc-800 w-full px-8 flex flex-col gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="https://app.satsu.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-zinc-700 hover:border-zinc-600 text-zinc-300 hover:text-white rounded-lg font-medium text-sm transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                <LogIn className="w-4 h-4" />
                <span>Log in</span>
              </a>

              <a
                href="/signup"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium text-sm transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                <span>Get Started</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ href, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative px-3 py-2 rounded-md text-zinc-300 hover:text-white transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      <motion.div
        className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 rounded-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Added more obvious hover effect */}
      <motion.div
        className="absolute inset-0 bg-violet-500/10 rounded-md -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <Link
        href={href}
        onClick={onClick}
        className="relative text-xl font-medium text-zinc-300 hover:text-white transition-colors duration-300 px-6 py-2 block"
      >
        {children}
      </Link>

      {/* Added more obvious hover effect */}
      <motion.div
        className="absolute inset-0 bg-violet-500/10 rounded-md -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/30 px-6 py-10 text-sm text-zinc-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-violet-400">サツ</span>
              <span className="font-bold text-lg text-white">satsu</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Privacy-first analytics for developers. Clean, fast, and
              GDPR-compliant. No cookies, no consent banners, no bloat.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.threads.com/@satsuapp"
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 9a3 3 0 1 1 6 0v1.5a1.5 1.5 0 0 0 3 0V9" />
                  <path d="M9 9v4.5a3 3 0 0 0 6 0v-1" />
                </svg>
              </a>
              <a
                href="https://github.com"
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/why-satsu" className="hover:text-white transition">
                  Why Satsu
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-white transition">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-white transition">
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="https://demo.satsu.pro"
                  className="hover:text-white transition"
                >
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Compare</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/compare/google-analytics"
                  className="hover:text-white transition"
                >
                  vs Google Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/plausible"
                  className="hover:text-white transition"
                >
                  vs Plausible
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/fathom"
                  className="hover:text-white transition"
                >
                  vs Fathom
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/matomo"
                  className="hover:text-white transition"
                >
                  vs Matomo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © {currentYear} Satsu. Privacy-first analytics for developers.
          </p>
          <div className="flex flex-wrap gap-6 text-center md:text-right">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
            <Link href="/imprint" className="hover:text-white transition">
              Imprint
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
            <Link
              href="https://demo.satsu.pro"
              className="hover:text-white transition"
            >
              Demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
