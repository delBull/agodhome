import { z } from 'zod';
import { getFrontMatter } from './utils.mjs';

const dateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

const PageFrontMatter = z.object({
  title: z.string(),
  description: z.string(),
  caption: z.string().optional(),
});

const PostFrontMatter = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().regex(dateRegex, 'Date format MUST be YYYY-MM-DD'),
  lang: z.enum(['ID', 'EN']),
  tags: z.array(z.string()),
  category: z.string({ description: 'asd' }),
});

const validate = (schema, object) => {
  try {
    schema.parse(object);
  } catch (err) {
    if (err instanceof z.ZodError) {
      throw new Error(JSON.stringify(err.issues, null, 2));
    }
  }
};

const withRestrictedFrontMatter = () => {
  return (_tree, file) => {
    // get front-matter
    const frontMatter = getFrontMatter(file.value);

    // get source directory
    const filePaths = file.history[0].split('\\');
    const directory = filePaths[filePaths.length - 2];

    if (directory === 'blog') {
      validate(PostFrontMatter, frontMatter);
    } else {
      validate(PageFrontMatter, frontMatter);
    }
  };
};

export default withRestrictedFrontMatter;