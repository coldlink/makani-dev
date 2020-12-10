import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';
import Header from './header';

type Props = {
  children: React.ReactNode;
  title?: string;
  center?: boolean;
  subheading?: string;
};

export default function Layout({
  children,
  title = '',
  center = false,
  subheading = 'Software Developer',
}: Props) {
  if (title) {
    title += ' | ';
  }

  return (
    <>
      <Head>
        <title>{title}Mahesh Makani | Software Developer</title>
        <meta
          name="description"
          content="Curising the information superhighway. Coding across the full stack along the way."
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="apple-mobile-web-app-title"
          content="Mahesh Makani | Software Developer"
        />
        <meta
          name="application-name"
          content="Mahesh Makani | Software Developer"
        />
        <meta name="msapplication-TileColor" content="#333333" />
        <meta name="theme-color" content="#333333" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css.min.css"
        />
      </Head>
      <Navbar />
      <Header h2={subheading} />
      <section>
        <article className={center && 'center'}>{children}</article>
      </section>
      <Footer />
    </>
  );
}
