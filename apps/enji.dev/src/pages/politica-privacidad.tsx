import HeaderImage from '@/contents/blog/HeaderImage';
import Privacidad from '@/contents/privacidad';
import Page from '@/contents-layouts/Page';



function PoliticaPrivacidad() {
  return (
    <Page
      frontMatter={{
        title: 'Política de Privacidad',
        description: 'Adéntrate en el mundo Blockchain.',
      }}
      headerImage={<HeaderImage />}
    >
      <Privacidad />
    </Page>
  );
}

export default PoliticaPrivacidad;
