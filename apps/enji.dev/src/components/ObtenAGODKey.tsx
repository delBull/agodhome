
import {Button, Input,Modal, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import clsx from 'clsx';
import { m, } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

import {MailIcon} from '@/components/MailIcon.jsx';

import modalImage from '@/assets/images/quetza.png';

import Image from "./mdx/Image";


export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className="text-red-400" onPress={onOpen}>Enlístate para el AGOD Key</Button>
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
              <m.div
              className={clsx('top-10 left-0 max-w-96 ml-5 md:ml-20')}
              >
                <p className="font-normal">Invertir en AGOD Shares no solo significa ser parte de un ecosistema de vanguardia en el mundo blockchain, 
                sino también asegurar tu lugar en una comunidad que valora la transparencia, la innovación y el crecimiento 
                sostenible.</p>
                <div className={clsx('mt-5')} />
                <span className="font-normal">Enlístate Aquí 👇</span>
              </m.div></ModalHeader>
              <m.div
            className={clsx('left-0 max-w-96 ml-5 md:ml-20')}
          >
            <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-4xl text-default-400 pointer-events-none flex-shrink-0 absolute right-5" />
                  }
                  label=""
                  placeholder="Ingresa tu email"
                  variant="flat"
                  className={clsx('')}
                />
          </m.div>
              <ModalFooter className={clsx('absolute top-0 md:-top-9 left-0')}>
                <Button className={clsx('font-thin text-sm')} color="danger" variant="faded" onPress={onClose}>
                  cerrar
                </Button>
              </ModalFooter>
              <m.div className={clsx('invisible md:visible absolute right-0 -top-6 opacity-60')}>
              <Image
                  src={modalImage}
                  alt="Intro HD"
                  width={600}
                  height={300}
               />
               </m.div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
