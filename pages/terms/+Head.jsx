// terms/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Terms of Service – Satsu Analytics</title>
  
        <meta
          name="description"
          content="Read the Terms of Service for Satsu, the privacy-first analytics platform built for developers. Learn about usage, restrictions, and legal responsibilities."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Satsu Terms of Service – Developer-Friendly Analytics" />
        <meta
          property="og:description"
          content="Our terms outline what you can expect when using Satsu, and what’s expected of you. Fair, transparent, and built for indie devs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.pro/terms" />
        <meta property="og:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Satsu – Terms of Use" />
        <meta
          name="twitter:description"
          content="Review the Terms of Service for Satsu. Clear guidelines for using our cookie-free, privacy-first analytics tool."
        />
        <meta name="twitter:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.pro/terms" />
      </>
    );
  }
  