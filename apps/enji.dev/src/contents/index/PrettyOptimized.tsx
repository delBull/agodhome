import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import AGODPass from '@/assets/images/post2.png';

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
    link: '/agod-pass',
  },
];

function PrettyOptimized() {
  return (
    <header >
      <SectionTitle
        title="Obtén AGOD Pass"
        caption="¡Toma Acción!"
        description="¿Listo para embarcarte en un viaje hacia un futuro digital sin precedentes?"
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
                            className={clsx('rounded-lg fade-up-on-hover')}
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
