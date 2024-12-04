import { useEffect, useState } from 'react';
import Chat from './Chat'; // Asegúrate de importar el componente Chat

const ChatContainer = ({ isChatOpen }) => {
  const [chatInitialized, setChatInitialized] = useState(false);

  useEffect(() => {
    if (isChatOpen && !chatInitialized) {
      // Aquí puedes inicializar el chat si es necesario
      setChatInitialized(true);
    }
  }, [isChatOpen, chatInitialized]);

  return (
    <>
      {isChatOpen && <Chat />} {/* Renderizar el componente Chat solo si está abierto */}
    </>
  );
};

export default ChatContainer; 
