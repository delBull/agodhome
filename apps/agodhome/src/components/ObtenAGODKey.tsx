"use client";
import { Button, Input, Modal, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import clsx from 'clsx';
import { m, } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FormEvent, useState } from "react";

import { MailIcon } from '@/components/MailIcon.jsx';

import modalImage from '@/assets/images/quetza.png';

import Image from "./mdx/Image";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const submitWaitlistForm = function (recaptchaToken: string) { 
    if (!email) {
      return;
    }

    fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({
        email,
        recaptchaToken
      })
    }).then(res => res.json()).then(data => {
      console.log(data);
    });
  }

  const handleFormSubmit = function (e: FormEvent) {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      return;
    }

    executeRecaptcha("waitlistFormSubmit").then((recaptchaToken) => {
      submitWaitlistForm(recaptchaToken);
    });

  }

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
        className="bg-slate-200/[.95] dark:bg-slate-900/[.98] max-h-[30rem] absolute bottom-0 inline-flex flex-col flex-direction gap-3"
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
                className="left-0 max-w-96 ml-5 md:ml-20"
              >
                <form onSubmit={handleFormSubmit}>
                  <Input
                    autoFocus
                    endContent={
                      <MailIcon className="text-4xl text-default-400 pointer-events-none flex-shrink-0 absolute right-5" />
                    }
                    label=""
                    placeholder="Ingresa tu email"
                    variant="flat"
                    className="mb-3"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <button
                    className="ml-3.5 mb-3 border-solid border-1 border-gray-300 rounded-md p-2 bg-red-400 text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                    type="submit"
                  >
                    Enviar
                  </button>
                  <small className="text-xm ml-3.5 inline-block mb-3">
                    Este sitio está protegido por reCAPTCHA y se aplica la <a className="text-red-400" target="_blank" href="https://policies.google.com/privacy">Política de privacidad</a> y las <a className="text-red-400" target="_blank" href="https://policies.google.com/terms">Condiciones de servicio</a> de Google.
                  </small>
                </form>
              </m.div>
              <ModalFooter className={clsx('absolute top-0 md:-top-9 left-0')}>
                <Button className="text-4xl font-thin mt-3 p-2" color="danger" variant="faded" onPress={onClose}>
                  &times;
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
