import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
