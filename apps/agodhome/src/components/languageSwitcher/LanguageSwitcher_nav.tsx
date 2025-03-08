'use client';
import { m } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useLanguage } from './LanguageContext';

type LanguageSwitcherProps = {
  currentLocale: string;
  allLocales: string[];
};

export default function LanguageSwitcher({
  allLocales = ['en', 'es'],
}: LanguageSwitcherProps): JSX.Element {
  const { pathname, query, asPath } = useRouter();
  const { selectedLocale, changeLocale } = useLanguage();

  return (
    <div className="flex justify-center items-center bg-gray-300 dark:bg-gray-800 rounded-full p-1 shadow-md">
      {allLocales.map((loc) => (
        <Link key={loc} href={{ pathname, query }} as={asPath} locale={loc} legacyBehavior scroll={false}>
          <m.div
            className={clsx(
              'w-full cursor-pointer px-4 py-1 rounded-full transition-all duration-300 font-medium text-sm',
              loc === selectedLocale
                ? 'bg-red-500 text-white shadow-md dark:bg-red-500 dark:text-gray-900 text-center'
                : 'bg-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-600 dark:hover:bg-gray-700 text-center'
            )}
            onClick={() => changeLocale(loc)}
            layout
            transition={{
              type: 'spring',
              visualDuration: 0.2,
              bounce: 0.2,
            }}
          >
            {loc.toLowerCase()}
          </m.div>
        </Link>
      ))}
    </div>
  );
}
