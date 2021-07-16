import type { AppProps } from 'next/app';
import 'normalize.css';
import GlobalStyles from '@styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from 'store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
