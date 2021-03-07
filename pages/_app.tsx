import type { AppProps } from 'next/app';
import 'tacit-css/dist/tacit-css-1.5.5.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
