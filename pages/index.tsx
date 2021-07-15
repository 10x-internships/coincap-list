import Head from 'next/head';

import Header from '@components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coin Tracker</title>
        <meta name="description" content="A Cryptocurrencies tracker app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
