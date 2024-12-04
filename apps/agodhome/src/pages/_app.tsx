import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GoogleAnalytics } from '@next/third-parties/google';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from "next-auth/react";

import RootLayout from '@/components/layouts/Root';
import WithNavigationFooter from '@/components/layouts/WithNavigationFooter';
import Provider from '@/providers';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import FacebookPixel from '../components/FacebookPixel';

// Importar el CSS de n8n Chat
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

import '@/styles/main.css';
import '@/styles/globals.css';

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      createChat({
        webhookUrl: 'https://crm.agodecosystem.com/webhook/e3f435d5-80e1-4274-a591-2c403c8940e3/chat',
        webhookConfig: {
          method: 'POST',
          headers: {}
        },
        target: '#n8n-chat',
        mode: 'window',
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        metadata: {},
        showWelcomeScreen: false,
        defaultLanguage: 'en',
        initialMessages: [
          'Hola! 👋',
          'Hola! mi nombre es Quetza!, ¿en qué te puedo ayudar el día de hoy?'
        ],
        i18n: {
          en: {
            title: 'Weep! 👋',
            subtitle: "Soy tu asistente virtual y estoy aquí para ayudarte",
            footer: '',
            getStarted: 'Nueva Conversación',
            inputPlaceholder: 'escribe tu consulta..',
            closeButtonTooltip: 'Cerrar chat'
          },
        },
      });
    }
  }, [router.pathname]);

  return (
    <NextUIProvider>
      <Provider>
        <RootLayout>
          <FacebookPixel />
          <SessionProvider session={session}>
            <WithNavigationFooter>
              <Component {...pageProps} />
              <div id="n8n-chat-container">
                <div id="n8n-chat" />
              </div>
            </WithNavigationFooter>
          </SessionProvider>
          <GoogleAnalytics gaId="G-B4C9EBTKKF" />
        </RootLayout>
      </Provider>
    </NextUIProvider>
  );
}

export default App;
