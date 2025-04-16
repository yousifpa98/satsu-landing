// compare/plausible/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Satsu vs Plausible – A Developer-First Analytics Alternative</title>
  
        <meta
          name="description"
          content="Compare Satsu and Plausible Analytics. Learn which privacy-first tool is simpler, faster, and better suited for solo developers and indie projects."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Satsu vs Plausible – Lightweight Analytics for Developers" />
        <meta
          property="og:description"
          content="Looking for an alternative to Plausible? See how Satsu compares on privacy, performance, simplicity, and price – built for devs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.pro/compare/plausible" />
        <meta property="og:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Satsu vs Plausible – Simple, Ethical Analytics" />
        <meta
          name="twitter:description"
          content="Compare Satsu and Plausible. Find out which analytics tool is more dev-focused, cookie-free, and built to stay fast and affordable."
        />
        <meta name="twitter:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.pro/compare/plausible" />
      </>
    );
  }
  