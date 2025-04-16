// signup/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Create an Account – Start Using Satsu</title>
  
        <meta
          name="description"
          content="Sign up for Satsu and start tracking your website with fast, cookie-free, privacy-compliant analytics. Built for developers."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Sign Up – Satsu Developer Analytics" />
        <meta
          property="og:description"
          content="Create your free Satsu account and get access to simple, fast, and ethical analytics. No cookies, no consent banners."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.pro/signup" />
        <meta property="og:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Create Account – Satsu Privacy-First Analytics" />
        <meta
          name="twitter:description"
          content="Join Satsu and start tracking your traffic with a developer-first, cookie-free analytics tool. Real-time, fast, and compliant."
        />
        <meta name="twitter:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.pro/signup" />
      </>
    );
  }
  