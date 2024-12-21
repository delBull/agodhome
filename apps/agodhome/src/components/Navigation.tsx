import clsx from 'clsx';
import { FaDiscord } from 'react-icons/fa';

import NavIcon from '@/components/navigations/NavIcon';
import NavIconQuickAccess from '@/components/navigations/NavIconQuickAccess';
import NavLink from '@/components/navigations/NavLink';
import NavLinkDropdown from '@/components/navigations/NavLinkDropdown';
import NavLinkExpanded from '@/components/navigations/NavLinkExpanded';
import NavLogo from '@/components/navigations/NavLogo';
import { useTranslations } from 'next-intl';

import useOnScroll from '@/hooks/useOnScroll';
import LanguageSwitcher from './languageSwitcher/LanguageSwitcher';

const workLinks = [
  { title: 'Ra Wallet', href: '/explora/rawallet' },
  { title: 'ADEX', href: '/explora/adex' },
  { title: 'DACCESS', href: '/explora/daccess' },
  { title: "Pandora's", href: '/explora/pandoras' },
];


function Navbar() {
  const t = useTranslations("Navigation")
  const learnLinks = [
    { title: t('Intro'), href: '/intro' },
    { title: t('AGOD Key'), href: '/agodkey' },
    { title: t('Roadmap'), href: '/roadmap' },
    { title: t("Blog"), href: '/blog' },
  ];
  const isScrolled = useOnScroll(0);

  return (
    <header
      className={clsx('fixed left-0 right-0 top-0 z-[1000]', 'fm:absolute')}
    >
      <div
        className={clsx(
          'fixed inset-0 h-16',
          [
            isScrolled === true && [
              'border-divider-light border-b bg-white/70 backdrop-blur',
              'dark:border-divider-dark dark:bg-slate-900/80',
            ],
          ],
          'fm:hidden'
        )}
      />
      <div className={clsx('h-2', [isScrolled === true && ['-mt-2']])} />
      <div className={clsx('content-wrapper-max')}>
        <div
          className={clsx(
            'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
            'md:px-4'
          )}
        >
          <nav className={clsx('flex', 'md:gap-2')} data-accent="violet">
            <NavLogo href="/" title="Home" />
            <ul className={clsx('flex items-center', 'md:gap-1')}>
              <li className={clsx('hidden lg:block')} data-accent="blue">
                <NavLink title="Intro" href="/intro" />
              </li>
              <li className={clsx('hidden lg:block')} data-accent="blue">
                <NavLink title="AGOD Key" href="/agodkey" />
              </li>
              <li className={clsx('hidden lg:block')} data-accent="blue">
                <NavLink title="Roadmap" href="/roadmap" />
              </li>
              <li className={clsx('hidden lg:block')} data-accent="blue">
                <NavLink title={t("Blog")} href="/blog" />
              </li>
              <li className={clsx('lg:hidden')} data-accent="blue">
                <NavLinkDropdown title="Learn" items={learnLinks} />
              </li>
              <li className={clsx('lg:hidden')} data-accent="blue">
                <NavLinkDropdown title="dApps" items={workLinks} />
              </li>
              <li className={clsx('hidden lg:block')} data-accent="blue">
                <NavLinkExpanded title="dApps" items={workLinks} />
              </li>
            </ul>
          </nav>
          <ul className={clsx('flex items-center')}>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://discord.gg/WVqQtqT7xa"
                icon={<FaDiscord className={clsx('h-5 w-5 hover:scale-110 transition-transform duration-200')} />}
                title="Discord"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
             <LanguageSwitcher />
            </li>
       
            <li className={clsx('hidden', 'sm:block')}>
              <div
                className={clsx(
                  'ml-2 mr-4 h-3 w-[1px] bg-slate-200',
                  'dark:bg-slate-700'
                )}
              />
            </li>
            <li className={clsx('mr-2')}>
              <NavIconQuickAccess />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
