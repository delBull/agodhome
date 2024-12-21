'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import {m} from 'framer-motion'
type Props = {
  currentLocale: string,
  allLocales: string[],
  isOpenDropdown: Boolean,
  setisOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>,
  languages: object
};

export default function LanguageSwitcherSelect({
  currentLocale,
  allLocales,
}: Readonly<Props>) {
  const {pathname, query, asPath } = useRouter();
  return (
  <div className='flex justify-center items-center hover:bg-[#b8b6b6]   bg-[#ddd] text-slate-800 size-7 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50 rounded-full overflow-hidden'>
  {allLocales.map(locale => 
  
  {
    if(locale === currentLocale) return 
    return (
      <m.div
          key={locale}
      initial={{ x: '100%' }} // Starts off to the right
      animate={{ x: 0 }} // Moves to the center (default position)
      exit={{ x: '-100%' }} // Moves off to the left when it exits
      transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Smooth animation
      >
    <Link
        className=''
            href={{ pathname, query }}
            as={asPath}
            locale={locale}
            legacyBehavior
    >
     
      {currentLocale}
    </Link>
      </m.div>
  )})}
  </div>
  );
}
