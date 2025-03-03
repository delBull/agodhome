'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';

type LanguageSwitcherProps = {
  currentLocale: string;
  allLocales: string[];
  isOpenDropdown?: boolean;  // Hacemos que sea opcional
  setisOpenDropdown?: React.Dispatch<React.SetStateAction<boolean>>;  // Opcional
};

const spanishSpeakingCountries = [
  'Argentina',
  'Bolivia',
  'Chile',
  'Colombia',
  'Costa Rica',
  'Cuba',
  'Ecuador',
  'El Salvador',
  'España',
  'Guatemala',
  'Guinea Ecuatorial',
  'Honduras',
  'México',
  'Nicaragua',
  'Panamá',
  'Paraguay',
  'Perú',
  'Puerto Rico',
  'República Dominicana',
  'Uruguay',
  'Venezuela',
  'Aruba',
  'Bonaire',
  'Curaçao',
  'Islas Turcas y Caicos',
  'San Martín',
  'Sint Eustatius',
  'Saba',
  'Surinam',
  'Belice',
];

const getGeolocation = async () => {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const data = response.data;
    const country = data.country_name;

    if (spanishSpeakingCountries.includes(country)) {
      return 'es';
    } else {
      return 'en';
    }
  } catch (error) {
    console.error(error);
    return 'en';
  }
};

export default function LanguageSwitcher({
  allLocales = ['en', 'es'],
}: LanguageSwitcherProps): JSX.Element {
  const { pathname, query, asPath } = useRouter();
  const [selectedLocale, setSelectedLocale] = useState('');

  useEffect(() => {
    const getLocale = async () => {
      const locale = await getGeolocation();
      setSelectedLocale(locale);
    };

    getLocale();
  }, []);

  const handleLocaleChange = (locale: string) => {
    setSelectedLocale(locale);
  };

  return (
    <div className="flex justify-center items-center bg-gray-300 dark:bg-gray-800 rounded-full p-1 shadow-md">
      {allLocales.map((locale) => (
        <Link key={locale} href={{ pathname, query }} as={asPath} locale={locale} legacyBehavior scroll={false}>
          <m.div
            className={clsx(
              'cursor-pointer px-4 py-1 rounded-full transition-all duration-300 font-medium text-sm',
              locale === selectedLocale
                ? 'bg-red-500 text-white shadow-md dark:bg-red-500 dark:text-gray-900' // 🔹 Activo: Azul sólido y destacado
                : 'bg-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-600 dark:hover:bg-gray-700' // 🔸 Inactivo: Más tenue
            )}
            onClick={() => handleLocaleChange(locale)}
            layout
            transition={{
              type: 'spring',
              visualDuration: 0.2,
              bounce: 0.2,
            }}
          >
            {locale.toLowerCase()}
          </m.div>
        </Link>
      ))}
    </div>
  );
}