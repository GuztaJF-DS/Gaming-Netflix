import type { AppProps } from 'next/app';
import { Global } from '../styles/globalTheme';

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
}
