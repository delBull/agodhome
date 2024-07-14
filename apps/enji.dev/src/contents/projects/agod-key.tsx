import clsx from 'clsx';
import Image from 'next/image';

import { CodeIcon, InfoIcon, QuickAccessIcon } from '@/components/Icons';

import theImage from '@/assets/images/onlybox.png';
import FeaturedCard from '@/contents/index/FeaturedCard';

import AshareQuote from './AshareQuote';
import Dapps from './dapps';
import ObtenAshares from './ObtenAshares';
import Opener from './opener';

import styles from '@/styles/FloatingImage.module.css';

function AgodkeyContents() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-4', 'lg:gap-8')}>
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
          title="Tu Voz, Tu Poder"
          desc=""
          additionalDesc={
            <>
            <p><span style={{ fontSize: '30px'}}>Cada ASHARE está legalmente respaldada y registrada mediante contratos inteligentes, asegurando transparencia y confianza.</span></p>
          <span style={{ fontSize: '30px', fontWeight: 'bold', color: 'rgb(var(--tw-ta-accent-500)', lineHeight: '1.5' }}>
          Posee una parte del ecosistema.
              </span>{' '}
              <p><span style={{ fontSize: '30px'}}>Participa en decisiones cruciales y da forma al futuro del ecosistema</span></p>
              <br />
            <a
              href="/legalshares"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'mt-2 flex items-center text-red-400 hover:underline text-sm'
              )}
            >
              <InfoIcon className={clsx('h-5 w-5 mr-2')} />
              Quiero saber más sobre la legalidad de ASHARES
            </a>
            </>
          }
        />

        <div style={{ position: 'absolute', left: '0', marginTop: '100px'}}>
          <Image src={theImage} alt="AGOD Ecosystem" width={500} height={300} />
        </div>

      <div style={{ marginTop: '150px' }}></div>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full rgb(var(--tw-ta-accent-500) p-3.5',
                'dark:rgb(var(--tw-ta-accent-500)'
              )}
            >
              <QuickAccessIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="AGOD Key: Tu Llave Maestra al Futuro"
          desc="AGOD Key no es solo una herramienta de autenticación, es tu pase exclusivo a un ecosistema revolucionario."
          additionalDesc={
            <>
              <span style={{ fontSize: '30px', fontWeight: 'bold', color: 'rgb(var(--tw-ta-accent-500)'}}>
              Características Clave
              </span>{' '}
              <div style={{ marginTop: '10px' }}></div>
              <p> → Verificación de Identidad:
                 Un proceso de autenticación robusto y ultraseguro para que solo los verdaderos pioneros accedan a nuestras plataformas.
                  <br/>
                  <div style={{ marginTop: '10px' }}></div>
                  → Acceso Seguro:
                 Protección de última generación para tus activos digitales y participación en el ecosistema.
                 <br/>
                  <div style={{ marginTop: '10px' }}></div>
                  → No tiene costo:
                 Es tu pase de entrada y como tal no tiene costos adjuntos.
              </p>
            </>
          }
        />
         <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full rgb(var(--tw-ta-accent-500) p-3.5',
                'dark:rgb(var(--tw-ta-accent-500)'
              )}
            >
              <QuickAccessIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Lo Que Puedes Hacer con AGOD Key"
          desc=""
          additionalDesc={
            <>
              <div style={{ marginTop: '10px' }}></div>
              <p> → Acceso a ASHARES:
                    La única manera de comprar AGOD Shares es a través de tu AGOD Key.
                  <br/>
                  <div style={{ marginTop: '10px' }}></div>
                  → Resguardo de Activos:
                    Guarda tus tokens, NFTs y otros activos digitales de manera segura.
                  <br/>
                  <div style={{ marginTop: '10px' }}></div>
                  → Participación en Eventos Exclusivos:
                    Acceso a eventos únicos y promociones especiales dentro del ecosistema.
                  <br/>
                  <div style={{ marginTop: '10px' }}></div>
                  → Transacciones Seguras:
                    La máxima seguridad para que puedas operar con total tranquilidad.
                    <br/>
                  <div style={{ marginTop: '10px' }}></div>
                  → Voz y Voto:
                    Accede a las decisiones importantes del ecosistema, formando parte del crecimiento y dirección futura.
              </p>
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
      
        </div>
      </div>

      </div>
    </div>
  );
}

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
        className={clsx('-mt-12 mb-12', 'md:mb-24 md:mt-0')}
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
