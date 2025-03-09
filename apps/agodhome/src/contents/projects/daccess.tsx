import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import SectionTitle from '@/components/sections/SectionTitle';
import { HeartIcon, QuoteIcon, EyeIcon, CalendarIcon } from '@/components/Icons';
import Image from 'next/image';
import { LazyMotion, domAnimation } from 'framer-motion';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import mobile from '@/assets/images/daccessmobile_bg.png';
import styles from '@/styles/FloatingImage.module.css';
import introhd from '@/assets/images/introhd.png';
import { SparkleIcon } from 'lucide-react';

function DaccessContents(): JSX.Element {
  const t = useTranslations('daccess-page');
  return (
    <>
      <div className={clsx('content-wrapper', 'py-8')}>
        <SectionTitle
          title={t('what.title')}
          caption={t('what.caption')}
          description={
            <>
              {t('what.description')}
              <br />
              {t('what.blockchain')}
            </>
          }
          altdesc=""
        />
      </div>
      <div className={clsx('w-full lg:w-auto')}>
        <div className={clsx(styles.imageContainer)}>
          <Image
            src={mobile}
            alt="DACCESS Mobile Background"
            width={600}
            height={300}
            className={clsx(styles['floating-image'], 'daccess-mobile')}
          />
        </div>
      </div>
      <SectionContent>
        <div className={clsx('flex flex-col lg:flex-row lg:gap-12')}>
          <div className={clsx('flex flex-col gap-3')}>
            <SectionButton
              title={t('tabs.events')}
              icon={<EyeIcon className="my-2 h-16 w-16" />}
              description={t('tabs.eventsDescription')}
            />
            <SectionButton
              title={t('tabs.tickets')}
              icon={<CalendarIcon className="my-2 h-16 w-16" />}
              description={t('tabs.ticketsDescription')}
            />
            <SectionButton
              title={t('tabs.access')}
              icon={<SparkleIcon className="my-2 h-16 w-16" />}
              description={t('tabs.accessDescription')}
            />
            <SectionButton
              title={t('tabs.vips')}
              icon={<HeartIcon className="my-2 h-16 w-16" />}
              description={t('tabs.vipsDescription')}
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
            <span className={clsx('flex items-center gap-2 leading-[1.15]', 'lg:gap-4')}>
              <span className={clsx('mt-1 h-0.5 w-8 rounded-full bg-slate-400', 'lg:h-1 lg:w-24', 'dark:bg-slate-600')} />
              <span>
                <strong className={clsx('font-extrabold text-slate-600','dark:text-slate-300')}>
                  {t('quote.part2')}
                </strong>{' '}
                {t('quote.part3')}
              </span>
              <span className={clsx('mt-1 h-0.5 w-6 rounded-full bg-slate-400', 'lg:h-1 lg:w-14', 'dark:bg-slate-600')} />
            </span>
            <span className={clsx('leading-[1.15]')}>
              {t('quote.part4')}{' '}
              <strong className={clsx('relative font-extrabold text-slate-600','dark:text-slate-300')}>
                <span className={clsx('absolute -left-0.5 right-0 top-1 bottom-0 z-[-1] rounded-md bg-slate-100 px-1', 'lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0', 'dark:bg-slate-800')} />
                {t('quote.part5')}
              </strong>
            </span>
          </span>
        </blockquote>
      </div>
      <SectionContent>
        <div className={clsx('-mt-6 flex h-60')}>
          <SectionButton
            title={t("why.title")}
            icon={<HeartIcon className={clsx('my-2 h-16 w-16')} />}
            description={t("why.description")}
          />
        </div>
        <Image 
          src={introhd}
          alt="Intro HD"
          width={600}
          height={300}
          className={clsx(styles['floating-image'], 'introhd')}
        />
      </SectionContent>
    </>
  );
}

function DaccessPage(): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <>
        <DaccessContents />
      </>
    </LazyMotion>
  );
}

export default DaccessPage;
