import { useSimpleTranslations } from '@/hooks/useSimpleTranslations';
import { GetStaticProps } from 'next';
import RaWalletContents from '@/contents/projects/ra-wallet';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page'; 

function RaWalletPage(): JSX.Element {
  const t = useSimpleTranslations('rawallet-page.header');

  return (
    <Page
      frontMatter={{
        title: t('title'),
        description: t('description'),
      }}
      headerImage={<HeaderImage />}
    >
     <RaWalletContents />
    </Page>
  );
}

export default RaWalletPage;
export const getStaticProps: GetStaticProps = async ({locale}) => {

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};

