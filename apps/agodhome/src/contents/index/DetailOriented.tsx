import clsx from 'clsx';

import { HeartIcon } from '@/components/Icons';
import SectionTitle from '@/components/sections/SectionTitle';
import { useTranslations } from 'next-intl';

function DetailOriented() {
  const t = useTranslations('home-page.DetailOriented-section')
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
         title={t('sectionTitle.title')}
         caption={t('sectionTitle.caption')}
        description={
          <>
            <span>
            {t('sectionTitle.description')}
            </span>
            <br />
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'disabled-link mt-2 flex items-center text-red-400 hover:underline'
              )}
            >
              <HeartIcon className={clsx('h-5 w-5')} />
              {t('sectionTitle.Muy pronto podrás saber + de bunz')}
            </a>
          </>
        }
        altdesc=""
      />
    </header>
  );
}

export default DetailOriented;
