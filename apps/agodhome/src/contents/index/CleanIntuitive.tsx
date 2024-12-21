import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import tierraLateral from '@/assets/images/tierralateral.png';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

import styles from '@/styles/FloatingImage.module.css';
import { useMessages, useTranslations } from 'next-intl';

type SectionContent = {
  [key: string]: {
    state: string;
    title: string;
    description: string;
  };
};
type SectionContentKeys = "1" | "2" | "3" | "4" | "5" | "6";

type CleanIntuitiveMessages = {
  CleanIntuitive: {
  sectionContent: Record<SectionContentKeys, { state: string; title: string; description: string }>;
  }
  sectionTitle: { title: string; caption: string; description: string };
};
// type CleanIntuitiveMessages = {
//   CleanIntuitive: {
//     sectionContent: {
//       [key: string]: {
//         state: string;
//         title: string;
//         description: string;
//       };
//     };
//   };
// };
// type Content = {
//   state: TodoItemState;
//   title: string;
//   description: string;
// };

// const content: Array<Content> = [
//   {
//     state: 'rabbitty',
//     title: 'Sostenibilidad',
//     description: 'La integración tecnológica no solo optimiza procesos, sino que también minimiza el uso de recursos, promoviendo un impacto ambiental positivo al reducir la huella de carbono.',
//   },
//   {
//     state: 'adex',
//     title: 'Seguridad',
//     description: 'Todas tus transacciones están respaldadas por estrategías que fueron pensadas desde su concepción para proteger tu integridad cibernética por tecnología de vanguardia.',
//   },
//   {
//     state: 'pandoras',
//     title: 'Accesibilidad',
//     description: 'Al diseñar plataformas intuitivas y amigables, incluso aquellos sin experiencia previa en finanzas pueden participar en la economía digital. Esto es crucial para incluir a más personas en la economía global.',
//   },
//   {
//     state: 'daccess',
//     title: 'Innovación',
//     description: 'AGOD combina elementos de las finanzas tradicionales (TradFi) y descentralizadas (DeFi) para ofrecer una gama de servicios que maximizan eficiencia y seguridad. Esto incluye tecnologías avanzadas como blockchain e inteligencia artificial, que optimizan la gestión de activos, mejoran la transparencia y reducen los costos operativos, creando un sistema financiero más robusto y moderno.',
//   },
//   {
//     state: 'raWallet',
//     title: 'Flexibilidad',
//     description: 'El ecosistema está diseñado para ser adaptable a diversos sectores de mercado, desde el estilo de vida hasta la economía colaborativa. Esto permite que las soluciones se personalicen según las necesidades específicas de cada nicho.',
//   },
//   {
//     state: 'tokenizacion',
//     title: 'Tokenización',
//     description: 'Al transformar activos físicos y tradicionales en formatos digitales, AGOD facilita el acceso, la transferencia y la gestión de estos activos. Esto no solo simplifica la inversión y la participación en la economía digital, sino que también abre nuevas oportunidades de mercado, permitiendo que más personas y negocios capitalicen en la digitalización.',
//   },
// ];

function CleanIntuitive() {
  const messages = useMessages() as CleanIntuitiveMessages
  const t = useTranslations('home-page.CleanIntuitive')
  const content = Object.keys(messages['home-page'].CleanIntuitive.sectionContent) as SectionContentKeys[];
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleToggle = (state: string) => {
    setExpanded(expanded === state ? null : state);
  };

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title={t('sectionTitle.title')}
          caption={t('sectionTitle.caption')}
          description={t('sectionTitle.description')}
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
            className={clsx('-mt-8 flex-2 md:flex-1 flex-col gap-3', 'lg:flex')}
          >
            {content.map((item) => (
              <div key={t(`sectionContent.${item}.state`)}>
                <SectionButton
                  title={t(`sectionContent.${item}.title`)}
                  icon={t(`sectionContent.${item}.state`)}
                  onClick={() => handleToggle(t(`sectionContent.${item}.state`))} // Maneja el clic
                  className={clsx({
                    'bg-gray-200': expanded === t(`sectionContent.${item}.state`), // Cambia el fondo si está expandido
                  })}
                />
                {expanded === t(`sectionContent.${item}.state`) && (
                  <div className="p-4">
                    <p>{t(`sectionContent.${item}.description`)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            ></div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
