// compare/matomo/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Satsu vs Matomo – A Lightweight Alternative for Developers</title>
  
        <meta
          name="description"
          content="Compare Satsu and Matomo. Find out which analytics tool is faster, easier to use, and more focused on developers and privacy."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Satsu vs Matomo – Developer Analytics Simplified" />
        <meta
          property="og:description"
          content="Matomo vs Satsu: Compare privacy, simplicity, and speed. Discover why developers are switching to a lighter, hosted alternative."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.pro/compare/matomo" />
        <meta property="og:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Satsu vs Matomo – Simple, Fast Analytics for Devs" />
        <meta
          name="twitter:description"
          content="Compare Matomo and Satsu. See how Satsu offers real-time, cookie-free analytics with zero setup and full GDPR compliance."
        />
        <meta name="twitter:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.pro/compare/matomo" />
      </>
    );
  }
  