// feedback/+Head.jsx

export default function Head() {
    return (
      <>
        <title>Feedback – Help Shape Satsu</title>
  
        <meta
          name="description"
          content="Tell us what you think! Share feedback, ideas, bugs, or feature requests to help make Satsu the best privacy-first analytics tool for developers."
        />
  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        {/* Open Graph */}
        <meta property="og:title" content="Send Feedback – Help Build Satsu" />
        <meta
          property="og:description"
          content="We’re building Satsu in public – and your input matters. Drop us your thoughts, ideas, or issues anytime."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsu.pro/feedback" />
        <meta property="og:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Feedback – Satsu Analytics" />
        <meta
          name="twitter:description"
          content="Share your thoughts on Satsu. We’re listening to every suggestion – and improving fast."
        />
        <meta name="twitter:image" content="https://satsu.pro/og-cover.jpg" />
  
        {/* Canonical */}
        <link rel="canonical" href="https://satsu.pro/feedback" />
      </>
    );
  }
  