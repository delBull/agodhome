import clsx from 'clsx';
import Image from 'next/image';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import tierraLateral from '@/assets/images/redbay.png';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

import styles from '@/styles/FloatingImage.module.css';

type Content = {
  state: TodoItemState;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: 'rabbitty',
    title: 'Pandoras',
    description: 'Una Incubadora de Innovación. Plataforma principal que impulsa y desarrolla todas las demás iniciativas del AGOD Ecosystem + Desarrolladora de Proyectos que facilita la creación y lanzamiento de nuevas aplicaciones y servicios dentro del ecosistema.',
    },
  {
    state: 'pandoras',
    title: 'Ra Wallet',
    description: 'Almacena de forma segura tus criptomonedas y otros activos digitales. Con Interfaz amigable y accesible para todos los niveles de usuarios + Sistema de incentivos globalizado del ecosistema.',
    },
  {
    state: 'daccess',
    title: 'ADEX',
    description: 'Intercambio de criptomonedas con funciones avanzadas. Recomendaciones personalizadas basadas en AI y machine learning.',
    },
  {
    state: 'adex',
    title: 'DACCESS',
    description: 'Revolucinando el futuro de los accesos, tickets y pases NFT para todo tipo de eventos. Sistema de incentivos con bunz para creadores y asistentes.',
    },
  {
    state: 'rabbitty',
    title: 'dApps en camino',
    description: 'Más plataformas se integrarán al ecosistema de forma nativa, así como de terceros que conforman y sustentan la economía círcular del protocolo.',
    },
];

function Dapps() {

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="¿Por qué deberías adquirir AGOD Shares?"
          caption="Nuestra Visión"
          description="Construimos un ecosistema donde la seguridad, la autenticación y la participación son pilares 
          inquebrantables. Donde cada miembro tiene un papel crucial y puede influir en un futuro más transparente y 
          próspero para todos"

        altdesc=""
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

export default Dapps;
