import clsx from 'clsx';
import { useSimpleTranslations } from '@/hooks/useSimpleTranslations';
import SectionTitle from '@/components/sections/SectionTitle';
import { HeartIcon, QuoteIcon, PinIcon, QuickAccessIcon, ShareIcon, CodeIcon } from '@/components/Icons';
import Image from 'next/image';
import { LazyMotion, domAnimation } from 'framer-motion';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import pbox from '@/assets/images/onlybox.png';
import styles from '@/styles/FloatingImage.module.css';
import introhd from '@/assets/images/introhd.png';

function PandorasContents(): JSX.Element {
  const t = useSimpleTranslations('pandoras-page');
  return (
    <>
      <div className={clsx('content-wrapper', 'py-8')}>
        <SectionTitle
          title={t('opener.title')}
          caption={t('opener.caption')}
          description={
            <>
              {t('opener.description')}
              {t('opener.call-to-action')}
            </>
          }
          altdesc=""
        />
      </div>
      <div className={clsx('w-full lg:w-auto')}>
            <div className={clsx(styles.imageContainer)}>
              <Image
                src={pbox}
                alt=""
                width={600}
                height={300}
                className={clsx(styles['floating-image'], 'redplanet')}
              />
            </div>
      </div>
      <SectionContent>
        <div className={clsx('flex flex-col lg:flex-row lg:gap-12')}>
          <div className={clsx('flex flex-col gap-3')}>
            <SectionButton
              title={t('tabs.nfts')}
              icon={<QuickAccessIcon className="my-2 h-16 w-16" />}
              description={t('tabs.nftsdescription')}
            />
            <SectionButton
              title={t('tabs.power')}
              icon={<CodeIcon className="my-2 h-16 w-16" />}
              description={t('tabs.powerdescription')}
            />
             <SectionButton
              title={t('tabs.invest')}
              icon={<PinIcon className="my-2 h-16 w-16" />}
              description={t('tabs.investdescription')}
            />
            <SectionButton
              title={t('tabs.anyone')}
              icon={<ShareIcon className="my-2 h-16 w-16" />}
              description={t('tabs.anyonedescription')}
            />
          </div>
        </div>
      </SectionContent>
      <div className={clsx('content-wrapper', 'py-8')}>
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
                  className={clsx('font-extrabold text-slate-600','dark:text-slate-300')}
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
                className={clsx('relative font-extrabold text-slate-600','dark:text-slate-300')}
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
      <SectionContent>
        <div className={clsx('-mt-6 flex h-60')}>
          <SectionButton
            title={t("porque")}
            icon={<HeartIcon className={clsx('my-2 h-16 w-16')} />}
            description=""
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
  );
}

function PandorasPage(): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <>
        <PandorasContents />
      </>
    </LazyMotion>
  );
}

export default PandorasPage;
