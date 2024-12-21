import clsx from 'clsx';
import Link from 'next/link';

import { ExternalLink } from '@/components/Icons';
import dayjs from '@/utils/dayjs';
import { useTranslations  } from 'next-intl';
interface TranslationObject {
  (key: string): string;
  has(key: string): boolean;
}

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
  t: TranslationObject;
}
interface LastUpdateProps {
  t: TranslationObject;
}
function LastUpdate({t} : LastUpdateProps) {
  return (
    <a
      href="/politica-privacidad"
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx('hover:underline')}
    >
      <span>{t('Privacidad')}</span>
    </a>
  );
}

interface FooterLinkProps {
  title: string;
  href: string;
  label?: 'new' | 'soon';
  isInternal?: boolean;
}

function FooterLink({
  title,
  href,
  label = undefined,
  isInternal = true,
}: FooterLinkProps) {
  if (label === 'soon') {
    return (
      <span className={clsx('footer-link footer-link--soon')}>
        {title}
        <span className={clsx('footer-link__label')}>{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className={clsx('footer-link')}>
        {title}
        {label && <span className={clsx('footer-link__label')}>{label}</span>}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx('footer-link')}
    >
      {title}
      <ExternalLink className={clsx('h-3.5 w-3.5')} />
      {label && <span className={clsx('footer-link__label')}>{label}</span>}
    </a>
  );
}



function FooterGroup({t, title, links }: FooterGroupProps) {
  return (
    <div className={clsx('flex-1')}>
      <div
        className={clsx(
          'mb-2 px-2 text-[13px] text-slate-600',
          'dark:text-slate-400'
        )}
      >
        {t.has(`${title}`) ? t(`${title}`) : title}
      </div>
      <ul className={clsx('flex flex-col')}>
        {links.map(({ title: linkTitle, href, label, isInternal }, index) => (
          <li key={`${title}-${href}-${index}`}>
            <FooterLink
              title={t.has(linkTitle) ? t(linkTitle) : linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterDescription({t}) {
  return (
    <div className={clsx('max-w-[348px]')}>
      <div
        className={clsx(
          'mb-3 text-[13px] text-slate-600',
          'dark:text-slate-400'
        )}
      >
        {t('Construyendo con Pasión')}
      </div>
      <p className={clsx('mb-4 font-normal leading-relaxed')}>
       {t('ecosystem-description')}
      </p>
    </div>
  );
}

function Footer() {
  const t : TranslationObject = useTranslations('footer')
  return (
    <footer
      className={clsx(
        'background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900',
        'dark:border-divider-dark dark:text-slate-200'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('py-10 font-semibold')}>
          <div className={clsx('flex flex-col-reverse gap-16', 'lg:flex-row')}>
            <div className={clsx('flex-1')}>
              <FooterDescription t={t}/>
            </div>
            <div
              className={clsx(
                '-mx-2 flex flex-1 flex-col gap-8',
                'sm:flex-row sm:gap-16 lg:mx-0'
              )}
            >
              <div className={clsx('flex', 'sm:gap-16')}>
                <FooterGroup
                t={t}
                  title="Learn"
                  links={[
                    {
                      title: 'Intro',
                      href: '/intro',
                    },
                    {
                      title: 'AGOD Key',
                      href: '/agodkey',
                    },
                    {
                      title: 'Blog',
                      href: '/blog',
                    },
                    {
                      title: 'Roadmap',
                      href: '/roadmap',
                      label: 'new',
                    },
                    {
                      title: 'Preguntas Frecuentes',
                      href: '/blog/preguntasfrecuentes',
                    },
                  ]}
                />
              </div>
              <div className={clsx('flex', 'sm:gap-16')}>
                <FooterGroup
                t={t}
                  title="Ecosistema"
                  links={[
                    {
                      title: 'Pandora\'s',
                      href: 'https://pandoras.foundation',
                      isInternal: false,
                    },
                    {
                      title: 'Ra Wallet',
                      href: '/ra-wallet',
                      isInternal: false,
                      label: 'soon',
                    },
                    {
                      title: 'ADEX',
                      href: '/adex',
                      isInternal: false,
                      label: 'soon',
                    },
                    {
                      title: 'DACCESS',
                      href: '/daccess',
                      isInternal: false,
                      label: 'soon',
                    },
                    {
                      title: 'Tokenization Agency',
                      href: 'https://dreamhub.agency',
                      isInternal: false,
                    },
                  ]}
                />
              </div>
              <div className={clsx('flex', 'sm:gap-16')}>
                <FooterGroup
                t={t}
                  title="Docs"
                  links={[
                    {
                      title: 'ASHARES',
                      href: '/blog/ashares',
                      isInternal: true,
                    },
                    {
                      title: 'Whitepaper',
                      href: 'https://whitepaper.agodecosystem.com/',
                      isInternal: false,
                    },
                    {
                      title: 'Tokenomics',
                      href: 'https://docs.agodecosystem.com/tokenomics',
                      isInternal: false,
                      //label: 'soon',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'border-divider-light flex justify-between border-t py-6 text-xs',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('font-semibold')}>
            &copy; {dayjs().format('YYYY')}, AGOD Ecosystem by MXHUB Ecosistema
            Blockchain S.A. de C.V.
          </div>
          <div className={clsx('text-slate-500', 'dark:text-slate-400')}>
            <LastUpdate t={t} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
