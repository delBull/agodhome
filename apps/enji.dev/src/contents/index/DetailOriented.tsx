import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Se parte de un movimiento gobal."
        caption="Da Forma a Tu Futuro con AGOD"
        description="Juntos, estamos remodelando las finanzas para un futuro sostenible. Cada decisión que tomas con AGOD tiene el poder de marcar la diferencia."
      />
    </header>
  );
}

export default DetailOriented;
