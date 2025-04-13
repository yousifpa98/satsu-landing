// compare/+Head.jsx

export default function Head() {
    return (
      <>
        <title>
          Compare Satsu – Google Analytics, Plausible, Fathom & Matomo
        </title>
  
        <meta
          name="description"
          content="See how Satsu compares to Google Analytics, Plausible, Fathom, and Matomo. A clear breakdown of features, privacy, speed, and pricing – built for developers."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Compare Satsu – Developer-Friendly Analytics Alternatives" />
        <meta
          property="og:description"
          content="Side-by-side comparison of Satsu and major analytics tools. Fast, privacy-first, and made for developers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.app/compare" />
        <meta property="og:image" content="https://satsu.app/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Satsu vs Google Analytics, Plausible & more" />
        <meta
          name="twitter:description"
          content="A simple breakdown of how Satsu compares to other analytics tools. Built for devs who care about privacy and speed."
        />
        <meta name="twitter:image" content="https://satsu.app/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.app/compare" />
      </>
    );
  }
  