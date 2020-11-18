import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
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
    </div>
  );
}
