import Head from 'next/head';
import { FC, useMemo } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import useAsyncData from './hooks/useAsyncData';
import fetchData from './util/fetchData';

import '../styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { data: excuses } = useAsyncData(
    fetchData<string>(
     'https://raw.githubusercontent.com/afreeorange/developer-excuses/master/excuses.txt',
    ),
  );
  const randomExcuse = useMemo(() => {
      if (excuses) {
        const excusesList = excuses
          .split('\n')
          .filter((val) => val !== '');
        return excusesList[Math.floor(Math.random() * excusesList.length)];
      }
      return 'Oláh Tamás-Lajos';
  }, [excuses]);

  return (
    <>
      <Head>
        <title>{randomExcuse}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
