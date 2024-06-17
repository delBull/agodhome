import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  shows: Array<TodoItemState>;
  title: string;
  description: string;
  imagePaths: { [key in TodoItemState]: string }; // Add image paths to content
};

const content: Array<Content> = [
  {
    state: 'dreamhub',
    shows: ['dreamhub'],
    title: 'Dreamhub',
    description: 'Donde la creatividad y el valor convergen en el mercado de NFTs.',
    imagePaths: { // Add all image paths
      dreamhub: '/assets/images/dreamhub.png',
      pandoras: '/assets/images/pandoras.png',
      daccess: '/assets/images/daccess.png',
      adex: '/assets/images/onlybox.png',
      rabbitty: '/assets/images/rabbitty.png',
      tokenizacion: '/assets/images/tokenizacion.png',
    },
  },
  {
    state: 'pandoras',
    shows: ['pandoras'],
    title: 'Pandora\'s',
    description: 'Empoderando ideas innovadoras con financiamiento respaldado por blockchain.',
    imagePaths: { // Add all image paths
      dreamhub: '/assets/images/dreamhub.png',
      pandoras: '/assets/images/pandoras.png',
      daccess: '/assets/images/daccess.png',
      adex: '/assets/images/onlybox.png',
      rabbitty: '/assets/images/rabbitty.png',
      tokenizacion: '/assets/images/tokenizacion.png',
    },
  },
  {
    state: 'daccess',
    shows: ['daccess'],
    title: 'DACCESS',
    description: 'Redefiniendo el acceso con soluciones seguras impulsadas por blockchain.',
    imagePaths: { // Add all image paths
      dreamhub: '/assets/images/dreamhub.png',
      pandoras: '/assets/images/pandoras.png',
      daccess: '/assets/images/daccess.png',
      adex: '/assets/images/onlybox.png',
      rabbitty: '/assets/images/rabbitty.png',
      tokenizacion: '/assets/images/tokenizacion.png',
    },
  },
  {
    state: 'adex',
    shows: ['adex'],
    title: 'ADEX',
    description: 'Conectando finanzas tradicionales con el futuro de DeFi.',
    imagePaths: { // Add all image paths
      dreamhub: '/assets/images/dreamhub.png',
      pandoras: '/assets/images/pandoras.png',
      daccess: '/assets/images/daccess.png',
      adex: '/assets/images/onlybox.png',
      rabbitty: '/assets/images/rabbitty.png',
      tokenizacion: '/assets/images/tokenizacion.png',
    },
  },
  {
    state: 'rabbitty',
    shows: ['rabbitty'],
    title: 'Rabbitty',
    description: 'Integrando el mundo financiero tradicional con la vanguardia de DeFi.',
    imagePaths: { // Add all image paths
      dreamhub: '/assets/images/dreamhub.png',
      pandoras: '/assets/images/pandoras.png',
      daccess: '/assets/images/daccess.png',
      adex: '/assets/images/onlybox.png',
      rabbitty: '/assets/images/rabbitty.png',
      tokenizacion: '/assets/images/tokenizacion.png',
    },
  },
  {
    state: 'tokenizacion',
    shows: ['tokenizacion'],
    title: 'Tokenización',
    description: 'Transformando activos inmobiliarios en oportunidades digitales',
    imagePaths: { // Add all image paths
      dreamhub: '/assets/images/dreamhub.png',
      pandoras: '/assets/images/pandoras.png',
      daccess: '/assets/images/daccess.png',
      adex: '/assets/images/onlybox.png',
      rabbitty: '/assets/images/rabbitty.png',
      tokenizacion: '/assets/images/tokenizacion.png',
    },
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>({
    state: 'dreamhub', // Seleccionar 'dreamhub' por defecto
    shows: ['dreamhub'],
    title: 'Dreamhub',
    description: 'Donde la creatividad y el valor convergen en el mercado de NFTs.',
    imagePaths: {
      dreamhub: '/assets/images/dreamhub.png',
      pandoras: '/assets/images/pandoras.png',
      daccess: '/assets/images/daccess.png',
      adex: '/assets/images/adex.png',
      rabbitty: '/assets/images/rabbitty.png',
      tokenizacion: '/assets/images/tokenizacion.png',
    },
  });

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Construido sobre inversiones seguras en bienes raíces"
          caption="Ecosistema Sostenible"
          description="Nuestro ecosistema impulsa una economía circular donde cada decisión financiera contribuye a regenerar nuestros recursos. Nuestras plataformas están diseñadas para innovar y transformar"
        />
      </header>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div
            className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
          >
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            >
              <div >
              <TodoItem
                  shows={currentState?.shows || ['pandoras', 'dreamhub', 'daccess', 'adex', 'rabbitty', 'tokenizacion']}
                  imagePaths={content.find((item) => item.state === currentState?.state)?.imagePaths || { dreamhub: '', pandoras: '', daccess: '', adex: '', rabbitty: '', tokenizacion: '' }} // Ensure a complete object
                />
              </div>
              <div className={clsx('hidden', 'sm:block lg:hidden')}>
              <TodoItem
                  shows={currentState?.shows || ['pandoras', 'dreamhub', 'daccess', 'adex', 'rabbitty', 'tokenizacion']}
                  imagePaths={content.find((item) => item.state === currentState?.state)?.imagePaths || { dreamhub: '', pandoras: '', daccess: '', adex: '', rabbitty: '', tokenizacion: '' }} // Ensure a complete object
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
