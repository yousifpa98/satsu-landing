// compare/google-analytics/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Satsu vs Google Analytics – A Fast, Privacy-First Alternative</title>
  
        <meta
          name="description"
          content="Compare Satsu with Google Analytics. Discover a simpler, faster, and privacy-compliant alternative built for developers."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Satsu vs Google Analytics – Developer-Friendly Analytics" />
        <meta
          property="og:description"
          content="Looking for a privacy-friendly alternative to Google Analytics? Satsu offers real-time stats with no cookies or banners required."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.pro/compare/google-analytics" />
        <meta property="og:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Satsu vs Google Analytics – GDPR-Safe Tracking for Developers" />
        <meta
          name="twitter:description"
          content="Compare Satsu to Google Analytics. See why developers are switching to a faster, simpler, privacy-first tracking solution."
        />
        <meta name="twitter:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.pro/compare/google-analytics" />
      </>
    );
  }
  