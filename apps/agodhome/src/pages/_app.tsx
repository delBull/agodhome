// _app.tsx

import { GoogleAnalytics } from '@next/third-parties/google';
import { NextUIProvider } from '@nextui-org/react';
import { useEffect } from 'react';
import { SessionProvider } from "next-auth/react";

import RootLayout from '@/components/layouts/Root';
import WithNavigationFooter from '@/components/layouts/WithNavigationFooter';
import Provider from '@/providers';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import '@/styles/main.css';
import '@/styles/globals.css';

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function getDefaultLayout(page: ReactElement): ReactNode {
  return <WithNavigationFooter>{page}</WithNavigationFooter>;
}

function App({ Component, pageProps: { session, ...pageProps }, router }: AppPropsWithLayout) {
  let getLayout;

  if (router.query.simpleLayout) {
    getLayout = (page: ReactElement) => <main>{page}</main>;
  } else if (Component.getLayout) {
    getLayout = Component.getLayout;
  } else {
    getLayout = getDefaultLayout;
  }

  useEffect(() => {
    // Importar el archivo disableActions.js
    const script = document.createElement('script');
    script.src = '/disableActions.js';
    script.async = true;
    document.body.appendChild(script);

    // Aplicar la clase no-select al body
    document.body.classList.add('no-select');

    // Eliminar el script y la clase cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
      document.body.classList.remove('no-select');
    };
  }, []);

  return (
    <NextUIProvider> {/* Envuelve tu aplicación con NextUIProvider */}
      <Provider>
        <RootLayout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <SessionProvider session={session}>
            {getLayout(<Component {...pageProps} />)}
          </SessionProvider>
          <GoogleAnalytics gaId="G-B4C9EBTKKF" />
        </RootLayout>
      </Provider>
    </NextUIProvider>
  );
}

export default App;
