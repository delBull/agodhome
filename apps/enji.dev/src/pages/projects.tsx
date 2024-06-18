import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'Redefiniendo el Futuro Financiero',
        description: 'En AGOD, estamos construyendo un ecosistema financiero sostenible y revolucionario que integra lo mejor de la tecnología blockchain con un compromiso inquebrantable con la regeneración económica y ambiental.',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
