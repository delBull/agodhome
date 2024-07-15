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
            description="Bienvenidos a AGOD Ecosystem. Nos comprometemos a proteger su privacidad y a asegurar que su información personal se maneje de manera segura y responsable. Esta Política de Privacidad describe cómo recopilamos, utilizamos, divulgamos y protegemos su información cuando interactúa con nuestra plataforma y servicios."
          />
        </div>
      </SectionContent>
      <SectionTitle
        title="Información Personal"
        caption="Información que recopilamos"
        description="Nombre completo, 
Dirección de correo electrónico, 
Información de contacto, 
Identificación personal (para verificación de identidad)."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Información Técnica"
        caption=""
        description="Dirección IP, 
Tipo de navegador y sistema operativo, 
Páginas visitadas en nuestro sitio web, 
Duración y frecuencia de visitas."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Información Financiera"
        caption=""
        description="Información de pago, 
Historial de transacciones."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Información de Uso"
        caption=""
        description="Actividad dentro de nuestras plataformas, 
Participación en eventos, Uso de tokens."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Para Proporcionar y Mejorar Nuestros Servicios"
        caption="Cómo Utilizamos su Información"
        description="Procesar sus transacciones y gestionar su cuenta, 
Facilitar la autenticación y el acceso seguro mediante AGOD Key, 
Mejorar la funcionalidad de nuestras plataformas y personalizar su experiencia."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Para Comunicaciones"
        caption=""
        description="Enviar notificaciones importantes sobre su cuenta y nuestras plataformas, 
Proporcionar actualizaciones y noticias sobre el AGOD Ecosystem, 
Responder a sus consultas y proporcionar soporte al cliente."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Para Cumplimiento Legal"
        caption=""
        description="Verificar su identidad y prevenir fraudes, 
Cumplir con obligaciones legales y regulatorias."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Para Investigación y Desarrollo"
        caption=""
        description="Analizar el uso de nuestras plataformas para mejorar nuestros servicios, 
Desarrollar nuevas funcionalidades y productos basados en el feedback y el comportamiento de los usuarios."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Con Terceros de Confianza"
        caption="Cómo Compartimos su Información"
        description="Proveedores de servicios que nos ayudan a operar y mejorar nuestras plataformas (proveedores de pagos, servicios de hosting, etc.), 
socios comerciales y afiliados para mejorar la interoperabilidad y la experiencia del usuario."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Por Obligación Legal"
        caption=""
        description="Autoridades gubernamentales y reguladoras cuando sea requerido por ley."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Con su Consentimiento"
        caption=""
        description="Otros terceros con su consentimiento explícito para fines específicos."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title=""
        caption="Seguridad de su Información"
        description="Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra el acceso no autorizado, la divulgación, alteración o destrucción. Estas medidas incluyen encriptación, firewalls y controles de acceso seguros."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title=""
        caption="Retención de Datos"
        description="Retenemos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta Política de Privacidad, a menos que se requiera o permita un período de retención más largo por ley."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Acceso y Correción"
        caption="Sus Derechos"
        description="Puede acceder y actualizar su información personal en cualquier momento a través de su cuenta en nuestra plataforma."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Eliminación y Restricción"
        caption=""
        description="Puede solicitar la eliminación o restricción del procesamiento de su información personal, sujeto a ciertas condiciones legales y contractuales."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Portabilidad de Datos"
        caption=""
        description="Tiene derecho a recibir una copia de su información personal en un formato estructurado y de uso común."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title="Objeción"
        caption=""
        description="Puede oponerse al procesamiento de su información personal para fines específicos, como marketing directo."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title=""
        caption="Cookies y Tecnologías Similares"
        description="Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestras plataformas. Estas tecnologías nos permiten recordar sus preferencias, analizar el tráfico del sitio y personalizar contenido. Puede gestionar sus preferencias de cookies a través de la configuración de su navegador."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title=""
        caption="Cambos a esta Política de Privacidad"
        description="Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas de información. Publicaremos cualquier actualización en esta página y, si los cambios son significativos, le notificaremos a través de nuestras plataformas o por correo electrónico."
      />
      <div style={{marginTop: '30px'}} />
      <SectionTitle
        title=""
        caption="Contacvto"
        description="Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad, por favor contacte a nuestro equipo de privacidad en: 
privacidad@agodecosystem.com"
      />
     </>
  );
}

export default Privacidad;
