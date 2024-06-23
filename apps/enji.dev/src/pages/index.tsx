import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
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
