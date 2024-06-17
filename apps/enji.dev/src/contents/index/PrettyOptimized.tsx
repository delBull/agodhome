import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function PrettyOptimized() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Obtén AGOD token"
        caption="¡Toma Acción!"
        description="¿Listo para embarcarte en un viaje hacia un futuro financiero sostenible?"
      />
      
    </header>
  );
}

export default PrettyOptimized;
