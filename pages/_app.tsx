import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import 'normalize.css';
import GlobalStyles from '@styles/GlobalStyles';
import Layout from '@components/Layout';

import theme from '@styles/theme';
import store from 'redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
