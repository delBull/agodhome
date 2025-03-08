'use client';
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

// Constante definida fuera del componente para evitar redefinición
const spanishSpeakingCountries = [
  'Argentina', 'Bolivia', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Ecuador',
  'El Salvador', 'España', 'Guatemala', 'Guinea Ecuatorial', 'Honduras', 'México',
  'Nicaragua', 'Panamá', 'Paraguay', 'Perú', 'Puerto Rico', 'República Dominicana',
  'Uruguay', 'Venezuela', 'Aruba', 'Bonaire', 'Curaçao', 'Islas Turcas y Caicos',
  'San Martín', 'Sint Eustatius', 'Saba', 'Surinam', 'Belice'
];

type LanguageContextType = {
  selectedLocale: string;
  changeLocale: (locale: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  selectedLocale: 'en',
  changeLocale: () => {}
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { locale, push, pathname, query, asPath } = useRouter();
  const [selectedLocale, setSelectedLocale] = useState<string>(locale || 'en');

  // Memoriza getGeolocation para no redefinirlo en cada render
  const getGeolocation = useCallback(async () => {
    try {
      const response = await axios.get('https://ipapi.co/json/');
      const data = response.data;
      const country = data.country_name;
      return spanishSpeakingCountries.includes(country) ? 'es' : 'en';
    } catch (error) {
      console.error(error);
      return 'en';
    }
  }, []); // Ahora no requiere 'spanishSpeakingCountries' porque ya está fuera

  useEffect(() => {
    if (!selectedLocale) {
      (async () => {
        const loc = await getGeolocation();
        setSelectedLocale(loc);
      })();
    }
  }, [selectedLocale, getGeolocation]);

  const changeLocale = (newLocale: string) => {
    setSelectedLocale(newLocale);
    push({ pathname, query }, asPath, { locale: newLocale, scroll: false });
  };

  return (
    <LanguageContext.Provider value={{ selectedLocale, changeLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
