import clsx from 'clsx';
import Image from 'next/image';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import tierraLateral from '@/assets/images/tierralateral.png';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

import styles from '@/styles/FloatingImage.module.css';

type Content = {
  state: TodoItemState;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: 'dreamhub',
    title: 'Sostenibilidad',
    description: 'Cada transacción contribuye a iniciativas regenerativas.',
    },
  {
    state: 'pandoras',
    title: 'Seguridad',
    description: 'Transacciones protegidas por tecnología de vanguardia.',
    },
  {
    state: 'daccess',
    title: 'Accesibilidad',
    description: 'Servicios financieros disponibles para todos, sin importar su conocimiento previo.',
    },
  {
    state: 'adex',
    title: 'Innovación',
    description: 'Plataformas avanzadas que integra lo mejor de las finanzas tradicionales y descentralizadas.',
    },
  {
    state: 'rabbitty',
    title: 'Flexibilidad',
    description: 'Adaptabilidad a diferentes nichos de mercado, permitiendo soluciones específicas para cada uno',
    },
  {
    state: 'tokenizacion',
    title: 'Tokenización',
    description: 'Transformando activos inmobiliarios en oportunidades digitales',
    },
];

function CleanIntuitive() {

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="¿Por qué AGOD?"
          caption="Nuestra Visión al siguiente Nivel de Descentralización"
          description="Al utilizar blockchain en combinación con IA, llevamos a todos los usuarios del ecosistema al siguiente 
          nivel. Con transacciones rápidas, seguras y de bajo costo, AGOD no solo mejora la eficiencia colectiva, sino que 
          también promueve un impacto positivo en el medio ambiente y la sociedad. Nuestra plataforma es flexible y se adapta 
          a las necesidades de sectores como el estilo de vida, la economía colaborativa y más, donde la creatividad define 
          nuevos límites."
        />
      </header>
      <SectionContent>
      <div className="styles.imageContainer">
              <Image 
                src={tierraLateral} 
                alt="Tierra AGOD" 
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
            >
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
