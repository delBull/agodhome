import useInsight from '@/hooks/useInsight';

type ReactionType = 'CLAPPING' | 'AMAZED' | 'THINKING';

export function useReactions(title: string, type: ReactionType) {
  const {
    data = {
      meta: { reactionsDetail: {} },
      metaUser: { reactionsDetail: {} }
    },
    addReaction,
  } = useInsight({
    slug: title,
    contentType: 'POST',
    contentTitle: title,
    countView: true
  });

  const handleReaction = () => {
    try {
      if (addReaction) {
        addReaction({ type, section: 'post' });
      }
    } catch (error) {
      console.error('Error al manejar la reacción:', error);
    }
  };

  return {
    count: data?.meta?.reactionsDetail?.[type] || 0,
    hasReacted: (data?.metaUser?.reactionsDetail?.[type] || 0) > 0,
    handleReaction
  };
} 
