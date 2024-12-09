import { GoogleAnalytics } from '@next/third-parties/google';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import RootLayout from '@/components/layouts/Root';
import WithNavigationFooter from '@/components/layouts/WithNavigationFooter';
import Provider from '@/providers';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import FacebookPixel from '../components/FacebookPixel';

import '@/styles/globals.css';
import '@/styles/main.css';

import Chat from '@/components/Chat';
import '@n8n/chat/style.css';
import '@/styles/chat.css';

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const router = useRouter();
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (router.pathname === '/') {
      setIsChatOpen(true);
    } else {
      setIsChatOpen(false);
    }
  }, [router.pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isChatOpen) {
        if (event.key === 'd' || event.key === 'Escape' || event.key === 'd' || event.key === 'f') {
          event.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isChatOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'OptionLeft' || event.code === 'OptionRight') {
        setIsChatOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <NextUIProvider>
      <Provider>
        <RootLayout>
          <FacebookPixel />
          <WithNavigationFooter>
            <div>
              <Component {...pageProps} />
              <Chat />
            </div>
          </WithNavigationFooter>
          <GoogleAnalytics gaId="G-B4C9EBTKKF" />
        </RootLayout>
      </Provider>
    </NextUIProvider>
  );
}

export default App;
