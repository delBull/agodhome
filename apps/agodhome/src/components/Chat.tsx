import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';

const Chat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log('Script de n8n chat cargado.');
      createChat({
        webhookUrl: 'https://crm.agodecosystem.com/webhook/e3f435d5-80e1-4274-a591-2c403c8940e3/chat',
        webhookConfig: {
          method: 'POST',
          headers: {}
        },
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
      });
    };

    script.onerror = () => {
      console.error('Error al cargar el script de n8n chat.');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="n8n-chat-container">
      <div id="n8n-chat" />
    </div>
  );
};

export default Chat; 
