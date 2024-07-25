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
    description: 'La integración tecnológica no solo optimiza procesos, sino que también minimiza el uso de recursos, promoviendo un impacto ambiental positivo al reducir la huella de carbono.',
    },
  {
    state: 'pandoras',
    title: 'Seguridad',
    description: 'Todas tus transacciones están respaldadas por estrategías que fueron pensadas desde su concepción para proteger tu integridad cibernética por tecnología de vanguardia.',
    },
  {
    state: 'daccess',
    title: 'Accesibilidad',
    description: ' Al diseñar plataformas intuitivas y amigables, incluso aquellos sin experiencia previa en finanzas pueden participar en la economía digital. Esto es crucial para incluir a más personas en la economía global.',
    },
  {
    state: 'adex',
    title: 'Innovación',
    description: 'AGOD combina elementos de las finanzas tradicionales (TradFi) y descentralizadas (DeFi) para ofrecer una gama de servicios que maximizan eficiencia y seguridad. Esto incluye tecnologías avanzadas como blockchain e inteligencia artificial, que optimizan la gestión de activos, mejoran la transparencia y reducen los costos operativos, creando un sistema financiero más robusto y moderno.',
    },
  {
    state: 'rabbitty',
    title: 'Flexibilidad',
    description: 'El ecosistema está diseñado para ser adaptable a diversos sectores de mercado, desde el estilo de vida hasta la economía colaborativa. Esto permite que las soluciones se personalicen según las necesidades específicas de cada nicho.',
    },
  {
    state: 'tokenizacion',
    title: 'Tokenización',
    description: 'Al transformar activos físicos y tradicionales en formatos digitales, AGOD facilita el acceso, la transferencia y la gestión de estos activos. Esto no solo simplifica la inversión y la participación en la economía digital, sino que también abre nuevas oportunidades de mercado, permitiendo que más personas y negocios capitalicen en la digitalización.',
    },
];

function CleanIntuitive() {

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="¿Por qué AGOD?"
          caption="Nuestra Visión al Siguiente Nivel de Descentralización"
          description="Con AGOD, blockchain e inteligencia artificial se combinan para llevarte a una nueva era de 
          eficiencia y conveniencia. Con respaldo en sectores diversos, desde el estilo de vida hasta la economía colaborativa, 
          fomentando la innovación y la creatividad en cada interacción."
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

export default CleanIntuitive;
