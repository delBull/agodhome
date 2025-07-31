'use client';
import { createContext, useContext, ReactNode, useCallback } from 'react';
import { useRouter } from 'next/router';

type LanguageContextType = {
  selectedLocale: string;
  changeLocale: (locale: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  selectedLocale: 'en',
  changeLocale: () => {}
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { locale, push, pathname, query, asPath } = router;
  
  // Use router locale directly - no need for separate state
  const selectedLocale = locale || 'es';

  const changeLocale = useCallback((newLocale: string) => {
    if (newLocale !== selectedLocale) {
      // Use Next.js router to change locale
      push({ pathname, query }, asPath, { locale: newLocale, scroll: false });
    }
  }, [selectedLocale, push, pathname, query, asPath]);

  return (
    <LanguageContext.Provider value={{ selectedLocale, changeLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
