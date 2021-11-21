import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import GlobalStyles from 'styles/global';
import SEO from '../../next-seo.config';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#06092b" />

        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNProgress
        color="#f231a5"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
