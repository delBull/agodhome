import clsx from 'clsx';
import { Button, Input, Modal, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';

import { HeartIcon } from '@/components/Icons';
import SectionTitle from '@/components/sections/SectionTitle';
import Image from 'next/image';
import quetza from '@/assets/images/quetza.png';
import { m } from 'framer-motion';

function ObtenAshares() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [amount, setAmount] = useState(0);

  const handleBuyAshares = () => {
    // Lógica para manejar la compra de ASHARES.
    onClose(); // Cierra el modal después de la compra
  };

  return (
    <header>
      <SectionTitle
        title="¿Quieres ser parte?"
        caption="¡Obtén tus ASHARES!"
        description={
          <>
            <span>
              Rápida reflección de utilidades: La inversión en ASHARES se verá reflejada en utilidades en corto tiempo, 
              gracias a nuestro modelo deflacionario y estrategias de crecimiento. También recibirás tus ganancias 
              tangibles adheridas a tus tokens ASHARES que estarán alojados en tu AGOD Key. Por lo que serás poseedor 
              de una parte del ecosistema, tendrás propiedad e influencia, y participación en el desarrollo continuo. 
              Dale click aquí abajito 👇.
            </span>
            <br />
            <a
              href=""
              rel="noopener noreferrer"
              className={clsx(
                'mt-2 flex items-center text-red-400 hover:underline'
              )}
              onClick={onOpen}
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
              className={clsx(
                'flex items-center text-red-400 hover:underline'
              )}
            >
              Revisa este blog post
            </a>
          </>
        }
        altdesc=""
      />

      {/* Modal reutilizado */}
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
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
                  sostenible.
                  <span className={clsx('mt-5')} />
                  Compra ASHARES Aquí 👇
                  </p>
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
                <Button className={clsx('font-thin text-sm')} color="danger" variant="faded" onPress={() => onClose()}>
                  Cerrar
                </Button>
              </ModalFooter>
              <m.div className={clsx('invisible md:visible absolute right-0 top-0 opacity-60')}>
                <Image
                  src={quetza} // Use the url property of the imported image
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

export default ObtenAshares;
