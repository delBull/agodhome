import clsx from 'clsx';
import Link from 'next/link';

import type { PropsWithChildren } from 'react';
import { TPostFrontMatter } from '@/types';
import EmojiReaction from '@/components/EmojiReaction';

type ChipProps = {
  href: string;
};

function Chip({ href, children = null }: PropsWithChildren<ChipProps>) {
  return (
    <Link
      href={href}
      className={clsx(
        'bg-accent-600/[0.08] text-accent-600 inline-flex h-6 items-center gap-1 rounded-full px-2 text-[13px] font-medium',
        'dark:text-accent-400 dark:dark:bg-accent-400/10 dark:font-normal'
      )}
    >
      {children}
    </Link>
  );
}

interface PostFooterProps {
  tags: TPostFrontMatter['tags'];
  category: TPostFrontMatter['category'];
  postId: string;
}

function PostFooter({ tags, category, postId }: PostFooterProps) {
  console.log('PostFooter recibió postId:', postId);

  return (
    <div className={clsx('mt-24 flex flex-col gap-6')}>
      <div className={clsx('flex flex-wrap gap-x-1 gap-y-2')}>
        Posted on
        <Link
          href="/blog"
          className={clsx('text-accent-600 font-bold', 'dark:text-accent-400')}
        >
          {category}
        </Link>
        with tags:
        <div className={clsx('flex flex-wrap gap-1')}>
          {tags.map((tag) => (
            <Chip href="/blog" key={tag}>
              #{tag}
            </Chip>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-4">
        <EmojiReaction
          title="Claps"
          disabled={false}
          defaultImage="/assets/emojis/clapping-hands.png"
          animatedImage="/assets/emojis/clapping-hands-animated.png"
          disabledImage="/assets/emojis/love-you-gesture.png"
          reactionType="CLAPPING"
          onClick={() => {
            console.log('Clap reaction');
          }}
        />
        <EmojiReaction
          title="Wow"
          disabled={false}
          defaultImage="/assets/emojis/astonished-face.png"
          animatedImage="/assets/emojis/astonished-face-animated.png"
          disabledImage="/assets/emojis/star-struck.png"
          reactionType="AMAZED"
          onClick={() => {
            console.log('Wow reaction');
          }}
        />
        <EmojiReaction
          title="Hmm"
          disabled={false}
          defaultImage="/assets/emojis/face-with-monocle.png"
          animatedImage="/assets/emojis/face-with-monocle-animated.png"
          disabledImage="/assets/emojis/nerd-face.png"
          reactionType="THINKING"
          onClick={() => {
            console.log('Hmm reaction');
          }}
        />
      </div>
    </div>
  );
}

export default PostFooter;
