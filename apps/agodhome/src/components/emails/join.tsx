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
import { useRouter } from 'next/router';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const Join = ({
  username, 
  invitedByUsername,
  teamName,
}) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

    const { locale } = useRouter();
  
    const emailJoin = {
      en: {
        header:  "¡Ahora eres parte de la familia de",
        hi: "Hola"
      },
      es: {
        header: "Now you are part of the family of",
        hi: "Hi"
      }
    }
    
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src="../public/assets/images/icon.png"
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            {emailJoin[locale].header} <strong>{teamName}</strong><strong>!</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
            {emailJoin[locale].hi} {username},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>¡Felicidades! </strong>
              Estás a un paso de experimentar el futuro de la descentralización, ahora podemos retomar el control con <strong>blockchain.</strong>
            </Text>
            <Section>
              <Row>
                <Column align="center">
                  <Img
                    src="../public/assets/images/icon.png"
                    width="12"
                    height="9"
                    alt="invited you to"
                  />
                </Column>
              </Row>
              <Text className="text-black text-[14px] leading-[24px]">
                Mantente al pendiente de nuestras actualizaciones y sé parte de este revolucionario <strong>cambio.</strong>, Muy pronto 
                te mostraremos cómo AGOD Ecosystem está transformando la forma de invertir, haciendo realidad el futuro de las finanzas 
                respaldado por activos tangibles.
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

Join.PreviewProps = {
  username: "Amigo",
  userImage: `${baseUrl}../public/assets/images/icon.png`,
  invitedByUsername: "AGOD Ecosystem",
  invitedByEmail: "mkt@agodecosystem.com",
  teamName: "AGOD Ecosystem",
  teamImage: `${baseUrl}/assets/images/icon.png`,
  inviteLink: "https://vercel.com/teams/invite/foo",
  inviteFromIp: "",
  inviteFromLocation: "México",
};

export default Join;
