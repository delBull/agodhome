import { GoogleAnalytics } from '@next/third-parties/google';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/router';
import RootLayout from '@/components/layouts/Root';
import WithNavigationFooter from '@/components/layouts/WithNavigationFooter';
import Provider from '@/providers';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from '@/components/languageSwitcher/LanguageContext';
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

  return (
    <>
      <NextUIProvider>
        <Provider>
        <LanguageProvider messages={messages}>
          <RootLayout>
            <WithNavigationFooter currentLocale={currentLocale} allLocales={allLocales}>
              <Component {...pageProps} />
              <Analytics />
              <SpeedInsights/>
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