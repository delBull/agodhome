import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next';
import DaccessContents from '@/contents/projects/daccess';
import Page from '@/contents-layouts/Page';

function DaccessPage(): JSX.Element {
  const t = useTranslations('daccess-page.header');

  return (
    <Page
      frontMatter={{
        title: t('title'),
        caption: t('caption'),
        description: t('description'),
      }}
    >
                  <div className={clsx('content-wrapper')}>
                  <a
                    href="#"
                    target="_blank"
                    className={clsx('flex items-center text-lg text-red-400 opacity-80 hover:text-red-400 hover:opacity-100')}
                  >
                    {t('coming-soon')}
                  </a>
                  </div>
     <DaccessContents />
    </Page>
  );
}

export default DaccessPage;
export const getStaticProps: GetStaticProps = async ({locale}) => {

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};

