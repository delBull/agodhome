import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import QuickAccess from '@/components/QuickAccess';
import Shortcuts from '@/components/Shortcuts';
import Toaster from '@/components/Toaster';

import type { PropsWithChildren } from 'react';


function WithNavigationFooter({ children, currentLocale, allLocales }: PropsWithChildren<{ currentLocale: string; allLocales: string[] }>): JSX.Element {
  return (
    <>
      <QuickAccess currentLocale={currentLocale} allLocales={allLocales} />
      <Shortcuts />
      <Navigation currentLocale="es" allLocales={['en', 'es']} />
      <main>{children}</main>
      <Toaster />
      <Footer />
    </>
  );
}

export default WithNavigationFooter;
