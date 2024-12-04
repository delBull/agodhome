import { useEffect, useState } from 'react';
import Chat from './Chat'; // Asegúrate de importar el componente Chat

// Definir las propiedades que acepta el componente
interface ChatContainerProps {
  isChatOpen: boolean; // Propiedad para controlar si el chat está abierto
}

const ChatContainer: React.FC<ChatContainerProps> = ({ isChatOpen }) => {
  const [chatInitialized, setChatInitialized] = useState(false);

  useEffect(() => {
    if (!chatInitialized) {
      // Aquí puedes inicializar el chat si es necesario
      setChatInitialized(true);
    }
  }, [chatInitialized]);

  return (
    <div>
      <Chat isOpen={isChatOpen} /> {/* Pasar el estado isChatOpen al componente Chat */}
    </div>
  );
};

export default ChatContainer; 
