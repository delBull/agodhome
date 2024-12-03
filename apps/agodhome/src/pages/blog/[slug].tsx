import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostData, getSortedPosts } from '@/lib/posts';
import Page from '@/contents-layouts/Page';
import PostLayout from '@/contents-layouts/Post';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { TPostFrontMatter, TTableOfContents } from '@/types';

interface BlogPostProps {
  frontMatter: TPostFrontMatter;
  content: MDXRemoteSerializeResult;
  slug: string;
  tableOfContents: TTableOfContents;
}

function BlogPost({ frontMatter, content, slug, tableOfContents }: BlogPostProps) {
  return (
    <Page
      frontMatter={frontMatter}
      structuredData={JSON.stringify({
        type: 'Article',
        data: {
          title: frontMatter.title,
          description: frontMatter.description,
          author: 'AGOD',
          publishDate: frontMatter.date,
          slug: slug,
        },
      })}
    >
      <PostLayout 
        frontMatter={frontMatter}
        tableOfContents={tableOfContents}
      >
        <MDXRemote {...content} />
      </PostLayout>
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getSortedPosts();
  console.log('Available paths:', posts.map(p => p.slug));
  
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
