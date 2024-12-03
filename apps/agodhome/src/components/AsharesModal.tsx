import clsx from 'clsx';
import { Button, Modal, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';
import modalImage from '@/assets/images/quetza.png';

function AsharesModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: () => void }) {
  // state vars
  const [isClient, setIsClient] = useState(false);
  const [isMinting, setIsMinting] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Función temporal desactivada
  const handleMint = async () => {
    console.log('Función de mint temporalmente desactivada');
  };

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" },
          },
          exit: {
            y: 20,
            opacity: 0,
            transition: { duration: 0.2, ease: "easeIn" },
          },
        },
      }}
      placement="bottom-center"
      className="bg-gray-950 max-h-96 absolute bottom-0 inline-flex flex-col flex-direction gap-3"
    >
      <ModalContent className="p-10">
        <ModalHeader>
          <m.div className={clsx('top-10 left-0 max-w-96 ml-5 md:ml-20')}>
            <p className="font-normal">
              <span className={clsx('font-medium')}>¡Conéctate ahora para obtener tu Smart Wallet y el exclusivo AGOD Key! 🚀</span>
              <br/><br/>¡Es completamente gratis!
              Esta llave será tu acceso principal a todo el <span className={clsx('font-medium')}>universo blockchain de AGOD Ecosystem,</span> desbloqueando herramientas, beneficios y oportunidades únicas. 🌐🔑
              <br/><br/><span className={clsx('font-medium')}>¡Comienza tu viaje en el ecosistema hoy mismo!</span>
            </p>
            <div className={clsx('mt-5')} />
            <div>
              <button 
                onClick={() => console.log('Conexión temporalmente desactivada')}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Conectar Wallet (Desactivado)
              </button>
            </div>
          </m.div>
        </ModalHeader>
        
        <ModalFooter className={clsx('absolute top-0 md:-top-0 left-0')}>
          <Button className={clsx('font-thin text-sm')} color="danger" variant="faded" onPress={onOpenChange}>
            Cerrar
          </Button>
        </ModalFooter>
        
        {isClient && (
          <m.div className={clsx('invisible md:visible absolute right-0 top-0 opacity-60')}>
            <Image src={modalImage} alt="ASHARES" width={600} height={300} />
          </m.div>
        )}
      </ModalContent>
    </Modal>
  );
}

export default AsharesModal;
