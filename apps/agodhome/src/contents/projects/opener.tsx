import clsx from 'clsx';
import { useDisclosure } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import SectionTitle from '@/components/sections/SectionTitle';
import { HeartIcon } from '@/components/Icons';
import AsharesModal from '@/components/AsharesModal';

function Opener(): JSX.Element {
  const { isOpen, onOpenChange } = useDisclosure();
  const t = useTranslations('agod-key-page.opener');

  return (
    <header className={clsx('mb-8 mt-10')}>
      <SectionTitle
        title={t('title')}
        caption="AGOD Shares"
        description={
          <>
            <span>{t('description')}</span>
            <br />
            <a
              href="#"
              rel="noopener noreferrer"
              className={clsx(
                'mt-2 flex items-center text-gray-400 pointer-events-none opacity-50'
              )}
            >
              {t('coming-soon')}
              <HeartIcon className={clsx('h-5 w-5 ml-2')} />
            </a>
          </>
        }
        altdesc=""
      />
      <AsharesModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </header>
  );
}

export default Opener;
