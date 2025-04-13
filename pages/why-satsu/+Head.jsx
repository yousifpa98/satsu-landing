// why-satsu/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Why Satsu – Built for Developers Who Care</title>
  
        <meta
          name="description"
          content="Learn why we built Satsu – a lightweight, privacy-first analytics tool made for developers, indie hackers, and small projects that deserve better than bloated tracking."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Why Satsu Exists – The Story Behind the Simplicity" />
        <meta
          property="og:description"
          content="Satsu was built because developers deserve analytics that are ethical, fast, and easy to use. Here's the why behind the product."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.app/why-satsu" />
        <meta property="og:image" content="https://satsu.app/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Satsu – A Better Kind of Analytics" />
        <meta
          name="twitter:description"
          content="Not just another tracking tool. Satsu was created for devs who care about speed, ethics, and simplicity. Here's why it matters."
        />
        <meta name="twitter:image" content="https://satsu.app/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.app/why-satsu" />
      </>
    );
  }
  