import { useEffect } from 'react';
import useGlobal from '@/hooks/useGlobal';

function Shortcuts() {
  const { isQuickAccessOpen, setQuickAccessOpen } = useGlobal();

  useEffect(() => {
    const handleAltKey = (event: KeyboardEvent) => {
      if (event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'OptionLeft' || event.code === 'OptionRight') {
        setQuickAccessOpen(!isQuickAccessOpen);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isQuickAccessOpen) {
        setQuickAccessOpen(false);
      }
    };

    document.addEventListener('keydown', handleAltKey);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleAltKey);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isQuickAccessOpen, setQuickAccessOpen]);

  return null;
}

export default Shortcuts;
