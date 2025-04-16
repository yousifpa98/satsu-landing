// contact/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Contact Satsu – Get in Touch</title>
  
        <meta
          name="description"
          content="Need to reach out? Contact the Satsu team directly via email or social – no forms, no bots, just a real conversation."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Contact Satsu – Say Hello Anytime" />
        <meta
          property="og:description"
          content="Reach out to the creators of Satsu. No support ticket systems or forms – just direct contact, like it should be."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.pro/contact" />
        <meta property="og:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Satsu – Simple & Direct" />
        <meta
          name="twitter:description"
          content="Have questions or feedback? Contact Satsu via email or Twitter – no forms, no bots."
        />
        <meta name="twitter:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.pro/contact" />
      </>
    );
  }
  