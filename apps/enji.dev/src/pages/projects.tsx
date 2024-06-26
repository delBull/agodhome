import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'El centro de la tecnología blockchain',
        description: 'AGOD Ecosystem es un centro tecnológico integral que aprovecha el poder de la tecnología blockchain para empoderar a individuos y empresas. Como el núcleo del ecosistema “Verge” con gran escalabilidad, AGOD ofrece una amplia gama de aplicaciones y servicios diseñados para simplificar y mejorar las interacciones digitales..',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
