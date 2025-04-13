// verify/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Verify Your Email – Satsu Account</title>
  
        <meta
          name="description"
          content="Please verify your email address to activate your Satsu account. One step away from privacy-first, real-time analytics."
        />
  
        <meta name="robots" content="noindex, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Email Verification – Satsu" />
        <meta
          property="og:description"
          content="Confirm your email address to access your Satsu dashboard. Start tracking with cookie-free, privacy-first analytics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.app/verify" />
        <meta property="og:image" content="https://satsu.app/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Verify Your Satsu Account" />
        <meta
          name="twitter:description"
          content="You're almost there. Just verify your email to activate your Satsu account and start using your private analytics dashboard."
        />
        <meta name="twitter:image" content="https://satsu.app/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.app/verify" />
      </>
    );
  }
  