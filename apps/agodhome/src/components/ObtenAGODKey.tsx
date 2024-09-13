
import { Button, Input, Modal, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import clsx from 'clsx';
import { m, } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

import { MailIcon } from '@/components/MailIcon.jsx';

import modalImage from '@/assets/images/quetza.png';

import Image from "./mdx/Image";

import { useSession, signIn, signOut } from "next-auth/react"

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: session } = useSession();

  if (!session) {
    return (
      <Button className="text-red-400" onPress={() => signIn('google', { callbackUrl: "/api/waitlist" })}>Enlístate para el AGOD Key</Button>
    );
  }
  return (
    <>
      <button onClick={() => signOut()}>Cerrar sesión</button>
    </>
  );
}
