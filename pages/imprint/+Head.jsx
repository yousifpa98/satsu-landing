// imprint/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Imprint – Satsu Legal Notice</title>
  
        <meta
          name="description"
          content="Legal disclosure (Impressum) for Satsu in accordance with §5 TMG and German law. Contact and ownership information."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Yousif Paulus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Satsu – Legal Disclosure (Imprint)" />
        <meta
          property="og:description"
          content="Official imprint (Impressum) of Satsu in accordance with German TMG regulations. Contact: hello@satsu.pro"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.pro/imprint" />
        <meta property="og:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Satsu – Legal Notice" />
        <meta
          name="twitter:description"
          content="Legal disclosure and contact information for Satsu, operated by Yousif Paulus in Germany."
        />
        <meta name="twitter:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.pro/imprint" />
      </>
    );
  }
  