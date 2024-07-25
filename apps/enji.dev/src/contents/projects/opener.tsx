import clsx from 'clsx';

import { HeartIcon } from '@/components/Icons';
import SectionTitle from '@/components/sections/SectionTitle';

function Opener() {
  return (
    <header className={clsx('mb-8 mt-10')}>
      <SectionTitle
        title="Tu Oportunidad de Inversión en el Futuro de las Finanzas Descentralizadas"
        caption="AGOD Shares"
        description={
          <>
            <span>
            Invertir en AGOD Shares no solo significa ser parte de un ecosistema de vanguardia en el mundo blockchain, 
            sino también asegurar tu lugar en una comunidad que valora la transparencia, la innovación y el crecimiento 
            sostenible. Con un suministro limitado y un modelo deflacionario diseñado para incrementar el valor de cada 
            “share” con el tiempo.
            </span>
            <br />
            <a
              href="/getashares"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'disabled-link mt-2 flex items-center text-red-400 hover:underline'
              )}
            >
              Invierte en ASHARES aquí
              <HeartIcon className={clsx('h-5 w-5 ml-2')} />
            </a>
          </>
        }
        altdesc=""
      />
    </header>
  );
}

export default Opener;
