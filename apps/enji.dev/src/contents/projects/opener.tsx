import clsx from 'clsx';
import { useDisclosure } from '@nextui-org/react';
import SectionTitle from '@/components/sections/SectionTitle';
import { HeartIcon } from '@/components/Icons';
import AsharesModal from '@/components/AsharesModal';

function Opener() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <header className={clsx('mb-8 mt-10')}>
      <SectionTitle
        title="Tu Oportunidad de Inversión en el Futuro de las Finanzas Descentralizadas"
        caption="AGOD Shares"
        description={
          <>
            <span>
              Invertir en AGOD Shares no solo significa ser parte de un ecosistema de vanguardia en el mundo blockchain, 
              sino también asegurar tu lugar en una comunidad que valora la transparencia, la innovación y el crecimiento 
              sostenible. Con un suministro limitado y un modelo deflacionario diseñado para incrementar el valor de cada 
              “share” con el tiempo.
            </span>
            <br />
            <a
              href="#"
              rel="noopener noreferrer"
              className={clsx('mt-2 flex items-center text-red-400 hover:underline')}
              onClick={onOpen}
            >
              Invierte en ASHARES aquí
              <HeartIcon className={clsx('h-5 w-5 ml-2')} />
            </a>
          </>
        }
        altdesc=""
      />
      <AsharesModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </header>
  );
}

export default Opener;
