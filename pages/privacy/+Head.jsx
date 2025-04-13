// privacy/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Privacy Policy – Satsu Analytics</title>
  
        <meta
          name="description"
          content="Learn how Satsu handles data. We’re a privacy-first analytics platform – no cookies, no tracking of individuals, and full GDPR compliance."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Satsu Privacy Policy – We Track Traffic, Not People" />
        <meta
          property="og:description"
          content="Satsu is GDPR-compliant, cookie-free, and doesn’t collect personal data. See how we keep your visitors safe and anonymous."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.app/privacy" />
        <meta property="og:image" content="https://satsu.app/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Satsu Privacy – Cookie-Free Analytics" />
        <meta
          name="twitter:description"
          content="We don’t track people. Satsu collects only what’s necessary to show you anonymized traffic insights – and nothing else."
        />
        <meta name="twitter:image" content="https://satsu.app/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.app/privacy" />
      </>
    );
  }
  