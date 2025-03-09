"use client";
import { Button, Input, Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";
import clsx from 'clsx';
import { m, } from 'framer-motion';
import React, { FormEvent, useState } from "react";
import { useRouter } from 'next/router';

import { MailIcon } from '@/components/MailIcon.jsx';

import modalImage from '@/assets/images/quetza.png';

import Image from "./mdx/Image";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// @ts-ignore
import { toast } from "react-hot-toast";
import { useTranslations } from "next-intl";


export default function App() {
  const t = useTranslations('home-page.HeaderCta')
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const { locale } = useRouter();

  const modalDescriptions = {
    es: 'Ser parte del ecosistema significa estar a la vanguardia, asegurando tu lugar en una comunidad que valora la transparencia, la innovación y el crecimiento sostenible.',
    en: 'Being part of the ecosystem means being at the forefront, securing your place in a community that values transparency, innovation, and sustainable growth',
  };

  const modalCallToActions = {
    es: 'Enlístate Aquí', 
    en: 'Sign up here',
  };

  const modalFormLabels = {
    es: '',
    en: '',
  };

  const modalFormPlaceholders = {
    es: 'Ingresa tu email',
    en: 'Enter your email',
  };

  const modalFormButtons = {
    es: 'Unirme',
    en: 'Join',
  };

  const modalRecaptchaTexts = {
    es: 'Este sitio está protegido por reCAPTCHA y se aplica la Política de privacidad y las Condiciones de servicio de Google.',
    en: 'This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.',
  };

  const modalCloseButtons = {
    es: 'Cerrar',
    en: 'Close',
  };

  const modalFooterRecaptcha = {
    es: 'Política de Privacidad',
    en: 'Privacy Policy',
  };

  const modalConditionsRecaptcha = {
    es: 'Condiciones de Servicio',
    en: 'Terms & Conditions',
  };

  const modalfromRecaptcha = {
    es: 'de Google',
    en: 'from Google',
  };

  const modalAlerts = {
    es: {
      success: "Agregado correctamente a la lista de espera",
      error: "Ha ocurrido un error, inténtalo más tarde",
      error2: "Error en la solicitud:",
      error3: "Error en la solicitud, revisa la consola",
      sent: "¡Enviado!"
    },
    en: {
      success: "Welcome, You are in!",
      error: "Something happened, please try again",
      error2: "Something happened:",
      error3: "Something happened, check the console",
      sent: "Sent!"
    }
  };

  const { executeRecaptcha } = useGoogleReCaptcha();

  const submitWaitlistForm = function(recaptchaToken: string) {
    if (!email) {
      return;
    }

    fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        recaptchaToken
      })
    }).then(res => {
      if (res.status === 200) {
        toast.success(modalAlerts[locale].success);
        setEmail("");
      } else {
        toast.error(modalAlerts[locale].error);
      }
      setIsButtonDisabled(false);
      return res.json();
    }).then(data => {
      console.log(data);
    }).catch(err => {
      console.error(modalAlerts[locale].error2, err);
      toast.error(modalAlerts[locale].error3);
      setIsButtonDisabled(false);
    });
  }

  const handleFormSubmit = function(e: FormEvent) {
    e.preventDefault();
    setIsButtonDisabled(true);
    toast(modalAlerts[locale].sent);

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      setIsButtonDisabled(false);
      return;
    }

    executeRecaptcha("waitlistFormSubmit").then((recaptchaToken) => {
      submitWaitlistForm(recaptchaToken);
    });
  }

  const handleClose = () => {
    onOpenChange();
  };

  return (
    <>
      <Button
        className="text-red-400"
        onPress={(onOpen)}
      >
        {t('Enlístate para el AGOD Key')}
      </Button>
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
        classNames={{
          body: "p-10",
          base: "bg-slate-200/[.95] dark:bg-slate-950/[.98] max-h-fit absolute bottom-0",
        }}
      >
        <ModalContent>
      {() => (
        <>
          <ModalBody>
            <m.div
              className="w-full md:w-1/2 lg:w-1/3"
            >
              <p className="font-normal ml-3.5">{modalDescriptions[locale]}</p> 
              <p className="font-normal my-3 ml-3.5">{modalCallToActions[locale]}</p>
              <form
  onSubmit={handleFormSubmit}
  className="flex flex-col md:flex-row md:items-center md:space-x-3"
>
  <div className="flex-1">
    <Input
      autoFocus
      endContent={
        <MailIcon className="text-4xl text-default-400 pointer-events-none flex-shrink-0 absolute right-5" />
      }
      label={modalFormLabels[locale]}
      placeholder={modalFormPlaceholders[locale]}
      variant="flat"
      className="mb-3 md:mb-0 w-full"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>
  <div className="w-full md:w-auto">
    <button
      type="submit"
      disabled={isButtonDisabled}
      className="w-full md:w-auto mx-auto mb-3 mt-3 rounded-md p-3 bg-red-500 text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
    >
      {modalFormButtons[locale]}
    </button>
  </div>
</form>
<small className="block text-xs ml-3.5 mb-3">
  {modalRecaptchaTexts[locale]}{' '}
  <a className="text-red-400" target="_blank" href="https://policies.google.com/privacy">
  {modalFooterRecaptcha[locale]}
  </a>{' '}
  &{' '}
  <a className="text-red-400" target="_blank" href="https://policies.google.com/terms">
  {modalConditionsRecaptcha[locale]}
  </a>{' '}
  {modalfromRecaptcha[locale]}
</small>
            </m.div>
          </ModalBody>
              <m.div className={clsx('invisible md:visible absolute right-0 -top-6 opacity-60')}>
                <Image
                  src={modalImage}
                  alt="Intro HD"
                  width={600}
                  height={300}
                />
              </m.div>
              <button
            onClick={handleClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            {modalCloseButtons[locale]}
          </button>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
