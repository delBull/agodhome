import clsx from 'clsx';
import { useSimpleTranslations } from '@/hooks/useSimpleTranslations';
import { GetStaticProps } from 'next';
import PandorasContents from '@/contents/projects/pandoras';
//import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page'; 
import { HeartIcon } from '@/components/Icons';

function PandorasPage(): JSX.Element {
  const t = useSimpleTranslations('pandoras-page.header');

  return (
    <Page
      frontMatter={{
        title: t('title'),
        caption: t('caption'),
        description: t('description'),
      }}
      //headerImage={<HeaderImage />}
    >
                  <div className={clsx('content-wrapper')}>
                  <a
                    href="https://pandoras.finance"
                    target="_blank"
                    className={clsx('flex items-center text-lg text-red-400 opacity-80 hover:text-red-400 hover:opacity-100')}
                  >
                    {t('coming-soon')}
                    <HeartIcon className={clsx('h-5 w-5 ml-2')} />
                  </a>
                  </div>
     <PandorasContents />
    </Page>
  );
}

export default PandorasPage;
export const getStaticProps: GetStaticProps = async ({locale}) => {

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};

