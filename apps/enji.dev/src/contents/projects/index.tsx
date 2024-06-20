import clsx from 'clsx';
import { useState } from 'react';

import { CodeIcon, HeartIcon,InsightIcon,LightIcon, ShareIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'token' | 'limit' | 'incentivos' | 'escalabilidad' | 'rwa'>('rwa');

  return (
    <>
      <SectionTitle
        title="Ecosistema de Plataformas Interconectadas"
        caption="Aplicaciones Descentralizadas"
        description="Las aplicaciones descentralizadas (DApps) son el núcleo de nuestro ecosistema. Estas aplicaciones funcionan en la blockchain, eliminando intermediarios y proporcionando una transparencia y seguridad sin precedentes. En AGOD, nuestras DApps abarcan diversas industrias y usos, desde mercados NFT hasta plataformas de financiamiento y billeteras digitales."
        button={{
          title: 'learn more',
          href: '/',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
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
                    />
                  )}
                  {currentState === 'token' && (
                    <NpmWireframe
                      packageName="token-AGOD"
                      description="Los poseedores del token AGOD pueden participar en gobernanza, obtener recompensas por staking, y acceder a beneficios exclusivos dentro del ecosistema."
                      isWithTypeScript
                    />
                  )}
                   {currentState === 'limit' && (
                    <GitHubWireframe
                      author="Suministro Limitado"
                      license=""
                      repository="quema-recompra"
                      description="Además, utilizamos un sistema de recompra y quema de tokens, donde periódicamente recompramos tokens del mercado y los quemamos, reduciendo el suministro total y aumentando el valor de los tokens restantes."
                    />
                  )}
                  {currentState === 'incentivos' && (
                    <NpmWireframe
                      packageName="incentivos"
                      description="Esto incluye recompensas por participación, incentivos por staking y distribuciones basadas en el rendimiento de las plataformas. Nuestro objetivo es crear una comunidad próspera y comprometida que se beneficie directamente del éxito del ecosistema."
                      isWithTypeScript
                    />
                  )}
                  {currentState === 'escalabilidad' && (
                    <GitHubWireframe
                      author="la clave"
                      license=""
                      repository="escalabilidad"
                      description="Hemos implementado soluciones avanzadas de escalabilidad que permiten manejar un gran volumen de transacciones de manera rápida y eficiente, asegurando que nuestra plataforma pueda crecer y adaptarse a las necesidades de nuestros usuarios a nivel global."
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
