import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface enlistadoAGODKeyProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const enlistadoAGODKey = ({
  username,
  userImage,
  invitedByUsername,
  invitedByEmail,
  teamName,
  teamImage,
  inviteLink,
  inviteFromIp,
  inviteFromLocation,
}: enlistadoAGODKeyProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src="/assets/images/icon.png"
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            ¡Ahora estas en la Lista de Espera de <strong>{teamName}</strong><strong>!</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hola {username},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>¡Felicidades! </strong>
               Estás a un paso de experimentar el futuro de la autenticación segura y los servicios exclusivos 
               en el mundo <strong>blockchain.</strong> 
            </Text>
            <Section>
              <Row>
                <Column align="center">
                  <Img
                    src="/assets/images/icon.png"
                    width="12"
                    height="9"
                    alt="invited you to"
                  />
                </Column>
              </Row>
              <Text className="text-black text-[14px] leading-[24px]">
              Al estar en nuestra lista de espera, serás uno de los primeros en acceder a <strong>AGOD Key</strong>, desbloqueando 
              un nuevo nivel de seguridad y beneficios dentro del <strong>AGOD Ecosystem.</strong> 
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
            Mantente atento a nuestras actualizaciones, ya que muy pronto recibirás instrucciones sobre cómo obtener tu 
             <strong> AGOD Key antes que nadie. Estamos emocionados de tenerte con nosotros en este viaje innovador.</strong> 
            </Text>
            <p className="text-center font-bold text-lg mt-10 mb-10">¡Prepárate para revolucionar tu experiencia digital!</p>
            <Text className="text-black text-[14px] leading-[24px]">
            Saludos, El equipo de <strong>AGOD Ecosystem</strong> 
            </Text>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Esta notificación ha sido enviada para {" "}
              <span className="text-black">{username}.</span> Si no esperabas esta invitación, 
              puedes ignorar este correo electrónico. Si Estás preocupado por la seguridad de tu cuenta, 
              responda a este correo electrónico para ponerte en contacto con nosotros.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

enlistadoAGODKey.PreviewProps = {
  username: "Amigo",
  userImage: `${baseUrl}/assets/images/icon.png`,
  invitedByUsername: "AGOD Ecosystem",
  invitedByEmail: "mkt@agodecosystem.com",
  teamName: "AGOD Key",
  teamImage: `${baseUrl}/assets/images/icon.png`,
  inviteLink: "https://vercel.com/teams/invite/foo",
  inviteFromIp: "",
  inviteFromLocation: "México",
} as enlistadoAGODKeyProps;

export default enlistadoAGODKey;
