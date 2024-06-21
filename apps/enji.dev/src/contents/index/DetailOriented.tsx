import clsx from 'clsx';

import { HeartIcon } from '@/components/Icons';
import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Una experiencia digital completa"
        caption="bunz HUB"
        description={
          <>
            <span>
              Es un ecosistema tecnológico integral que fusiona las capacidades de AGOD Ecosystem (centro tecnológico) y Rabbitty (plataforma de estilo de vida y recompensas).
            </span>
            <br />
            <a
              href="https://bunz.me"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx('text-red-400 hover:underline flex items-center mt-2')}
            >
              <HeartIcon className={clsx('h-5 w-5')} />
              Muy pronto podrás saber + de bunz
            </a>
          </>
        }
      />
    </header>
  );
}

export default DetailOriented;
