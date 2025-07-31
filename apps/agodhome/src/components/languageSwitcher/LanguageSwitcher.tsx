'use client';
import { m } from 'framer-motion';
import { useRouter } from 'next/router';
import clsx from 'clsx';

type LanguageSwitcherProps = {
  currentLocale: string;
  allLocales: string[];
};

export default function LanguageSwitcher({
  allLocales = ['en', 'es'],
}: LanguageSwitcherProps): JSX.Element {
  const router = useRouter();
  const currentLocale = router.locale || 'es';

  const handleLocaleChange = (locale: string) => {
    // Use Next.js router directly for immediate navigation
    router.push(router.asPath, router.asPath, { locale, scroll: false });
  };

  return (
    <div className="flex justify-center items-center bg-gray-300 dark:bg-gray-800 rounded-full p-1 shadow-md">
      {allLocales.map((loc) => (
        <m.div
          key={loc}
          className={clsx(
            'cursor-pointer px-4 py-1 rounded-full transition-all duration-300 font-medium text-sm',
            loc === currentLocale
              ? 'bg-red-500 text-white shadow-md dark:bg-red-500 dark:text-gray-900'
              : 'bg-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-600 dark:hover:bg-gray-700'
          )}
          onClick={() => handleLocaleChange(loc)}
          layout
          transition={{
            type: 'spring',
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        >
          {loc.toLowerCase()}
        </m.div>
      ))}
    </div>
  );
}
