'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

type Props = {
  currentLocale: string;
  allLocales: string[];
  isOpenDropdown?: boolean;  // Hacemos que sea opcional
  setisOpenDropdown?: React.Dispatch<React.SetStateAction<boolean>>;  // Opcional
};

export default function LanguageSwitcherSelect({
  currentLocale,
  allLocales = ['en', 'es'],
}: Props): JSX.Element {
  const { pathname, query, asPath } = useRouter();

  console.log('currentLocale:', currentLocale); // Añade este log
  console.log('allLocales:', allLocales); // Añade este log

  return (
    <div className="flex justify-center items-center p-1 rounded-full bg-gray-300 dark:bg-gray-700">
      {allLocales && allLocales.length > 0 ? (
      allLocales.map((locale) => (
        <Link
          key={locale} 
          href={{ pathname, query }}
          as={asPath}
          locale={locale}
          legacyBehavior
          scroll={false}
        >
          <div
            className={clsx(
              'cursor-pointer px-4 py-1 rounded-full transition-all duration-300',
              {
                'bg-white text-black shadow-lg': locale === currentLocale,
                'bg-transparent text-gray-500': locale !== currentLocale,
              }
            )}
          >
            {locale.toUpperCase()}
          </div>
        </Link>
     ))
    ) : (
      <div>Not available</div> // Mensaje opcional si no hay locales
    )}
    </div>
  );
}
