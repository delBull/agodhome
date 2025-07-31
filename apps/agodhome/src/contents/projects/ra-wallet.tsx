import clsx from 'clsx';
import { useSimpleTranslations } from '@/hooks/useSimpleTranslations';
import SectionTitle from '@/components/sections/SectionTitle';
import { HeartIcon } from '@/components/Icons';
import { QuoteIcon } from '@/components/Icons';
import Image from 'next/image';
import tierraLateral from '@/assets/images/connector2.png';
import styles from '@/styles/FloatingImage.module.css';
import { LazyMotion, m, domAnimation } from 'framer-motion';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import introhd from '@/assets/images/introhd.png';

function RaWalletContents() {
  const t = useSimpleTranslations('rawallet-page');

  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
            <blockquote
              className={clsx(
                'flex gap-2 pt-2 text-3xl text-slate-500',
                'md:text-4xl lg:pt-0 lg:text-5xl',
                'dark:text-slate-400'
              )}
            >
              <QuoteIcon
                className={clsx(
                  '-mt-1 h-10 text-slate-300',
                  'md:-mt-3 md:h-16 lg:h-24',
                  'dark:text-slate-800'
                )}
              />
              <span className={clsx('flex flex-col')}>
                <span className={clsx('leading-[1.15]')}>
                  <em>{t('quote.part1')}</em>{' '}
                </span>
                <span
                  className={clsx('flex items-center gap-2 leading-[1.15]', 'lg:gap-4')}
                >
                  <span
                    className={clsx(
                      'mt-1 h-0.5 w-8 rounded-full bg-slate-400',
                      'lg:h-1 lg:w-24',
                      'dark:bg-slate-600'
                    )}
                  />
                  <span>
                    <strong
                      className={clsx(
                        'font-extrabold text-slate-600',
                        'dark:text-slate-300'
                      )}
                    >
                      {t('quote.part2')}
                    </strong>{' '}
                    {t('quote.part3')}
                  </span>
                  <span
                    className={clsx(
                      'mt-1 h-0.5 w-6 rounded-full bg-slate-400',
                      'lg:h-1 lg:w-14',
                      'dark:bg-slate-600'
                    )}
                  />
                </span>
                <span className={clsx('leading-[1.15]')}>
                  {t('quote.part4')}{' '}
                  <strong
                    className={clsx(
                      'relative font-extrabold text-slate-600',
                      'dark:text-slate-300'
                    )}
                  >
                    <span
                      className={clsx(
                        'absolute -left-0.5 right-0 top-1 bottom-0 z-[-1] rounded-md bg-slate-100 px-1',
                        'lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0',
                        'dark:bg-slate-800'
                      )}
                    />
                    {t('quote.part5')}
                  </strong>
                </span>
              </span>
            </blockquote>
      </div>
    </div>
  );
}

function IndexContents(): JSX.Element {
  const t = useSimpleTranslations('rawallet-page.opener');

  return (
    <LazyMotion features={domAnimation}>
      <>
        <div className={clsx('lg:-mt-16 lg:mb-24 lg:block')}>
      <section className={clsx('mb-12', 'lg:mb-24')}>
      <header className={clsx('mb-8 mt-10')}>
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
    </header>
      </section>
        <RaWalletContents />
      </div>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <div className="styles.imageContainer">
          <Image
            src={tierraLateral}
            alt="tierra"
            className={clsx(styles['floating-image'], ['tierraLateral'])}
          />
        </div>
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
      <SectionTitle
        title={t('title-2')}
        caption={t('caption-2')}
        description={
          <>
            <span>{t('description-2')}</span>
            <br />
            <a
              href="#"
              rel="noopener noreferrer"
              className={clsx(
                'mt-2 flex items-center text-black dark:text-white pointer-events-none'
              )}
            >
              {t('description-3')}
              <HeartIcon className={clsx('h-5 w-5 ml-2')} />
            </a>
            <br />
            <a
              href="#"
              rel="noopener noreferrer"
              className={clsx(
                'mt-2 flex items-center text-red-400 pointer-events-none opacity-90'
              )}
            >
              {t('coming-soon-2')}
              <HeartIcon className={clsx('h-5 w-5 ml-2')} />
            </a>
          </>
        }
        altdesc=""
      />
      </section>

      <div className='flex flex-auto justify-center align-middle -mt-0 md:-mt-32'>
      <m.img
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="/assets/images/rabbittyscreens.png"
        alt="Rabbitty"
        width={846}
        height={1248}
      />
      </div>

<section className={clsx('mt-12 mb-12', 'lg:mb-24')}>
<SectionTitle
  title=""
  caption={t('caption-3')}
  description={
    <>
      <span>{t('description-4')}</span>
    </>
  }
  altdesc=""
/>
</section>

<section className={clsx('mt-12 mb-12', 'lg:mb-24')}>
<SectionTitle
  title={t('title-3')}
  caption={t('caption-4')}
  description={
    <>
      <span>{t('description-5')}</span>
    </>
  }
  altdesc=""
/>
</section>

<section className={clsx('mt-12 mb-12', 'lg:mb-24')}>
<SectionTitle
  title={t('title-4')}
  caption={t('caption-5')}
  description={
    <>
      <span>{t('description-6')}</span>
    </>
  }
  altdesc=""
/>
</section>

<div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
            <blockquote
              className={clsx(
                'flex gap-2 pt-2 text-3xl text-slate-500',
                'md:text-4xl lg:pt-0 lg:text-5xl',
                'dark:text-slate-400'
              )}
            >
              <QuoteIcon
                className={clsx(
                  '-mt-1 h-10 text-slate-300',
                  'md:-mt-3 md:h-16 lg:h-24',
                  'dark:text-slate-800'
                )}
              />
              <span className={clsx('flex flex-col')}>
                <span className={clsx('leading-[1.15]')}>
                  <em>{t('quote.part1')}</em>{' '}
                </span>
                <span
                  className={clsx('flex items-center gap-2 leading-[1.15]', 'lg:gap-4')}
                >
                  <span
                    className={clsx(
                      'mt-1 h-0.5 w-8 rounded-full bg-slate-400',
                      'lg:h-1 lg:w-24',
                      'dark:bg-slate-600'
                    )}
                  />
                  <span>
                    <strong
                      className={clsx(
                        'font-extrabold text-slate-600',
                        'dark:text-slate-300'
                      )}
                    >
                      {t('quote.part2')}
                    </strong>{' '}
                    {t('quote.part3')}
                  </span>
                  <span
                    className={clsx(
                      'mt-1 h-0.5 w-6 rounded-full bg-slate-400',
                      'lg:h-1 lg:w-14',
                      'dark:bg-slate-600'
                    )}
                  />
                </span>
                <span className={clsx('leading-[1.15]')}>
                  {t('quote.part4')}{' '}
                  <strong
                    className={clsx(
                      'relative font-extrabold text-slate-600',
                      'dark:text-slate-300'
                    )}
                  >
                    <span
                      className={clsx(
                        'absolute -left-0.5 right-0 top-1 bottom-0 z-[-1] rounded-md bg-slate-100 px-1',
                        'lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0',
                        'dark:bg-slate-800'
                      )}
                    />
                    {t('quote.part5')}
                  </strong>
                </span>
              </span>
            </blockquote>
      </div>
    </div>

    <SectionContent>
        <div className={clsx('-mt-6 flex h-60')}>
          <SectionButton
            title={t("porque")}
            icon={<HeartIcon className={clsx('my-2 h-16 w-16')} />}
            description={t('imagina')}
          />
        </div>
        <Image 
          src={introhd}
          alt="Intro HD"
          width={600}
          height={300}
          className={clsx(styles['floating-image'], ['introhd'])}
        />
      </SectionContent>

</>
</LazyMotion>
  );
}

export default IndexContents;
