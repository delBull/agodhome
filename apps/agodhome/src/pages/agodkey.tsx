import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next';
import AgodKeyContents from '@/contents/projects/agod-key';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';

function AgodKeyPage(): JSX.Element {
  const t = useTranslations('agod-key-page.header');

  return (
    <Page
      frontMatter={{
        title: t('title'),
        description: t('description'),
      }}
      headerImage={<HeaderImage />}
    >
      <AgodKeyContents />
    </Page>
  );
}

export default AgodKeyPage;
export const getStaticProps: GetStaticProps = async ({locale}) => {

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};

