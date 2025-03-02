import { getSortedPosts } from '@/lib/posts';

import BlogContents from '@/contents/blog';
import HeaderImage from '@/contents/blog/HeaderImage';
import Page from '@/contents-layouts/Page';

import type { BlogContentsProps } from '@/contents/blog';
import type { GetStaticProps } from 'next';

type BlogProps = {
  posts: BlogContentsProps['posts'];
};

function Blog({ posts }: BlogProps): JSX.Element {
  return (
    <Page
      frontMatter={{
        title: 'Blog',
        description: 'Adéntrate en el mundo Blockchain.',
      }}
      headerImage={<HeaderImage />}
    >
      <BlogContents posts={posts} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async ({locale}) => {
  const allPostsData = getSortedPosts();

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
      posts: allPostsData,
    },
  };
};

export default Blog;
