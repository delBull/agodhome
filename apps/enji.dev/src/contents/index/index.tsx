import clsx from 'clsx';
import Image from 'next/image';

import { CodeIcon, HeartIcon } from '@/components/Icons';

import theImage from '@/assets/images/onlybox.png';
import myImage from '@/assets/images/portal.png';
import CleanIntuitive from '@/contents/index/CleanIntuitive';
import DetailOriented from '@/contents/index/DetailOriented';
import FeaturedCard from '@/contents/index/FeaturedCard';
import Header from '@/contents/index/Header';
import PrettyOptimized from '@/contents/index/PrettyOptimized';
import Quote from '@/contents/index/Quote';

import styles from '@/styles/FloatingImage.module.css';

function FeaturedCardSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div style={{ marginTop: '100px' }}></div>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-sky-500 p-3.5',
                'dark:bg-sky-600'
              )}
            >
              <HeartIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Nuestro BIG Why"
          desc="Estamos a la vanguardia de la descentralización. ¿Por qué? Porque creemos en el poder de todos para hacer realidad sus aspiraciones digitales. Soñamos con un futuro donde las finanzas no solo sostienen, sino que regeneran la economía. ¿Te unes a la evolución o te quedas atrás?"
          additionalDesc="Las finanzas tradicionales están rotas. Dependemos de intermediarios costosos, las transiciones son lentas y a menudo inseguras. Además, el sistema financiero actual contribuye a la desigualdad y no tiene en cuenta el impacto ambiental. A esto se suma la falta de transparencia, accesibilidad y adaptabilidad a las necesidades de diferentes nichos de mercado como estilo de vida, economía pay it forward y más."
        />

        <div
          className={clsx(
            'flex flex-col gap-4',
            'lg:gap-8',
            styles.imageContainer
          )}
        >
          <Image
            src={myImage}
            alt="AGOD Ecosystem"
            width={600}
            height={300}
            className={clsx(styles['floating-image'])}
          />
        </div>
      </div>

      <div className={clsx('flex flex-col gap-4', 'lg:gap-8')}>
        <div style={{ marginTop: '20px' }}></div>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-purple-700 p-3.5',
                'dark:bg-purple-600'
              )}
            >
              <CodeIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Descubre AGOD"
          desc="AGOD Ecosystem utiliza la tecnología blockchain para ofrecer una alternativa descentralizada y sostenible que resuelve problemáticas en diversos nichos de mercado. Con transacciones rápidas, seguras y de bajo costo, AGOD no solo mejora la eficiencia financiera, sino que también promueve un impacto positivo en el medio ambiente y la sociedad. Nuestra plataforma es flexible y se adapta a las necesidades de sectores como el estilo de vida, iniciativas de economía colaborativa, y cualquier otra área donde la creatividad es el único límite."
          additionalDesc=""
        />
        <div
          style={{ position: 'absolute', justifyContent: 'center', left: '0' }}
        >
          <Image src={theImage} alt="AGOD Ecosystem" width={500} height={300} />
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
      <div className={clsx('hidden', 'lg:-mt-16 lg:mb-24 lg:block')}>
        <FeaturedCardSection />
      </div>
      <div
        className={clsx('-mt-12 mb-12', 'md:mb-24 md:mt-0')}
        style={{ marginTop: '200px' }}
      >
        <QuoteSection />
      </div>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <CleanIntuitive />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <DetailOriented />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <PrettyOptimized />
      </section>
    </>
  );
}

export default IndexContents;
