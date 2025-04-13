// index/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Satsu – Privacy-First Web Analytics for Developers</title>
  
        <meta
          name="description"
          content="Satsu is a fast, lightweight, and privacy-compliant analytics platform built for developers. No cookies, no bloat, just real-time insights."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Satsu – Privacy-First Web Analytics for Developers" />
        <meta
          property="og:description"
          content="Satsu is the Google Analytics alternative built for developers. Cookie-free, real-time, GDPR-compliant – and forever free at the core."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.app/" />
        <meta property="og:image" content="https://satsu.app/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Satsu – Fast, Ethical Analytics for Devs" />
        <meta
          name="twitter:description"
          content="Real-time, cookie-free analytics made for developers. Try Satsu – fast setup, clear data, no tracking of people."
        />
        <meta name="twitter:image" content="https://satsu.app/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.app/" />
      </>
    );
  }
  