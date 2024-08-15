import clsx from 'clsx';
import { Button, Input, Modal, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';

import { HeartIcon } from '@/components/Icons';
import SectionTitle from '@/components/sections/SectionTitle';
import Image from 'next/image';
import modalImage from '@/assets/images/quetza.png';
import { m } from 'framer-motion';

function Opener() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState('');

  const handleBuyAshares = () => {
    // Lógica para manejar la compra de ASHARES.
    // Aquí puedes integrar la lógica para la wallet o realizar cualquier acción necesaria.
    onOpenChange(); // Cierra el modal después de la compra sin pasar argumentos
  };

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
              className={clsx(
                'mt-2 flex items-center text-red-400 hover:underline'
              )}
              onClick={onOpen}
            >
              Invierte en ASHARES aquí
              <HeartIcon className={clsx('h-5 w-5 ml-2')} />
            </a>
          </>
        }
        altdesc=""
      />
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: 20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
        placement="bottom-center"
        className="bg-gray-950 max-h-96 absolute bottom-0 inline-flex flex-col flex-direction gap-3"
      >
        <ModalContent className="p-10">
          {(onClose) => (
            <>
              <ModalHeader>
                <m.div className={clsx('top-10 left-0 max-w-96 ml-5 md:ml-20')}>
                  <p className="font-normal">Invertir en ASHARES no solo significa ser parte de un ecosistema de vanguardia en el mundo blockchain, 
                  sino también asegurar tu lugar en una comunidad que valora la transparencia, la innovación y el crecimiento 
                  sostenible.</p>
                  <div className={clsx('mt-5')} />
                  <span className="font-normal">Compra ASHARES Aquí 👇</span>
                </m.div>
              </ModalHeader>
              <m.div className={clsx('left-0 max-w-96 ml-5 md:ml-20 mt-4 flex items-center')}>
                <Input
                  type="number"
                  value={amount.toString()} // Convertir el número a cadena
                  onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                  placeholder="Cantidad de ASHARES"
                  variant="flat"
                  className={clsx('mr-4')} // Espacio entre el input y el botón
                />
                <Button
                  color="primary"
                  variant="solid"
                  onPress={handleBuyAshares}
                  className={clsx('font-thin text-sm border border-red-400 border-b-rose-600 border-r-4 rounded-lg')}
                >
                  Comprar
                </Button>
              </m.div>
              <ModalFooter className={clsx('absolute top-0 md:-top-0 left-0')}>
                <Button className={clsx('font-thin text-sm')} color="danger" variant="faded" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
              <m.div className={clsx('invisible md:visible absolute right-0 top-0 opacity-60')}>
                <Image
                  src={modalImage}
                  alt="ASHARES"
                  width={600}
                  height={300}
                />
              </m.div>
            </>
          )}
        </ModalContent>
      </Modal>
    </header>
  );
}

export default Opener;
