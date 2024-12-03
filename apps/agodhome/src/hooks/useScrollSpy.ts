import { useEffect, useState } from 'react';

export default function useScrollSpy() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const headings = Array.from(document.querySelectorAll('h2, h3'));
      
      // Encontrar el heading actual basado en la posición de scroll
      const current = headings.find((heading) => {
        const { top, bottom } = heading.getBoundingClientRect();
        // Considerar un heading como "activo" cuando está cerca del top de la ventana
        return top <= 100 && bottom > 100;
      });

      if (current?.id) {
        setCurrentSection(current.id);
      }
    };

    // Observar los cambios de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Verificar la posición inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { currentSection };
}
