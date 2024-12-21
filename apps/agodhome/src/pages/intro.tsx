import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next';

function Intro() {
  const t = useTranslations('intro-page.main-section')
  return (
    <Page
      frontMatter={{
        title: t(`title`),
        description: t('description') ,
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Intro;
export const getStaticProps: GetStaticProps = async ({locale}) => {

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};
