import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { CodeIcon, InfoIcon, QuickAccessIcon } from '@/components/Icons';
import FeaturedCard from '@/contents/index/FeaturedCard';
import AshareQuote from './AshareQuote';
import Dapps from './dapps';
import ObtenAshares from './ObtenAshares';
import Opener from './opener';
import theImage from '@/assets/images/connector2.png';
import styles from '@/styles/FloatingImage.module.css';

function AgodkeyContents() {
  const t = useTranslations('agod-key-page');
  const actionsT = useTranslations('agod-key-page.features.actions');

  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-4', 'lg:gap-8')}>
        {/* Card 1: Tu Voz, Tu Poder */}
        <FeaturedCard
          icon={
            <div className={clsx('rounded-full rgb(var(--tw-ta-accent-500) p-3.5)')}>
              <CodeIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title={t('features.voice-power.title')}
          desc={t('features.voice-power.description')}
          additionalDesc={
            <>
              <p>
                <span style={{ fontSize: '30px' }}>{t('features.voice-power.additional')}</span>
              </p>
              <span
                style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: 'rgb(var(--tw-ta-accent-500))',
                  lineHeight: '1.5',
                }}
              >
                {t('features.voice-power.ownership')}
              </span>
              <p>
                <span style={{ fontSize: '30px' }}>{t('features.voice-power.participation')}</span>
              </p>
              <br />
              <Link
                href="/blog/ashares/"
                rel="noopener noreferrer"
                className={clsx('mt-2 flex items-center text-red-400 hover:underline text-sm')}
              >
                <InfoIcon className={clsx('h-5 w-5 mr-2')} />
                {t('features.voice-power.learn-more')}
              </Link>
            </>
          }
        />
        <div style={{ position: 'absolute', left: '0', marginTop: '260px' }}>
          <Image src={theImage} alt="AGOD Ecosystem" width={500} height={300} />
        </div>

        {/* Card 2: AGOD Key */}
        <div style={{ marginTop: '10px' }}></div>
        <div className={clsx('grid grid-cols-1 lg:grid-cols-2 gap-4', 'lg:flex-row lg:gap-8')}>
          <FeaturedCard
            icon={
              <div className={clsx('rounded-full rgb(var(--tw-ta-accent-500) p-3.5)')}>
                <QuickAccessIcon className={clsx('h-5 w-5 text-white')} />
              </div>
            }
            title={t('features.agod-key.title')}
            desc={t('features.agod-key.description')}
            additionalDesc={
              <>
                <span
                  style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: 'rgb(var(--tw-ta-accent-500))',
                  }}
                >
                  {t('features.agod-key.features.title')}
                </span>
                <ul style={{ marginTop: '10px' }}>
                  {
                    Array.isArray(t.raw('features.agod-key.features.list')) ? (
                      t.raw('features.agod-key.features.list').map((feature: string, index: number) => (
                        <li key={index}>→ {feature}</li>
                      ))
                    ) : (
                      <li>→ {t.raw('features.agod-key.features.list')}</li>
                    )
                  }
                </ul>
              </>
            }
          />
        {/* Card 3: Lo que puedes hacer */}
        <FeaturedCard
          icon={
            <div className={clsx('rounded-full rgb(var(--tw-ta-accent-500) p-3.5)')}>
              <QuickAccessIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title={actionsT('title')}
          desc={actionsT('description')}
          additionalDesc={
            <>
              <ul>
                {
                  Array.isArray(actionsT.raw('list')) ? (
                    actionsT.raw('list').map((action: string, index: number) => (
                      <li key={index}>→ {action}</li>
                    ))
                  ) : (
                    <li>→ {actionsT.raw('list')}</li>
                  )
                }
              </ul>
            </>
          }
        />
      </div>
     </div>
    </div>
  );
}

        <div
          className={clsx(
            'flex flex-col gap-4',
            'lg:gap-8',
            styles.imageContainer
          )}
        >
      
        </div>

function QuoteSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <AshareQuote />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <div className={clsx('lg:-mt-16 lg:mb-24 lg:block')}>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <Opener />
      </section>
        <AgodkeyContents />
      </div>
      <div
        className={clsx('-mt-12 mb-12', 'md:mb-40 md:mt-0')}
        style={{ marginTop: '200px' }}
      >
        <QuoteSection />
      </div>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <Dapps />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <ObtenAshares />
      </section>
    </>
  );
}

export default IndexContents;
