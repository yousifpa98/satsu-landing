// pricing/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Pricing – Simple & Fair Analytics Plans | Satsu</title>
  
        <meta
          name="description"
          content="Explore Satsu’s pricing plans for privacy-first web analytics. Free during development, always affordable, and built for developers and indie projects."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Satsu Pricing – Developer-Friendly Analytics Plans" />
        <meta
          property="og:description"
          content="Choose from free and paid Satsu plans. Get real-time analytics with no cookies, no bloat, and no lock-in."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.pro/pricing" />
        <meta property="og:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Satsu Pricing – Fair Plans for Devs" />
        <meta
          name="twitter:description"
          content="Satsu is free while in development. Our pricing stays indie-friendly, and the core features will always be free."
        />
        <meta name="twitter:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.pro/pricing" />
      </>
    );
  }
  