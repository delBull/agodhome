import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import {
  CheckCircleIcon,
  CodeIcon,
  HeartIcon,
  InfoIcon,
  InsightIcon,
  LightIcon,
  PinIcon,
  QuickAccessIcon,
  ShareIcon,
} from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';

import introhd from '@/assets/images/introhd.png';
import redplanet from '@/assets/images/redplanet.png';

import styles from '@/styles/FloatingImage.module.css';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<
    | 'centro'
    | 'interfaz'
    | 'seguridad'
    | 'innovación'
    | 'token'
    | 'limit'
    | 'incentivos'
    | 'escalabilidad'
    | 'rwa'
    | 'complement'
    | 'bunz'
    | 'interconexión'
  >('complement');

  return (
    <>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('-mt-12 gap-3 lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Centro de aplicaciones blockchain"
                icon={<PinIcon className={clsx('my-2 h-16 w-16')} />}
                description="AGOD alberga una variedad de aplicaciones apalancadas por blockchain, que cubren 
                aspectos como finanzas, redes sociales, juegos y más."
                active={currentState === 'centro'}
              />
              <SectionButton
                title="Interfaz fácil de usar"
                icon={<CheckCircleIcon className={clsx('my-2 h-16 w-16')} />}
                description="AGOD está diseñado para ser accesible y fácil de usar para personas de todos los 
                niveles de experiencia técnica."
                active={currentState === 'interfaz'}
              />
              <SectionButton
                title="Seguridad y transparencia"
                icon={<QuickAccessIcon className={clsx('my-2 h-16 w-16')} />}
                description="La tecnología blockchain subyacente garantiza la seguridad y transparencia de todas las 
                transacciones y actividades."
                active={currentState === 'seguridad'}
              />
              <SectionButton
                title="Innovación continua"
                icon={<InfoIcon className={clsx('my-2 h-16 w-16')} />}
                description="AGOD se compromete a impulsar la innovación en el espacio blockchain, desarrollando 
                constantemente nuevas soluciones y funcionalidades."
                active={currentState === 'innovación'}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className="styles.imageContainer">
              <Image
                src={redplanet}
                alt="Red Planet"
                width={600}
                height={300}
                className={clsx(styles['floating-image'], ['redplanet'])}
              />
            </div>
            <div className={clsx('-mt-[41px]')}>
              <div
                className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}
              ></div>
            </div>
          </div>
        </div>
      </SectionContent>
      <SectionTitle
        title="Ecosistema de Plataformas Interconectadas"
        caption="AGOD Ecosystem + Rabbitty = Complemento Perfecto"
        description="Es un sistema de recompensas que fomenta la participación y la interacción dentro del 
        ecosistema “Verge”. Los usuarios pueden ganar bunz (moneda de cambio del ecosistema) por completar 
        tareas, realizar transacciones y contribuir al crecimiento de la comunidad."
        button={{
          title: 'cuéntame más',
          href: '/',
        }}
      />
      {/* Firts Winwdow */}
      <div
        className={clsx(
          'w-full',
          'lg:h-[400px] lg:w-[auto]',
          'lg:ml-20 lg:mr-20',
          'md:ml-18 md:mr-18',
          'mb-40 mt-20'
        )}
      >
        <div className={clsx(
  'flex',
  'z-10',
  'mb-3',
  'lg:w-[100px]',
  'lg:gap-3', // Gap en dispositivos grandes
  'text-sm'     // Tamaño de texto para dispositivos móviles
)}>
          <SectionButton
            title="Sustentabilidad"
            icon=""
            description=""
            active={currentState === 'complement'}
            onClick={() => setCurrentState('complement')}
          />
          <SectionButton
            title="Economía"
            icon=""
            description=""
            active={currentState === 'bunz'}
            onClick={() => setCurrentState('bunz')}
          />
          <SectionButton
            title="Interconexión"
            icon=""
            description=""
            active={currentState === 'interconexión'}
            onClick={() => setCurrentState('interconexión')}
          />
        </div>

        <AppWindow
          type="browser"
          browserTabs={[
            {
              icon: <HeartIcon className="h-4 w-4" />,
              title: 'Sustentabilidad',
              isActive: currentState === 'complement',
            },
            {
              icon: <LightIcon className="h-4 w-4" />,
              title: 'economía-círcular',
              isActive: currentState === 'bunz',
            },
            {
              icon: <CodeIcon className="h-4 w-4" />,
              title: 'interconexión',
              isActive: currentState === 'interconexión',
            },
            {
              icon: <ShareIcon className="h-4 w-4" />,
              title: 'plataformas',
              isActive: currentState === 'incentivos',
            },
            {
              icon: <InsightIcon className="h-4 w-4" />,
              title: 'escalabilidad',
              isActive: currentState === 'escalabilidad',
            },
          ]}
        >
          {currentState === 'complement' && (
            <GitHubWireframe
              author="Sustentabilidad"
              license=""
              repository="Diversificación de Servicios"
              description="La sustentabilidad de AGOD está estrechamente vinculada al concepto de Rabbitty, 
                      ya que ambas iniciativas están diseñadas para funcionar de manera sinérgica y complementarse 
                      mutuamente. AGOD Ecosystem es un enfoque integral que abarca una serie de proyectos y servicios 
                      relacionados con la tecnología blockchain y las criptomonedas. Rabbitty, como parte de este 
                      ecosistema, contribuye significativamente a su sostenibilidad de las siguientes maneras"
              additionalDesc="Rabbitty actúa como un componente central al proporcionar una plataforma de 
                      billetera todo en uno, simplificando la gestión de activos digitales y transacciones. 
                      Esto diversifica la oferta de servicios dentro del ecosistema, lo que aumenta su atractivo y 
                      utilidad para un público más amplio"
            />
          )}
          {currentState === 'bunz' && (
            <GitHubWireframe
              author="bunz"
              license=""
              repository="Economía Circular"
              description="La moneda de recompensas bunz de Rabbitty otorga sustentabilidad al ecosistema. 
              Los negocios pueden crear bunz para recompensar a los clientes por consumir sus productos o servicios. 
              A su vez, los negocios pueden crear bunz para ofertas dentro del ecosistema blockchain. Además, los bunz 
              se pueden utilizar como moneda de cambio para cualquier tipo de incentivo futuro y/o actual."
              additionalDesc="El ecosistema bunz crece a través de las tarifas de transacción, que se convierten 
              directamente en inventario. Esto hace que sea más económico para las empresas operar dentro del ecosistema 
              y genera un inventario en constante crecimiento que puede ser utilizado, reinvertido o colectado de diversas 
              maneras."
            />
          )}
          {currentState === 'interconexión' && (
            <GitHubWireframe
              author="Rabbitty"
              license=""
              repository="Interconexión"
              description="Rabbitty puede integrarse con otros proyectos/plataformas de AGOD, como intercambios 
              descentralizados, servicios de tokenización y aplicaciones financieras basadas en blockchain."
              additionalDesc="Esta interconexión facilita la sinergia entre los diferentes componentes del ecosistema, 
              lo que mejora la experiencia del usuario y fortalece la sostenibilidad de todos los proyectos involucrados."
            />
          )}
        </AppWindow>
      </div>

      <SectionContent>
          <div className={clsx('flex -mt-6 h-60')}>
              <SectionButton
                title="AGOD Ecosystem es un destino integral para todos los aspectos de la tecnología blockchain."
                icon={<HeartIcon className={clsx('my-2 h-16 w-16')} />}
                description=" Como centro de innovación, AGOD proporciona a los usuarios las herramientas y los 
                recursos necesarios para aprovechar al máximo el potencial de la tecnología blockchain y crear un 
                futuro digital más empoderado y gratificante."
              />
          </div>
          <Image
                src={introhd}
                alt="Intro HD"
                width={600}
                height={300}
                className={clsx(styles['floating-image'], ['introhd'])}
              />
       </SectionContent>

      {/*
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Oportnidades de Inversión RWA"
                icon={<LightIcon className={clsx('my-2 h-16 w-16')} />}
                description="Las Oportunidades de Inversión RWA (Real-World Assets) se refieren a la tokenización de activos del mundo real, como bienes raíces, obras de arte y otros bienes tangibles."
                active={currentState === 'rwa'}
                onClick={() => setCurrentState('rwa')}
              />
              <SectionButton
                title="Impulsado por el Token AGOD"
                icon={<HeartIcon className={clsx('my-2 h-16 w-16')} />}
                description="El token AGOD es la columna vertebral de nuestro ecosistema. Este token impulsa todas las transacciones y actividades dentro de la plataforma, proporcionando una economía interna robusta."
                active={currentState === 'token'}
                onClick={() => setCurrentState('token')}
              />
              <SectionButton
                title="Token Limitado y Sistema de Recompra"
                icon={<CodeIcon className={clsx('my-2 h-16 w-16')} />}
                description="Para garantizar el valor y la sostenibilidad del token AGOD, hemos implementado un suministro limitado."
                active={currentState === 'limit'}
                onClick={() => setCurrentState('limit')}
              />
              <SectionButton
                title="Mecanismo de Recompensas"
                icon={<ShareIcon className={clsx('my-2 h-16 w-16')} />}
                description="A medida que el ecosistema AGOD crece, los beneficios se comparten con nuestra comunidad de usuarios y poseedores de tokens."
                active={currentState === 'incentivos'}
                onClick={() => setCurrentState('incentivos')}
              />
              <SectionButton
                title="Escalabilidad"
                icon={<InsightIcon className={clsx('my-2 h-16 w-16')} />}
                description="La escalabilidad es clave para el éxito a largo plazo de cualquier ecosistema blockchain."
                active={currentState === 'escalabilidad'}
                onClick={() => setCurrentState('escalabilidad')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <LightIcon className="h-4 w-4" />,
                      title: 'RWA/real-world-assets',
                      isActive: currentState === 'rwa',
                    },
                    {
                      icon: <HeartIcon className="h-4 w-4" />,
                      title: 'token-AGOD - impulso',
                      isActive: currentState === 'token',
                    },
                    {
                      icon: <CodeIcon className="h-4 w-4" />,
                      title: 'quema-recompra',
                      isActive: currentState === 'limit',
                    },
                    {
                      icon: <ShareIcon className="h-4 w-4" />,
                      title: 'incentivos',
                      isActive: currentState === 'incentivos',
                    },
                    {
                      icon: <InsightIcon className="h-4 w-4" />,
                      title: 'escalabilidad',
                      isActive: currentState === 'escalabilidad',
                    },
                  ]}
                >
                  {currentState === 'rwa' && (
                    <GitHubWireframe
                      author="RWA"
                      license=""
                      repository="real-world-assets"
                      description="AGOD facilita la inversión en estos activos, proporcionando a los inversores acceso a mercados tradicionalmente exclusivos y aumentando la liquidez y transparencia de dichos activos."
                      additionalDesc=""
                    />
                  )}
                  {currentState === 'token' && (
                    <NpmWireframe
                      packageName="token-AGOD"
                      description="Los poseedores del token AGOD pueden participar en gobernanza, obtener recompensas por staking, y acceder a beneficios exclusivos dentro del ecosistema."
                      isWithTypeScript
                      additionalDesc=""
                    />
                  )}
                  {currentState === 'limit' && (
                    <GitHubWireframe
                      author="Suministro Limitado"
                      license=""
                      repository="quema-recompra"
                      description="Además, utilizamos un sistema de recompra y quema de tokens, donde periódicamente recompramos tokens del mercado y los quemamos, reduciendo el suministro total y aumentando el valor de los tokens restantes."
                      additionalDesc=""
                    />
                  )}
                  {currentState === 'incentivos' && (
                    <NpmWireframe
                      packageName="incentivos"
                      description="Esto incluye recompensas por participación, incentivos por staking y distribuciones basadas en el rendimiento de las plataformas. Nuestro objetivo es crear una comunidad próspera y comprometida que se beneficie directamente del éxito del ecosistema."
                      isWithTypeScript
                      additionalDesc=""
                    />
                  )}
                  {currentState === 'escalabilidad' && (
                    <GitHubWireframe
                      author="la clave"
                      license=""
                      repository="escalabilidad"
                      description="Hemos implementado soluciones avanzadas de escalabilidad que permiten manejar un gran volumen de transacciones de manera rápida y eficiente, asegurando que nuestra plataforma pueda crecer y adaptarse a las necesidades de nuestros usuarios a nivel global."
                      additionalDesc=""
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
      */}
    </>
  );
}

export default ProjectsContents;
