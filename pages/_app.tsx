import Head from 'next/head';
import { FC, useMemo, useState } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import fetchData from './util/fetchData';
import useAsyncData from './hooks/useAsyncData';
import { ThemeContext } from './contexts/ThemeContext';

import "tailwindcss/tailwind.css";

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

  const [dark, setDark] = useState<boolean>(false);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: dark ? 'dark' : 'light',
        },
      }),
    [dark],
  );

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ dark, setDark }}>
        <Head>
          <title>{randomExcuse}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link href="/style/index.css" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
