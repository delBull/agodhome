import AgodKey from '@/contents/projects/agod-key';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';
import INOComponent from '../components/INOComponent';

function Agodkey() {
  return (
    <Page
      frontMatter={{
        title: 'AGOD Key y ASHARES',
        description: '¡Tus Pilares del Futuro en AGOD Ecosystem! AGOD Key y ASHARES son los componentes esenciales que re-definirán tu experiencia dentro de AGOD Ecosystem.',
      }}
      headerImage={<HeaderImage />}
    >
      <AgodKey />
    </Page>
  );
}

export default Agodkey;
