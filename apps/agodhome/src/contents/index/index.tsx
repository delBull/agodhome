import clsx from 'clsx';
import { m, } from 'framer-motion';
import Image from 'next/image';

import { CodeIcon, EyeIcon, InfoIcon, QuoteIcon, SparklesIcon, WarningIcon } from '@/components/Icons';

import agodworld from '@/assets/images/agodworld.png';
import myImage from '@/assets/images/portal.png';
import CleanIntuitive from '@/contents/index/CleanIntuitive';
import DetailOriented from '@/contents/index/DetailOriented';
import Header from '@/contents/index/Header';
import PrettyOptimized from '@/contents/index/PrettyOptimized';
import Quote from '@/contents/index/Quote';

import BackgroundCard from './BackgroundCard';
import CustomCard from './CustomCard';
import LinkCard from './LinkCard';

import styles from '@/styles/FloatingImage.module.css';
import { useTranslations } from 'next-intl';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function FeaturedCardSection() {
const t = useTranslations('home-page.FeaturedCardSection')
  return (
    <div className={clsx('content-wrapper')}>
      <div style={{ marginTop: '100px' }}></div>
      <div><span className={clsx('text-slate-700', 'dark:text-slate-300')}>
        <m.span
          className={clsx(
            'block text-[2.5rem] font-[1000] leading-none',
            'md:text-7xl text-right'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 2.6 }}
        >
          {t('Nuestro')}{' '}
          <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>
            
          </strong>{' '}
        </m.span>
        <m.span
          className={clsx(
            'block text-[2.5rem] font-[1000] leading-none',
            'md:text-7xl text-right'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 2.6 }}
        >
          {' '}
          <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>
            BIG Why
          </strong>{' '}
        </m.span>
        </span>
        </div>
      <div className={clsx('flex flex-col gap-3', 'lg:flex-row lg:gap-3')}>
      <div className={clsx('flex flex-col gap-3', 'lg:gap-3', 'w-full lg:w-2/3')}>
        <CustomCard
          icon={
            <div
              className={clsx(
                'rgb(var(--tw-ta-accent-500) rounded-full p-3.5',
                'dark:rgb(var(--tw-ta-accent-500)'
              )}
            >
            </div>
          }
          title={t('card-1.title')}
          desc={t('card-1.description')}
          additionalDesc=""
        />
        <LinkCard
          icon={
            <div
              className={clsx(
                'rgb(var(--tw-ta-accent-500) rounded-full p-3.5',
                'dark:rgb(var(--tw-ta-accent-500)'
              )}
            >
            </div>
          }
          title=""
          desc={t('card-2.description')}
          additionalDesc=""
          buttonText={t('card-2.button-text')}
          infoIcon={<InfoIcon className={clsx('h-5 w-5 text-white')}/>}
        />
        </div>
        <CustomCard
          icon={
            <div
              className={clsx(
                'rgb(var(--tw-ta-accent-500) rounded-full p-3.5',
                'dark:rgb(var(--tw-ta-accent-500)'
              )}
            >
              <QuoteIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title={t('card-3.title')}
          desc={t('card-3.description')}
          additionalDesc=""
        />
        <div
          className={clsx(
            'flex flex-col gap-4',
            'lg:gap-8',
            styles.imageContainer
          )}
        >
        </div>
      </div>

      <div className={clsx('flex flex-col gap-4', 'lg:gap-8')}>
        <div style={{ marginTop: '20px' }}></div>
        
        
        <div className="relative max-w-screen-xl p-4 px-4 mx-auto sm:px-6 lg:px-8 py-26 lg:mt-20">
    <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="ml-auto lg:col-start-2 lg:max-w-2xl">

              <m.span
          className={clsx(
            'block text-[2.5rem] font-[1000] leading-none',
            'md:text-2xl'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
         {t('¿Qué es')} {' '}
          <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>
          
          </strong>{' '}
        </m.span>

        <m.span
          className={clsx(
            'block text-[2.5rem] font-[1000] leading-none',
            'md:text-2xl pb-2'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          {' '}
          <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>
          {t('AGOD?')}
          </strong>{' '}
        </m.span>
                    
                <p className={clsx('text-sm text-slate-600','dark:text-slate-300', 'font-bold')} 
                   style={{ fontSize: '22px', lineHeight: '1.2'}}>
                   {t('Más allá de las finanzas es un estilo de vida, podrás gestionar tus inversiones, ganar recompensas por tus compras y disfrutar de beneficios exclusivos')}
                </p>
                <p className={clsx('pt-4 text-sm text-slate-600', 'dark:text-slate-300')}
                   style={{ fontSize: '16px', lineHeight: '1.2'}}>
                {t('agodecosystem-hub')}
                </p>
                <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                    <li className="mt-6 lg:mt-0">
                        <div className="flex"> 
                          <CodeIcon className={clsx('h-5 w-5 text-white')} />  
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Blockchain
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                        <EyeIcon className={clsx('h-5 w-5 text-white')} />
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Inteligencia Artificial
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                        <WarningIcon className={clsx('h-5 w-5 text-white')} />
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Seguridad
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                        <SparklesIcon className={clsx('h-5 w-5 text-white')} />
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Recompensas
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

          <Image
            src={myImage}
            alt="AGOD Ecosystem"
            width={600}
            height={300}
            className={clsx(styles['floating-image'], ['quetza z-1 opacity-10 md:z-auto md:opacity-100'])}
          /> 
        
        <div className='pt-20'>
        <BackgroundCard
          icon={
            <div
              className={clsx(
                'rgb(var(--tw-ta-accent-500) rounded-full',
                'dark:rgb(var(--tw-ta-accent-500)'
              )}
            >
            </div>
          }
          title=""
          desc=""
          additionalDesc={
            <>
              <p>
                <span style={{ fontSize: '35px'}}>{t('Es como usar tu dinero')}</span>
              </p>
              <span
                style={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  color: 'rgb(var(--tw-ta-accent-500)',
                  lineHeight: '1.5',
                }}
              >
                {t('PARA HACER MAGIA')}
              </span>{' '}
              <p>
                <span style={{ fontSize: '35px' }}>{t('Positiva en el mundo')}</span>
              </p>
            </>
          }
        />
        </div> 
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <Quote />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <Image
        src={agodworld}
        alt="Intro HD"
        width={600}
        height={300}
        className={clsx(styles['floating-image'], ['agodworld'])}
      />
      <div className={clsx('lg:-mt-16 lg:mb-24 lg:block')}>
        <FeaturedCardSection />
      </div>
      <section className={clsx('mb-12', 'lg:mb-24', 'mt-20')}>
        <CleanIntuitive />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <PrettyOptimized />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <DetailOriented />
      </section>
      <section className={clsx('-mt-12 mb-12', 'md:mb-24 md:mt-0')}
               style={{ marginTop: '150px' }}
               >
        <QuoteSection />
      </section>
    </>
  );
}

export default IndexContents;
