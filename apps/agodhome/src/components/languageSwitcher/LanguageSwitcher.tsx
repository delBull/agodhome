'use client'
import { useState } from 'react'
import { useRouter } from 'next/router';
import LanguageSwitcherSelect from './LanguageSwitcherSelect'

export default function LanguageSwitcher() {
  const languages = {
    en: "English",
    es: "Spanish",
  };
  const {locale : activeLocale, locales} = useRouter();
  const [isOpenDropdown, setisOpenDropdown] = useState(false)
  return (
    <div className="px-4 py-3">
        <div className="">
          <LanguageSwitcherSelect
            currentLocale={activeLocale}
            allLocales={Array.from(locales)}
            isOpenDropdown={isOpenDropdown}
            setisOpenDropdown={setisOpenDropdown}
            languages={languages}
            />
            </div>
      </div>
  )
}
