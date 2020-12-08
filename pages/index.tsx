import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mahesh Makani | Software Developer</title>
        <meta
          name="description"
          content="Curising the information superhighway. Coding across the full stack along the way."
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Mahesh Makani</h1>
        <h2>Full Stack Software Developer</h2>

        <p>Cruising the information superhighway 🏄</p>

        <p>
          Currently doing code at{' '}
          <a href="https://theguardian.com" target="_blank" rel="noreferrer">
            The Guardian
          </a>
          .
        </p>

        <p>
          Previously at{' '}
          <a href="https://natives.group" target="_blank" rel="noreferrer">
            Natives
          </a>
          .
        </p>

        <p>Have a look at some of my work, or get in touch</p>
      </main>
    </>
  );
}
