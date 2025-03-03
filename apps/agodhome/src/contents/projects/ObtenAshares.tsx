import { useState, useEffect, useRef } from 'react';
//import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import SectionTitle from '@/components/sections/SectionTitle';
import { HeartIcon } from '@/components/Icons';
import { useDisclosure } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import AsharesModal to avoid SSR issues
const AsharesModal = dynamic(() => import('@/components/AsharesModal'), { ssr: false });

function ObtenAshares(): JSX.Element {
  const { isOpen, onOpenChange } = useDisclosure();
  //const { onOpen } = useDisclosure();
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { locale } = useRouter();
  //const t = useTranslations();

  const titles = {
    es: '¿Quieres ser parte?',
    en: 'Do you want to be part of it?',
  };

  const captions = {
    es: '¡Obtén tus ASHARES!',
    en: 'Get your ASHARES!',
  };

  const descriptions = {
    es: 'Rápida reflección de utilidades: La inversión en ASHARES se verá reflejada en utilidades en corto tiempo, gracias a nuestro modelo deflacionario y estrategias de crecimiento. También recibirás tus ganancias tangibles adheridas a tus tokens ASHARES que estarán alojados en tu AGOD Key. Por lo que serás poseedor de una parte del ecosistema, tendrás propiedad e influencia, y participación en el desarrollo continuo. Dale click aquí abajito 👇.',
    en: 'Quick return on investment: Your ASHARES investment will reflect profits in a short time, thanks to our deflationary model and growth strategies. You will also receive tangible earnings attached to your ASHARES tokens, which will be stored in your AGOD Key. This means you will own part of the ecosystem, have property and influence, and participate in its continuous development. Click below 👇.',
  };

  const links = {
    es: 'Muy pronto! Invierte en ASHARES',
    en: 'Soon! Invest in ASHARES',
  };

  const faqTitles = {
    es: '¿Tienes dudas de cómo adquirir AGOD Key?',
    en: 'Do you have questions about how to acquire AGOD Key?',
  };

  const faqLinks = {
    es: 'Revisa este blog post',
    en: 'Check out this blog post',
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle click: prevent default, scroll to section, and open modal
  {/*const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    onOpen();
  };
  */}

  if (!isClient) return null;

  return (
    <header ref={sectionRef}>
      <SectionTitle
        title={titles[locale]}
        caption={captions[locale]}
        description={
          <>
            <span>{descriptions[locale]}</span>
            <br />
            {/* modifiqué el link para desabilitarlo 
            onClick={handleClick}
            */}
            <a
              href="#"
              rel="noopener noreferrer"
              className={clsx('mt-2 flex items-center text-red-400 hover:underline')}
              title="Coming soon"
              onClick={(e) => e.preventDefault()}
            >
              {links[locale]}
              <HeartIcon className={clsx('h-5 w-5 ml-2')} />
            </a>
            <br />
            <div style={{ marginTop: '30px' }} />
            <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
              {faqTitles[locale]}
            </span>
            <Link
              href="/blog/agodkey"
              rel="noopener noreferrer"
              className={clsx('flex items-center text-red-400 hover:underline')}
            >
              {faqLinks[locale]}
            </Link>
          </>
        }
        altdesc=""
      />
      <AsharesModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </header>
  );
}

export default ObtenAshares;