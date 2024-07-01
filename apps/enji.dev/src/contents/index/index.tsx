import clsx from 'clsx';
import Image from 'next/image';

import { CodeIcon, HeartIcon } from '@/components/Icons';

import agodworld from '@/assets/images/agodworld.png';
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
                'rounded-full rgb(var(--tw-ta-accent-500) p-3.5',
                'dark:rgb(var(--tw-ta-accent-500)'
              )}
            >
              <HeartIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Nuestro BIG Why"
          desc="Estamos a la vanguardia de la descentralización. 
          ¿Por qué? Porque creemos en el poder de todos para hacer realidad sus aspiraciones digitales. 
          Soñamos con un futuro donde las finanzas no solo sostienen, sino que regeneran la economía. 
          ¿Te unes a la evolución o te quedas atrás?"
          additionalDesc={
            <>
              <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'rgb(var(--tw-ta-accent-500)'}}>
                LAS FINANZAS TRADICIONALES ESTÁN OBSOLETAS.
              </span>{' '}
              <p>En el mundo actual, la tecnología ha mejorado muchos aspectos de nuestras vidas, pero aún 
              no ha encontrado una solución eficiente y accesible para los problemas financieros de la persona promedio. 
              La mayoría de los sistemas financieros son complicados, costosos y poco accesibles para todos. 
              Además, la economía global enfrenta problemas de sostenibilidad y falta de equidad.</p>
            </>
          }
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
                'rounded-full rgb(var(--tw-ta-accent-500) p-3.5',
                'dark:rgb(var(--tw-ta-accent-500)'
              )}
            >
              <CodeIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Descubre AGOD"
          desc="AGOD Ecosystem es un tipo de centro donde podemos hacer de todo usando la tecnología. 
          Imagina un juego donde cada vez que haces algo bueno, como ahorrar o invertir, te recompensan y 
          además ayudas a que el mundo sea un lugar mejor. Usamos blockchain, que es como el internet donde 
          lo usamos para muchas cosas en la red, pero en esta nueva red llamada blockchain, tienes control 
          completo sobre lo que haces, es más segura y sobre todo muy eficiente. Además, cada acción que realizas 
          ayuda a cuidar el planeta y a los animales."
          additionalDesc={
            <>
            <p><span style={{ fontSize: '35px'}}>Es como usar tu dinero</span></p>
          <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'rgb(var(--tw-ta-accent-500)', lineHeight: '1.5' }}>
           PARA HACER MAGIA
              </span>{' '}
              <p><span style={{ fontSize: '35px'}}>Positiva en el mundo.</span></p>
            </>
          }
        />
        <div style={{ position: 'absolute', left: '0', marginTop: '200px'}}>
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
        <PrettyOptimized />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <DetailOriented />
      </section>
    </>
  );
}

export default IndexContents;
