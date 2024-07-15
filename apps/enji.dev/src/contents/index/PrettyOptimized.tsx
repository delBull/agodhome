import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import AGODPass from '@/assets/images/AGODKey.jpg';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
};

const content: Array<Content> = [
  {
    state: 'dreamhub',
    title: 'AGOD Pass',
    description: 'Incluye beneficios exclusivos, bunz, AGOD token y más',
    image: AGODPass,
    link: '/agodkey',
  },
];

function PrettyOptimized() {
  return (
    <header >
      <SectionTitle
        title="¿Quieres ser parte?"
        caption="¡Obtén AGOD Key!"
        description="AGOD Key es tu puerta de entrada a un ecosistema donde la tecnología blockchain y el estilo de vida se unen para crear un futuro sostenible y conectado. Con beneficios exclusivos, recompensas continuas, y un enfoque en la adopción y sostenibilidad, estamos construyendo la próxima generación de soluciones digitales. Dale click aquí abajito 👇 "
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('-mt-8 flex-1 flex-col gap-3', 'lg:flex')}>
            {content.map((item) => (
              <div key={item.state}>
                      <Link href={item.link}> 
                          <Image 
                            src={item.image}
                            alt={item.title}
                            layout="cover"
                            objectFit="cover"
                            className={clsx('rounded-lg fade-up-on-hover w-1/2 opacity-70')}
                          />                     
                      </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionContent>
    </header>
  );
}

export default PrettyOptimized;
