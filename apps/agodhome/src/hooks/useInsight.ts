import { useCallback, useState, useEffect } from 'react';

interface InsightProps {
  slug: string;
}

interface ReactionParams {
  type: string;
  section?: string;
}

export default function useInsight({ slug }: InsightProps) {
  const [data, setData] = useState(() => {
    // Intentar cargar datos del localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`insight-${slug}`);
      if (stored) {
        return JSON.parse(stored);
      }
    }
    
    // Estado inicial si no hay datos guardados
    return {
      meta: {
        views: 0,
        shares: 0,
        reactions: 0,
        reactionsDetail: {
          CLAPPING: 0,
          AMAZED: 0,
          THINKING: 0
        }
      },
      metaUser: {
        reactionsDetail: {
          CLAPPING: 0,
          AMAZED: 0,
          THINKING: 0
        }
      }
    };
  });

  // Guardar cambios en localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`insight-${slug}`, JSON.stringify(data));
    }
  }, [data, slug]);

  const addReaction = useCallback(
    ({ type, section }: ReactionParams) => {
      try {
        setData(prevData => ({
          ...prevData,
          meta: {
            ...prevData.meta,
            reactions: (prevData.meta.reactions || 0) + 1,
            reactionsDetail: {
              ...prevData.meta.reactionsDetail,
              [type]: (prevData.meta.reactionsDetail[type] || 0) + 1
            }
          },
          metaSection: {
            ...prevData.metaSection,
            [section || 'default']: {
              reactionsDetail: {
                ...((prevData.metaSection?.[section || 'default']?.reactionsDetail) || {}),
                [type]: ((prevData.metaSection?.[section || 'default']?.reactionsDetail?.[type]) || 0) + 1
              }
            }
          }
        }));
      } catch (error) {
        console.error('Error al añadir reacción:', error);
      }
    },
    []
  );

  const addShare = useCallback(
    ({ type }: { type: string }) => {
      try {
        if (!data?.meta) {
          console.error('No hay datos de meta disponibles');
          return;
        }

        const currentShares = data.meta.shares || 0;

        const updatedData = {
          ...data,
          meta: {
            ...data.meta,
            shares: currentShares + 1
          }
        };

        console.log('Actualizando shares:', { type, updatedData });

      } catch (error) {
        console.error('Error al añadir share:', error);
      }
    },
    [data]
  );

  return {
    isLoading: false,
    data,
    addReaction,
    addShare
  };
}

