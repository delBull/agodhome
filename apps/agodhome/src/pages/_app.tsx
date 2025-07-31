import { GoogleAnalytics } from '@next/third-parties/google';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/router';
import RootLayout from '@/components/layouts/Root';
import WithNavigationFooter from '@/components/layouts/WithNavigationFooter';
import Provider from '@/providers';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from '@/components/languageSwitcher/LanguageContext';
import { useEffect, Suspense } from 'react';
import type { AppProps } from 'next/app';

// Type for internationalization messages
type IntlMessages = Record<string, any>;

import '@/styles/globals.css';
import '@/styles/main.css';

import '@n8n/chat/style.css';
import '@/styles/chat.css';

//type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  //getLayout?: (page: ReactElement) => ReactNode;
//};

type PageProps = {
  messages?: IntlMessages;
  now?: number;
  currentLocale?: string;
  allLocales?: string[];
};

type Props = Omit<AppProps<PageProps>, 'pageProps'> & {
  pageProps: PageProps;
};

function App({ Component, pageProps }: Props): JSX.Element {
  const router = useRouter();
  const currentLocale = pageProps.currentLocale || router.locale || 'es';
  const allLocales = pageProps.allLocales || ['es', 'en'];

  // Fallback for messages (ensure messages are passed if not static)
  const { messages } = pageProps;

  // Set messages globally for our simple translation hook
  useEffect(() => {
    if (typeof window !== 'undefined' && messages) {
      (window as any).__NEXT_INTL_MESSAGES__ = messages;
    }
  }, [messages]);

  return (
    <>
      <NextUIProvider>
        <Provider>
        <LanguageProvider>
          <RootLayout>
            <WithNavigationFooter currentLocale={currentLocale} allLocales={allLocales}>
              <Suspense fallback={<div>Loading...</div>}>
                <div>
                  <Component {...pageProps} />
                  <Analytics />
                  <SpeedInsights/>
                </div>
              </Suspense>
            </WithNavigationFooter>
            <GoogleAnalytics gaId="G-B4C9EBTKKF" />
          </RootLayout>
          </LanguageProvider>
        </Provider>
      </NextUIProvider>
    </>
  );
}

export default App;
