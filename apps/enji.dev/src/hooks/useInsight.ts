import { ContentType, ReactionType, ShareType } from '@prisma/client';
import { useEffect, useRef } from 'react';
import useSWR from 'swr';

import fetcher from '@/utils/fetcher';
import { postReaction, postShare, postView } from '@/helpers/api';

import type { TContentMetaDetail } from '@/types';

const INITIAL_VALUE: TContentMetaDetail = {
  meta: {
    views: 0,
    shares: 0,
    reactions: 0,
    reactionsDetail: {
      CLAPPING: 0,
      THINKING: 0,
      AMAZED: 0,
    },
  },
  metaUser: {
    reactionsDetail: {
      CLAPPING: 0,
      THINKING: 0,
      AMAZED: 0,
    },
  },
  metaSection: {},
};

export default function useInsight({
  slug,
  contentType,
  contentTitle,
  countView = true,
}: {
  slug: string;
  contentType: ContentType;
  contentTitle: string;
  countView?: boolean;
}) {
  const timer = useRef<Record<ReactionType, NodeJS.Timeout>>({
    CLAPPING: null,
    THINKING: null,
    AMAZED: null,
  });
  const count = useRef<Record<ReactionType, number>>({
    CLAPPING: 0,
    THINKING: 0,
    AMAZED: 0,
  });

  const { isLoading, data, mutate } = useSWR<TContentMetaDetail>(
    `/api/content/${slug}`,
    fetcher,
    {
      fallbackData: INITIAL_VALUE,
    }
  );

  useEffect(() => {
    if (countView) {
      postView({ slug, contentType, contentTitle });
    }
  }, [slug, contentType, contentTitle, countView]);

  const updateMeta = (newMeta: Partial<TContentMetaDetail['meta']>) => {
    mutate(
      {
        ...data,
        meta: {
          ...data.meta,
          ...newMeta,
        },
      },
      false
    );
  };

  const addShare = ({ type }: { type: ShareType }) => {
    updateMeta({ shares: data.meta.shares + 1 });
    postShare({ slug, contentType, contentTitle, type });
  };

  const addReaction = ({
    type,
    section,
  }: {
    type: ReactionType;
    section?: string;
  }) => {
    updateMeta({
      reactions: data.meta.reactions + 1,
      reactionsDetail: {
        ...data.meta.reactionsDetail,
        [type]: data.meta.reactionsDetail[type] + 1,
      },
    });

    count.current[type] += 1;
    clearTimeout(timer.current[type]);
    timer.current[type] = setTimeout(() => {
      postReaction({
        slug,
        contentType,
        contentTitle,
        type,
        count: count.current[type],
        section,
      }).finally(() => {
        count.current[type] = 0;
      });
    }, 500);
  };

  return {
    isLoading,
    data,
    addShare,
    addReaction,
  };
}

