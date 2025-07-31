import clsx from 'clsx';
import Image from 'next/image';
import { useSimpleTranslations } from '@/hooks/useSimpleTranslations';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import tierraLateral from '@/assets/images/redbay.png';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

import styles from '@/styles/FloatingImage.module.css';

type Content = {
  state: TodoItemState;
  title: string;
  description: string;
};

function Dapps(): JSX.Element {
  const t = useSimpleTranslations('agod-key-page');

  const content: Array<Content> = [
    {
      state: 'pandoras',
      title: t('dapps.pandoras.title'),
      description: t('dapps.pandoras.description'),
    },
    {
      state: 'tokenizacion',
      title: t('dapps.tokenizacion.title'),
      description: t('dapps.tokenizacion.description'),
    },
    {
      state: 'raWallet',
      title: t('dapps.ra-wallet.title'),
      description: t('dapps.ra-wallet.description'),
    },
    {
      state: 'adex',
      title: t('dapps.adex.title'),
      description: t('dapps.adex.description'),
    },
    {
      state: 'daccess',
      title: t('dapps.daccess.title'),
      description: t('dapps.daccess.description'),
    },
    {
      state: 'future-dapps',
      title: t('dapps.future-dapps.title'),
      description: t('dapps.future-dapps.description'),
    },
  ];

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title={t('dapps.title')}
          caption={t('dapps.caption')}
          description={t('dapps.description')}
          altdesc=""
        />
      </header>
      <SectionContent>
        <div className="styles.imageContainer">
          <Image
            src={tierraLateral}
            alt={t('dapps.image-alt')}
            className={clsx(styles['floating-image'], ['tierraLateral'])}
          />
        </div>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div
            className={clsx('-mt-8 flex-1 flex-col gap-3', 'lg:flex')}
          >
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            />
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default Dapps;
