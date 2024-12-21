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
import { useTranslations } from 'next-intl';

function ProjectsContents() {
  const t = useTranslations('intro-page.ProjectsContents')
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
        title={t('blockchain-application-center.title')}
        icon={<PinIcon className={clsx('my-2 h-16 w-16')} />}
        description={t('blockchain-application-center.description')}
        active={currentState === 'centro'}
      />
      <SectionButton
        title={t('user-friendly-interface.title')}
        icon={<CheckCircleIcon className={clsx('my-2 h-16 w-16')} />}
        description={t('user-friendly-interface.description')}
        active={currentState === 'interfaz'}
      />
      <SectionButton
        title={t('security-and-transparency.title')}
        icon={<QuickAccessIcon className={clsx('my-2 h-16 w-16')} />}
        description={t('security-and-transparency.description')}
        active={currentState === 'seguridad'}
      />
      <SectionButton
        title={t('continuous-innovation.title')}
        icon={<InfoIcon className={clsx('my-2 h-16 w-16')} />}
        description={t('continuous-innovation.description')}
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
      title={t('interconnected-platform-ecosystem.title')}
      caption={t('interconnected-platform-ecosystem.caption')}
      description={t('interconnected-platform-ecosystem.description')}
      altdesc={''}
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
        <div
          className={clsx(
            'flex',
            'z-10',
            'mb-3',
            'lg:w-[100px]',
            'lg:gap-3', // Gap en dispositivos grandes
            'text-sm' // Tamaño de texto para dispositivos móviles
          )}
        >
          <SectionButton
            title={t("Sustentabilidad")}
            icon=""
            description=""
            active={currentState === 'complement'}
            onClick={() => setCurrentState('complement')}
          />
          <SectionButton
            title={t("Economía")}
            icon=""
            description=""
            active={currentState === 'bunz'}
            onClick={() => setCurrentState('bunz')}
          />
          <SectionButton
            title={t("Interconexión")}
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
              title: t("Sustentabilidad"),
              isActive: currentState === 'complement',
            },
            {
              icon: <LightIcon className="h-4 w-4" />,
              title: t("economía-círcular"),
              isActive: currentState === 'bunz',
            },
            {
              icon: <CodeIcon className="h-4 w-4" />,
              title: t("Interconexión"),
              isActive: currentState === 'interconexión',
            },
            {
              icon: <ShareIcon className="h-4 w-4" />,
              title: t("plataformas"),
              isActive: currentState === 'incentivos',
            },
            {
              icon: <InsightIcon className="h-4 w-4" />,
              title: t("escalabilidad"),
              isActive: currentState === 'escalabilidad',
            },
          ]}
        >
          {currentState === 'complement' && (
            <GitHubWireframe
              author={t("Sustentabilidad")}
              license=""
              repository={t("Diversificación de Servicios")}
              description={t("sustainability-description")}
              additionalDesc={t("rabbitty-role")}
            />
          )}
          {currentState === 'bunz' && (
            <GitHubWireframe
              author="bunz"
              license=""
              repository={t("Economía Circular")}
              description={t("bunz-rewards")}
              additionalDesc={t("bunz-economy-growth")}
            />
          )}
          {currentState === 'interconexión' && (
            <GitHubWireframe
              author="Rabbitty"
              license=""
              repository={t("Interconexión")}
              description={t("rabbitty-integration")}
              additionalDesc={t("interconnection-synergy")}
            />
          )}
        </AppWindow>
      </div>

      <SectionContent>
        <div className={clsx('-mt-6 flex h-60')}>
          <SectionButton
            title={t("agod-ecosystem-destination")}
            icon={<HeartIcon className={clsx('my-2 h-16 w-16')} />}
            description={t('innovation-center')}
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
