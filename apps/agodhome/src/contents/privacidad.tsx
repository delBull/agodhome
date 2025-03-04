import clsx from 'clsx';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import { useRouter } from 'next/router';

function Privacidad(): JSX.Element {
  const { locale } = useRouter();

  const titles = {
    es: {
      intro: 'Introducción.',
      info: 'Información que recopilamos',
      usage: 'Cómo utilizamos su información',
      cookies: 'Uso de cookies y tecnologías similares',
      recaptcha: 'Uso de Google reCAPTCHA',
      sharing: 'Compartir información',
      security: 'Seguridad de la información',
      retention: 'Retención de datos',
      rights: 'Sus derechos',
      terms: 'Términos y condiciones',
      changes: 'Cambios en la política de privacidad',
      contact: 'Contacto',
    },
    en: {
      intro: 'Introduction.',
      info: 'Information we collect',
      usage: 'How we use your information',
      cookies: 'Use of cookies and similar technologies',
      recaptcha: 'Use of Google reCAPTCHA',
      sharing: 'Sharing information',
      security: 'Information security',
      retention: 'Data retention',
      rights: 'Your rights',
      terms: 'Terms and conditions',
      changes: 'Changes to our privacy policy',
      contact: 'Contact us',
    },
  };

  const descriptions = {
    es: {
      intro: 'Bienvenidos a AGOD Ecosystem. Nos comprometemos a proteger su privacidad y asegurar que su información personal se maneje de manera segura y responsable. Esta Política de Privacidad describe cómo recopilamos, utilizamos, divulgamos y protegemos su información al interactuar con nuestra plataforma y servicios.',
      info: 'Recopilamos información personal (nombre, correo electrónico, información de contacto, identificación personal), información técnica (dirección IP, tipo de navegador, sistema operativo, páginas visitadas) y datos relacionados con el uso de nuestra plataforma (actividad, participación en eventos, uso de tokens).',
      usage: 'Utilizamos su información para proporcionar y mejorar nuestros servicios, facilitar comunicaciones, cumplir con obligaciones legales, realizar investigaciones y desarrollo, y personalizar su experiencia en nuestras plataformas.',
      cookies: 'Utilizamos cookies para personalizar su experiencia, analizar el tráfico del sitio y recordar sus preferencias. También empleamos tecnologías similares para optimizar la funcionalidad de nuestras plataformas. Puede gestionar sus preferencias de cookies desde la configuración de su navegador.',
      recaptcha: 'Utilizamos Google reCAPTCHA para proteger nuestros servicios contra el acceso automatizado malicioso. Al usar nuestra plataforma, acepta que Google recopile datos personales según lo establecido en su Política de Privacidad y Términos de Servicio.',
      sharing: 'Podemos compartir su información con proveedores de servicios, socios comerciales y autoridades legales cuando sea necesario para cumplir con la ley o mejorar nuestros servicios. Siempre que se requiera, solicitaremos su consentimiento explícito.',
      security: 'Implementamos medidas de seguridad técnicas y organizativas, como encriptación, firewalls y controles de acceso, para proteger su información contra el acceso no autorizado, pérdida o alteración.',
      retention: 'Retenemos su información solo durante el tiempo necesario para cumplir con los propósitos establecidos en esta Política de Privacidad, salvo que la ley exija lo contrario.',
      rights: 'Tiene derecho a acceder, actualizar o eliminar su información personal. También puede oponerse al procesamiento de su información o solicitar su portabilidad.',
      terms: 'El uso de nuestra plataforma está sujeto a los términos y condiciones detallados en este documento. Incluyen las reglas de conducta del usuario, limitaciones de responsabilidad y otros aspectos legales clave. Revise los Términos y Condiciones completos para más información.',
      changes: 'Podemos actualizar esta Política de Privacidad para reflejar cambios en nuestras prácticas o requisitos legales. Notificaremos cualquier cambio significativo mediante nuestras plataformas o por correo electrónico.',
      contact: 'Si tiene preguntas o inquietudes, por favor contacte a nuestro equipo de privacidad en: privacidad@agodecosystem.com.',
    },
    en: {
      intro: 'Welcome to AGOD Ecosystem. We are committed to protecting your privacy and ensuring that your personal information is handled in a secure and responsible manner. This Privacy Policy describes how we collect, use, disclose and protect your information when you interact with our platform and services.',
      info: 'We collect personal information (name, email address, contact information, personal identification), technical information (IP address, browser type, operating system, pages visited) and data related to the use of our platform (activity, participation in events, use of tokens).',
      usage: 'We use your information to provide and improve our services, facilitate communication, comply with legal obligations, conduct research and development, and personalize your experience on our platforms.',
      cookies: 'We use cookies to personalize your experience, analyze site traffic and remember your preferences. We also use similar technologies to optimize the functionality of our platforms. You can manage your cookie preferences from your browser settings.',
      recaptcha: 'We use Google reCAPTCHA to protect our services from malicious automated access. By using our platform, you agree that Google may collect personal data as set out in its Privacy Policy and Terms of Service.',
      sharing: 'We may share your information with service providers, business partners and legal authorities when necessary to comply with the law or improve our services. We will always request your explicit consent when required.',
      security: 'We implement technical and organizational security measures, such as encryption, firewalls and access controls, to protect your information against unauthorized access, loss or alteration.',
      retention: 'We retain your information only for as long as necessary to fulfill the purposes set out in this Privacy Policy, unless the law requires otherwise.',
      rights: 'You have the right to access, update or delete your personal information. You can also object to the processing of your information or request its portability.',
      terms: 'The use of our platform is subject to the terms and conditions detailed in this document. They include user conduct rules, liability limitations and other key legal aspects. Please review the complete Terms and Conditions for more information.',
      changes: 'We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify any significant changes through our platforms or by email.',
      contact: 'If you have any questions or concerns, please contact our privacy team at: privacidad@agodecosystem.com.',
    },
  };

  const captions = {
    es: {
      intro: '',
      info: 'Incluye datos personales y técnicos',
      usage: 'Propósitos principales',
      cookies: '',
      recaptcha: 'Protección contra bots',
      sharing: 'Terceros y obligaciones legales',
      security: 'Protección de datos',
      retention: '',
      rights: 'Acceso, corrección y eliminación',
      terms: 'Reglas del uso de nuestros servicios',
      changes: '',
      contact: 'Cómo comunicarse con nosotros',
    },
    en: {
      intro: '',
      info: 'Include personal and technical data.',
      usage: 'Main purposes',
      cookies: '',
      recaptcha: 'Protection against bots.',
      sharing: 'Third parties and legal obligations.',
      security: 'Data protection.',
      retention: '',
      rights: 'Access, correction, and deletion.',
      terms: 'Rules for the use of our services.',
      changes: '',
      contact: 'How to contact us.',
    },
  };

  return (
    <>
      <SectionContent>
        <div className={clsx('-mt-10 flex')}>
          <SectionButton
            title={titles[locale].intro}
            icon=""
            description={descriptions[locale].intro}
          />
        </div>
      </SectionContent>

      <SectionTitle
        title={titles[locale].info}
        caption={captions[locale].info}
        description={descriptions[locale].info}
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title={titles[locale].usage}
        caption={captions[locale].usage}
        description={descriptions[locale].usage}
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title={titles[locale].cookies}
        caption=""
        description={descriptions[locale].cookies}
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title={titles[locale].recaptcha}
        caption={captions[locale].recaptcha}
        description={descriptions[locale].recaptcha}
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title={titles[locale].sharing}
        caption={captions[locale].sharing}
        description={descriptions[locale].sharing}
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title={titles[locale].security}
        caption={captions[locale].security}
        description={descriptions[locale].security}
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title={titles[locale].retention}
        caption=""
        description={descriptions[locale].retention}
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title={titles[locale].rights}
        caption={captions[locale].rights}
        description={descriptions[locale].rights}
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title={titles[locale].terms}
        caption={captions[locale].terms}
        description={descriptions[locale].terms}
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title={titles[locale].changes}
        caption={captions[locale].changes}
        description={descriptions[locale].changes}
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title={titles[locale].contact}
        caption={captions[locale].contact}
        description={descriptions[locale].contact}
        altdesc
      />
    </>
  );
}

export default Privacidad;
