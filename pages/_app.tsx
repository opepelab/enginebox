import { AppProps } from 'next/app';
import LayoutProvider from 'components/layout';
import 'styles/globals.scss';
// import 'styles/mobile.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
};

export default MyApp;
