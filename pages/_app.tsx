import { AppProps } from 'next/app';
import LayoutProvider from 'components/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
};

export default MyApp;
