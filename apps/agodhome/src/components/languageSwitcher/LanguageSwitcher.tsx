'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import clsx from 'clsx';

type LanguageSwitcherProps = {
  currentLocale: string;
  allLocales: string[];
  isOpenDropdown?: boolean;  // Hacemos que sea opcional
  setisOpenDropdown?: React.Dispatch<React.SetStateAction<boolean>>;  // Opcional
};

export default function LanguageSwitcher({
  currentLocale,
  allLocales = ['en', 'es'],
}: LanguageSwitcherProps): JSX.Element {
  const { pathname, query, asPath } = useRouter();
  const [selectedLocale, setSelectedLocale] = useState(currentLocale);

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
