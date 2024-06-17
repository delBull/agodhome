import clsx from 'clsx';

import { CodeIcon, HeartIcon, SparklesIcon } from '@/components/Icons';

import CleanIntuitive from '@/contents/index/CleanIntuitive';
import DetailOriented from '@/contents/index/DetailOriented';
import FeaturedCard from '@/contents/index/FeaturedCard';
import Header from '@/contents/index/Header';
import PrettyOptimized from '@/contents/index/PrettyOptimized';
import Quote from '@/contents/index/Quote';

function FeaturedCardSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-purple-700 p-3.5',
                'dark:bg-purple-600'
              )}
            >
              <SparklesIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Descubre AGOD"
          desc="Las Finanzas Regenerativas (ReFi) son nuestro núcleo. No solo buscamos sostenibilidad; buscamos regenerar. Esto significa que nuestras actividades financieras están diseñadas para tener un impacto positivo en la sociedad y el planeta."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-pink-800 p-3.5',
                'dark:bg-pink-800'
              )}
            >
              <HeartIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="¿Nuestra visión?"
          desc="Transformar las finanzas en una fuerza que no solo genere riqueza, sino que también revitalice nuestro planeta. A través de nuestras iniciativas de Finanzas Regenerativas (ReFi), cada transacción con AGOD apoya proyectos que benefician a la sociedad y al planeta."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-sky-500 p-3.5',
                'dark:bg-sky-600'
              )}
            >
              <CodeIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Nuestro BIG Why"
          desc="Y no se trata solo de números. AGOD se compromete a proteger y mejorar toda forma de vida. Una parte de nuestras ganancias se destina a iniciativas que apoyan el bienestar animal, porque cuidar a las criaturas de nuestro planeta es fundamental para construir un mundo mejor."
        />
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
      <div className={clsx('-mt-12 mb-12', 'md:mt-0 md:mb-24')}>
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
