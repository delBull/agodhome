import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import { ThirdwebProvider } from "thirdweb/react";

import mdxCustomComponents from '@/components/mdx/custom-components';
import ColorAccentProvider from '@/providers/ColorAccentProvider';
import FocusModeProvider from '@/providers/FocusModeProvider';
import FramerMotionProvider from '@/providers/FramerMotionProvider';
import GlobalStateProvider from '@/providers/GlobalStateProvider';

import type { PropsWithChildren } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Provider({ children = null }: PropsWithChildren) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      container={
        {
          parameters: {
            badge: "bottomleft",
            theme: "dark"
          }
        }
      }
    >
      <ThirdwebProvider>
      <FramerMotionProvider>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <FocusModeProvider>
            <ColorAccentProvider defaultScheme="violet">
              <GlobalStateProvider>
                <MDXProvider components={mdxCustomComponents}>
                  {children}
                </MDXProvider>
              </GlobalStateProvider>
            </ColorAccentProvider>
          </FocusModeProvider>
        </ThemeProvider>
      </FramerMotionProvider>
      </ThirdwebProvider>
    </GoogleReCaptchaProvider>
  );
}

export default Provider;
