import clsx from 'clsx';
import Link from 'next/link';

import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import tokenAGODVideo from '@/assets/videos/tokenAGOD.mp4';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';
import { useTranslations } from 'next-intl';

type Content = {
  state: TodoItemState;
  title: string;
  description: string;
  altdesc: string;
  video?: string;
  link: string;
};

const content: Array<Content> = [
  {
    state: 'rabbitty',
    title: 'AGOD Pass',
    description: 'Incluye beneficios exclusivos, bunz, AGOD token y más',
    altdesc: '',
    video: tokenAGODVideo,
    link: '/agodkey',
  },
];

function PrettyOptimized() {
  const t = useTranslations('home-page.PrettyOptimized-section')
  return (
    <header >
      <SectionTitle
        title={t('sectionTitle.title')}
        caption={t('sectionTitle.caption')}
        description=""
        altdesc={
          <>
     {t.rich('sectionTitle.altDescription', {
  firstpart: (chunks) => <span className={clsx('text-xl max-w-lg text-slate-800', 'dark:text-slate-100')}>{chunks}</span>,
secondpart: (chunks) => <span className={clsx('text-sm max-w-lg text-slate-600', 'dark:text-slate-400')}>{chunks}</span>
})}
          </>
        }
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('-mt-8 flex-1 flex-col gap-3', 'lg:flex')}>
            {content.map((item) => (
              <div key={item.state}>
                    <Link href={item.link}> 
                      <video
                        src={item.video}
                        autoPlay
                        playsInline
                        loop
                        muted
                        className={clsx('rounded-lg fade-up-on-hover w-2/3 md:w-1/3')}
                        style={{ objectFit: 'cover' }}
                      >
                        <track kind="captions" /> {/* Pista de subtítulos vacía para accesibilidad */}
                          Your browser does not support the video tag.
                      </video>               
                    </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionContent>
    </header>
  );
}

export default PrettyOptimized;
