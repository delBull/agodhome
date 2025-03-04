import HeaderImage from '@/contents/blog/HeaderImage';
import Privacidad from '@/contents/privacidad';
import Page from '@/contents-layouts/Page';
import { useRouter } from 'next/router';

function PoliticaPrivacidad(): JSX.Element {
  const { locale } = useRouter();

  const titles = {
    es: 'Política de Privacidad',
    en: 'Privacy Policy',
  };

  const descriptions = {
    es: 'Adéntrate en el mundo Blockchain.',
    en: 'Enter the world of Blockchain.',
  };

  return (
    <Page
      frontMatter={{
        title: titles[locale],
        description: descriptions[locale],
      }}
      headerImage={<HeaderImage />}
    >
      <Privacidad />
    </Page>
  );
}

export default PoliticaPrivacidad;
