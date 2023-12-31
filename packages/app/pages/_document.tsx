import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/Benrobo/4snap/main/packages/app/public/screenshots/4snap-bg.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="4snap" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Benrobo/4snap/main/packages/app/public/screenshots/4snap-bg.png"
        />
        <meta property="og:title" content="4snap: Command Snippet Manager" />
        <meta
          property="og:description"
          content="Discover, Share, & Execute Commands Anytime Anywhere"
        />
        <link
          rel="logo"
          href="https://raw.githubusercontent.com/Benrobo/4snap/main/packages/app/public/logo.png"
          type="image/png"
        />
      </Head>
      <title>4snap</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
