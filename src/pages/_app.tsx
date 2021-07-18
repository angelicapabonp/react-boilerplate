import '@styles/globals.scss';

type MyAppT = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: MyAppT) {
  return <Component {...pageProps} />;
}

export default MyApp;
