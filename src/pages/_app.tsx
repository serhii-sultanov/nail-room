import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MainLayout } from '@/components/layouts/MainLayout';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/utils/i18next';
import '@/styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Nail Room</title>
      </Head>
      <I18nextProvider i18n={i18n}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </I18nextProvider>
    </>
  );
};

export default App;
