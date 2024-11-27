import clsx from 'clsx';
import { Button, Input, Modal, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';
import modalImage from '@/assets/images/quetza.png';

// Thirdweb
import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";
import { getOwnedNFTs } from "thirdweb/extensions/erc721";
import { useSendTransaction } from "thirdweb/react";
import { mintTo } from "thirdweb/extensions/erc721";
 
const contract = getContract({
  client,
  address: "0x...",
  chain: sepolia,
});

function AsharesModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: () => void }) {

  // thirdweb consts
  const { data: ownedNFTs } = useReadContract(getOwnedNFTs, {
    contract,
    address: "0x...",
  });

  const { mutate: sendTransaction } = useSendTransaction();
 
  const onClick = async () => {
    // this mint extension handles uploading metadata to IPFS and pining it
    const transaction = mintTo({
      contract,
      to: "0x...",
      nft: {
        name: "NFT Name",
        description: "NFT Description",
        image: "https://example.com/image.png",
      },
    });
    sendTransaction(transaction);
  };
  
  // state vars
  const [amount, setAmount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // Esto asegura que la imagen solo se renderiza en el cliente.
  }, []);

  const handleBuyAshares = () => {
    // Lógica para manejar la compra de ASHARES.
    onOpenChange(); // Cierra el modal después de la compra
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
        },
      }}
      placement="bottom-center"
      className="bg-gray-950 max-h-96 absolute bottom-0 inline-flex flex-col flex-direction gap-3"
    >
      
      <ModalContent className="p-10">
        <ModalHeader>
          {/*
          <m.div className={clsx('top-10 left-0 max-w-96 ml-5 md:ml-20')}>
            <p className="font-normal">
              Invertir en ASHARES no solo significa ser parte de un ecosistema de vanguardia en el mundo blockchain, sino
              también asegurar tu lugar en una comunidad que valora la transparencia, la innovación y el crecimiento
              sostenible.
            </p>
            <div className={clsx('mt-5')} />
            <span className="font-normal">Compra ASHARES Aquí 👇</span>
          </m.div>
          */}
          <m.div className={clsx('top-10 left-0 max-w-96 ml-5 md:ml-20')}>
            <p className="font-normal">
            <span className={clsx('font-medium')}>¡Conéctate ahora para obtener tu Smart Wallet y el exclusivo AGOD Key! 🚀</span> <br/> <br/>¡Es completamente gratis!
            Esta llave será tu acceso principal a todo el <span className={clsx('font-medium')}>universo blockchain de AGOD Ecosystem,</span> desbloqueando herramientas, beneficios y oportunidades únicas. 🌐🔑
            <br/><br/><span className={clsx('font-medium')}>¡Comienza tu viaje en el ecosistema hoy mismo!</span>
            </p>
            <div className={clsx('mt-5')} />
            <div>
              <ConnectButton client={client} />
              <div>
                <p>Ya cuentas con AGOD Key: {ownedNFTs}</p>
              </div>
              <div>
                <button onClick={onClick}>Mint</button>
              </div>
            </div>
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
            isDisabled
          />
          <Button
            color="primary"
            variant="solid"
            onPress={handleBuyAshares}
            className={clsx('font-thin text-sm border border-red-400 border-b-rose-600 border-r-4 rounded-lg')}
          >
            ¡Muy Pronto!
          </Button>
        </m.div>
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
