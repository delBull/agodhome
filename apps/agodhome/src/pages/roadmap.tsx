import { useSimpleTranslations } from '@/hooks/useSimpleTranslations';
import TILContents from '@/contents/TIL';
import HeaderImage from '@/contents/TIL/HeaderImage';
import Page from '@/contents-layouts/Page';
import { GetStaticPropsContext } from 'next';

function TIL(): JSX.Element {
  const t = useSimpleTranslations('roadmap-page.header');

  return (
    <Page
      frontMatter={{
        title: t('title'),
        description: t('description'),
      }}
      headerImage={<HeaderImage />}
    >
      <TILContents />
    </Page>
  );
}

export default TIL;
export async function getStaticProps({locale}: GetStaticPropsContext) {
  
  
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
