import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mahesh Makani</title>
        <meta
          name="description"
          content="Hello! I'm Mahesh Makani, a software developer based in Hertfordshire and London, UK. I'm cruising the information superhighway and coding along the full stack across the way."
        />
        <link rel="stylesheet" href="/styles.css" />
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
        <meta name="apple-mobile-web-app-title" content="makani.dev" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
