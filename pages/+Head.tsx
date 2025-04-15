// https://vike.dev/Head

import logoUrl from "/logo.png";

export default function HeadDefault() {
  return (
    <>
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="サツ | Satsu" />
      <link rel="manifest" href="/site.webmanifest" />
      <script
        src="https://cdn.satsu.pro/tracker.js"
        data-site="6XQGkAIUxx"
      ></script>
    </>
  );
}
