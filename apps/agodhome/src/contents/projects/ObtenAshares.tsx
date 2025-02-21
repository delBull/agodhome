import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import SectionTitle from '@/components/sections/SectionTitle';
import { HeartIcon } from '@/components/Icons';
import { useDisclosure } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const AsharesModal = dynamic(() => import('@/components/AsharesModal'), { ssr: false });

function ObtenAshares() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef(null);
  const t = useTranslations('agod-key-page.get-ashares');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    onOpen();
  };

  if (!isClient) {
    return null;
  }

  return (
    <header ref={sectionRef}>
      <SectionTitle
        title={t('title')}
        caption={t('caption')}
        description={
          <>
            <span>{t('description')}</span>
            <br />
            <a
              href="#"
              rel="noopener noreferrer"
              className={clsx('mt-2 flex items-center text-gray-400 pointer-events-none opacity-50')}
              onClick={handleClick}
            >
              {t('link')}
              <HeartIcon className={clsx('h-5 w-5 ml-2')} />
            </a>
            <br />
            <div style={{ marginTop: '30px' }}></div>
            <span style={{ fontSize: '30px', fontWeight: 'bold'}}>
              {t('additional')}
            </span>
            <Link
              href="/blog/agodkey"
              rel="noopener noreferrer"
              className={clsx('flex items-center text-red-400 hover:underline')}
            >
              {t('learn-more')}
            </Link>
          </>
        }
        altdesc=""
      />
      <AsharesModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </header>
  );
}

export default ObtenAshares;
