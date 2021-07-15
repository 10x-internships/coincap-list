import type { AppProps } from 'next/app';
import 'normalize.css';
import GlobalStyles from '@styles/GlobalStyles';
import Container from '@components/Container';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Container>
        <p>Coin List</p>
      </Container>
    </>
  );
}
export default MyApp;
