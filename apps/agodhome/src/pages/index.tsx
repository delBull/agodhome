import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';
import { GetStaticPropsContext } from 'next';

function Index(): JSX.Element {
  return (
    <>
      <Head
        title="AGOD · Ecosystem"
        description="Desbloquea el potencial de Blockchain"
        ogImage={`${getBaseUrl()}/assets/images/post2.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
export async function getStaticProps({locale}: GetStaticPropsContext) {
  
  
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
