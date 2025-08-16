'use client';
import { createContext, useContext, ReactNode, useCallback } from 'react';
import { useRouter } from 'next/router';

type IntlMessages = Record<string, any>;

type LanguageContextType = {
  selectedLocale: string;
  changeLocale: (locale: string) => void;
  messages: IntlMessages;
};

const LanguageContext = createContext<LanguageContextType>({
  selectedLocale: 'en',
  changeLocale: () => {},
  messages: {}
});

export function LanguageProvider({ children, messages }: { children: ReactNode, messages?: IntlMessages }) {
  const router = useRouter();
  const { locale, push, pathname, query, asPath } = router;
  
  const selectedLocale = locale || 'es';

  const changeLocale = useCallback((newLocale: string) => {
    if (newLocale !== selectedLocale) {
      push({ pathname, query }, asPath, { locale: newLocale, scroll: false });
    }
  }, [selectedLocale, push, pathname, query, asPath]);

  return (
    <LanguageContext.Provider value={{ selectedLocale, changeLocale, messages: messages || {} }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);