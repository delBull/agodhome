import clsx from 'clsx';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

function Privacidad() {
  return (
    <>
      <SectionContent>
        <div className={clsx('-mt-10 flex')}>
          <SectionButton
            title="Introducción."
            icon=""
            description="Bienvenidos a AGOD Ecosystem. Nos comprometemos a proteger su privacidad y asegurar que su información personal se maneje de manera segura y responsable. Esta Política de Privacidad describe cómo recopilamos, utilizamos, divulgamos y protegemos su información al interactuar con nuestra plataforma y servicios."
          />
        </div>
      </SectionContent>

      <SectionTitle
        title="Información que recopilamos"
        caption="Incluye datos personales y técnicos"
        description="Recopilamos información personal (nombre, correo electrónico, información de contacto, identificación personal), información técnica (dirección IP, tipo de navegador, sistema operativo, páginas visitadas) y datos relacionados con el uso de nuestra plataforma (actividad, participación en eventos, uso de tokens)."
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title="Cómo utilizamos su información"
        caption="Propósitos principales"
        description="Utilizamos su información para proporcionar y mejorar nuestros servicios, facilitar comunicaciones, cumplir con obligaciones legales, realizar investigaciones y desarrollo, y personalizar su experiencia en nuestras plataformas."
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title="Uso de cookies y tecnologías similares"
        caption=""
        description="Utilizamos cookies para personalizar su experiencia, analizar el tráfico del sitio y recordar sus preferencias. También empleamos tecnologías similares para optimizar la funcionalidad de nuestras plataformas. Puede gestionar sus preferencias de cookies desde la configuración de su navegador."
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title="Uso de Google reCAPTCHA"
        caption="Protección contra bots"
        description="Utilizamos Google reCAPTCHA para proteger nuestros servicios contra el acceso automatizado malicioso. Al usar nuestra plataforma, acepta que Google recopile datos personales según lo establecido en su Política de Privacidad y Términos de Servicio."
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title="Compartir información"
        caption="Terceros y obligaciones legales"
        description="Podemos compartir su información con proveedores de servicios, socios comerciales y autoridades legales cuando sea necesario para cumplir con la ley o mejorar nuestros servicios. Siempre que se requiera, solicitaremos su consentimiento explícito."
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title="Seguridad de la información"
        caption="Protección de datos"
        description="Implementamos medidas de seguridad técnicas y organizativas, como encriptación, firewalls y controles de acceso, para proteger su información contra el acceso no autorizado, pérdida o alteración."
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title="Retención de datos"
        caption=""
        description="Retenemos su información solo durante el tiempo necesario para cumplir con los propósitos establecidos en esta Política de Privacidad, salvo que la ley exija lo contrario."
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title="Sus derechos"
        caption="Acceso, corrección y eliminación"
        description="Tiene derecho a acceder, actualizar o eliminar su información personal. También puede oponerse al procesamiento de su información o solicitar su portabilidad."
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title="Términos y condiciones"
        caption="Reglas del uso de nuestros servicios"
        description="El uso de nuestra plataforma está sujeto a los términos y condiciones detallados en este documento. Incluyen las reglas de conducta del usuario, limitaciones de responsabilidad y otros aspectos legales clave. Revise los Términos y Condiciones completos para más información."
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title="Cambios en la política de privacidad"
        caption=""
        description="Podemos actualizar esta Política de Privacidad para reflejar cambios en nuestras prácticas o requisitos legales. Notificaremos cualquier cambio significativo mediante nuestras plataformas o por correo electrónico."
        altdesc
      />
      <div style={{ marginTop: '30px' }} />

      <SectionTitle
        title="Contacto"
        caption="Cómo comunicarse con nosotros"
        description="Si tiene preguntas o inquietudes, por favor contacte a nuestro equipo de privacidad en: privacidad@agodecosystem.com."
        altdesc
      />
    </>
  );
}

export default Privacidad;
