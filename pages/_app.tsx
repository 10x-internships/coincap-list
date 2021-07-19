import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'normalize.css';
import GlobalStyles from '@styles/GlobalStyles';
import Layout from '@components/Layout';

import store from 'redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
