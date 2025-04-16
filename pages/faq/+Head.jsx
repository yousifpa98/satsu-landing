// faq/+Head.jsx

export default function Head() {
    return (
      <>
        <title>FAQ – Satsu Privacy-First Analytics</title>
  
        <meta
          name="description"
          content="Find answers to frequently asked questions about Satsu – privacy, cookie banners, GDPR compliance, data collection, and setup."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Satsu FAQ – All Your Questions Answered" />
        <meta
          property="og:description"
          content="Got questions about Satsu? Learn how our privacy-first analytics works, what's tracked, and how to get started."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.pro/faq" />
        <meta property="og:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Satsu FAQ – Privacy, Tracking & Setup" />
        <meta
          name="twitter:description"
          content="Answers to common questions about Satsu's setup, tracking behavior, GDPR compliance, and cookie-free usage."
        />
        <meta name="twitter:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.pro/faq" />
      </>
    );
  }
  