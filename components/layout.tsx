import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';
import Header from './header';

type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout({ children, title = '' }: Props) {
  if (title) {
    title += ' | ';
  }

  return (
    <div>
      <Head>
        <title>{title}Mahesh Makani | Software Developer</title>
        <meta
          name="description"
          content="Curising the information superhighway. Coding across the full stack along the way."
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      </Head>
      <Header />
      <main>{children}</main>
      <Navbar />
      <Footer />
    </div>
  );
}
