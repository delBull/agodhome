import { useEffect } from 'react';
import '@n8n/chat/style.css';
import '../styles/chat.css';
import { createChat } from '@n8n/chat';
import { GoogleAnalytics } from '@next/third-parties/google';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from "next-auth/react";

import RootLayout from '@/components/layouts/Root';
import WithNavigationFooter from '@/components/layouts/WithNavigationFooter';
import Provider from '@/providers';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import FacebookPixel from '../components/FacebookPixel'

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
    const initializeChat = async () => {
      try {
        console.log('Inicializando el chat...');
        await createChat({
          webhookUrl: 'https://crm.agodecosystem.com/webhook/e3f435d5-80e1-4274-a591-2c403c8940e3/chat'
        });
        console.log('Chat inicializado correctamente!');
      } catch (error) {
        console.error('Error al inicializar el chat:', error);
      }
    };
    
    initializeChat();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target && (e.target as HTMLElement).classList.contains('n8n-chat')) {
        e.stopPropagation();
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/disableActions.js';
    script.async = true;
    document.body.appendChild(script);
  
    document.body.classList.add('no-select');
  
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      document.body.classList.remove('no-select');
    };
  }, []);

  return (
    <NextUIProvider> {/* Envuelve tu aplicación con NextUIProvider */}
      <Provider>
        <RootLayout>
          <FacebookPixel />
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
