import { useEffect } from 'react';
import { createChat } from '@n8n/chat';


const Chat = (): JSX.Element => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://crm.agodecosystem.com/webhook/e3f435d5-80e1-4274-a591-2c403c8940e3/chat',
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        'Hola! 👋',
        'Hola! mi nombre es Quetza!, ¿en qué te puedo ayudar el día de hoy?'
      ],
      i18n: {
        en: {
          title: 'Weep! 👋',
          subtitle: "Soy tu asistente virtual y estoy aquí para ayudarte",
          footer: '',
          getStarted: 'Nueva Conversación',
          inputPlaceholder: 'escribe tu consulta..',
          closeButtonTooltip: 'Cerrar chat'
        },
      },
    })
  }, []);

  return (
    <div></div>
  );
};

export default Chat; 
