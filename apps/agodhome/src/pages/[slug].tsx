import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostData, getSortedPosts } from '@/lib/posts';
import Page from '@/contents-layouts/Page';
import PostLayout from '@/contents-layouts/Post';

interface BlogPostProps {
  frontMatter: any;
  content: string;
  slug: string;
  tableOfContents: any;
}

function BlogPost({ frontMatter, content, slug, tableOfContents }: BlogPostProps) {
  return (
    <Page
      frontMatter={frontMatter}
      showHeaderTitle={false}
      structuredData={{
        type: 'Article',
        data: {
          title: frontMatter.title,
          description: frontMatter.description,
          author: 'AGOD',
          publishDate: frontMatter.date,
          slug: slug,
        },
      }}
    >
      <PostLayout 
        content={content} 
        frontMatter={frontMatter}
        slug={slug}
        tableOfContents={tableOfContents}
      />
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getSortedPosts();
  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);

  return {
    props: {
      ...postData,
      slug: params?.slug,
    },
  };
};

export default BlogPost; 
