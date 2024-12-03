import frontMatter from 'front-matter';
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import type { TPostFrontMatter } from '@/types';

const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

export const getPostSlugs = () => {
  try {
    console.log('Reading directory:', postsDirectory);
    const fileNames = fs.readdirSync(postsDirectory);
    console.log('Found files:', fileNames);
    return fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => fileName.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
};

export const getPostData = async (slug: string) => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    console.log('Reading file:', fullPath);
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { attributes, body } = frontMatter(fileContents);
    console.log('Front matter:', attributes);

    const mdxSource = await serialize(body, {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
        format: 'mdx'
      }
    });

    return {
      frontMatter: attributes as TPostFrontMatter,
      content: mdxSource,
      tableOfContents: [],
    };
  } catch (error) {
    console.error('Error in getPostData:', error);
    throw error;
  }
};

export const getPostFrontMatter = (slug: string): TPostFrontMatter => {
  // read markdown file as string
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // use front-matter to parse the post metadata section
  const { attributes } = frontMatter<TPostFrontMatter>(fileContents);

  return attributes;
};

export const getSortedPosts = () => {
  const slugs = getPostSlugs();

  const allPostsData = slugs.map((slug) => {
    const data = getPostFrontMatter(slug);

    return {
      slug,
      frontMatter: data,
    };
  });

  // sort posts by date
  return allPostsData.sort(
    ({ frontMatter: { date: a } }, { frontMatter: { date: b } }) => {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    }
  );
};
