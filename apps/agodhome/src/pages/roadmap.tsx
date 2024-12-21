import TILContents from '@/contents/TIL';
import HeaderImage from '@/contents/TIL/HeaderImage';
import Page from '@/contents-layouts/Page';
import { GetStaticPropsContext } from 'next';

function TIL() {
  return (
    <Page
      frontMatter={{
          title: 'Roadmap',
          description: `El camino 2024 está trazado y en proceso`,
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
