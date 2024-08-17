import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import SectionTitle from '@/components/sections/SectionTitle';
import { HeartIcon } from '@/components/Icons';
import { useDisclosure } from '@nextui-org/react';
import dynamic from 'next/dynamic';

const AsharesModal = dynamic(() => import('@/components/AsharesModal'), { ssr: false });

function ObtenAshares() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Función para manejar el click en el enlace
  const handleClick = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del enlace

    if (sectionRef.current) {
      // Desplaza la página hacia el elemento referenciado
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    // Abre el modal
    onOpen();
  };

  if (!isClient) {
    return null; // O un loader si deseas
  }

  return (
    <header ref={sectionRef}>
      <SectionTitle
        title="¿Quieres ser parte?"
        caption="¡Obtén tus ASHARES!"
        description={
          <>
            <span>
              Rápida reflección de utilidades: La inversión en ASHARES se verá reflejada en utilidades en corto 
              tiempo, gracias a nuestro modelo deflacionario y estrategias de crecimiento. También recibirás tus 
              ganancias tangibles adheridas a tus tokens ASHARES que estarán alojados en tu AGOD Key. Por lo que 
              serás poseedor de una parte del ecosistema, tendrás propiedad e influencia, y participación en el 
              desarrollo continuo. Dale click aquí abajito 👇.
            </span>
            <br />
            <a
              href="#"
              rel="noopener noreferrer"
              className={clsx('mt-2 flex items-center text-red-400 hover:underline')}
              onClick={handleClick}
            >
              Invierte en ASHARES
              <HeartIcon className={clsx('h-5 w-5 ml-2')} />
            </a>
            <br />
            <div style={{ marginTop: '30px' }}></div>
            <span style={{ fontSize: '30px', fontWeight: 'bold'}}>¿Tienes dudas de cómo adquirir AGOD Key?</span>
            <a
              href="/blog/agodkey"
              rel="noopener noreferrer"
              className={clsx('flex items-center text-red-400 hover:underline')}
            >
              Revisa este blog post
            </a>
          </>
        }
        altdesc=""
      />
      <AsharesModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </header>
  );
}

export default ObtenAshares;
