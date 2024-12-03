import clsx from 'clsx';
import { m, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import useScrollSpy from '@/hooks/useScrollSpy';
import type { TTableOfContentsItem } from '@/types';

interface TableOfContentsLinkProps {
  title: string;
  depth?: number;
  slug?: string;
  active: boolean;
}

function TableOfContentsLink({ title, depth = 0, slug, active }: TableOfContentsLinkProps) {
  return (
    <li>
      <a
        href={`#${slug}`}
        data-section={slug}
        className={clsx(
          'block w-full transition-all duration-300',
          'my-1 relative',
          active
            ? [
                'bg-accent-600/10 text-accent-600 dark:bg-accent-400/10 dark:text-accent-400',
                'backdrop-blur-sm',
              ]
            : [
                'text-slate-600 dark:text-slate-400',
                'hover:bg-slate-200/50 hover:text-slate-700',
                'dark:hover:bg-slate-700/30 dark:hover:text-slate-300',
              ]
        )}
      >
        <span 
          className={clsx(
            'block py-2',
            'px-4',
            {
              'text-[14px] font-bold': depth === 0,
              'text-[13px] font-normal ml-4': depth === 1,
              'text-[12px] font-normal ml-6': depth === 2,
            },
            'transition-transform duration-300',
            active && 'transform translate-x-1'
          )}
        >
          {title}
        </span>
        {active && (
          <div className={clsx(
            'absolute left-0 top-0 h-full w-0.5 bg-accent-600',
            'dark:bg-accent-400'
          )} />
        )}
      </a>
    </li>
  );
}

function TableOfContents({ items }: { items: TTableOfContentsItem[] }) {
  const { currentSection } = useScrollSpy();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 200);
      setIsSticky(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!items.length) return null;

  return (
    <div className="hidden xl:block">
      <div
        className={clsx(
          'w-64 transition-all duration-200',
          'mr-16',
          isSticky ? 'sticky top-[100px]' : 'relative'
        )}
      >
        <nav
          aria-label="Tabla de contenidos"
          className={clsx(
            'border-divider-light rounded-xl border bg-white/70 backdrop-blur',
            'dark:border-divider-dark dark:bg-slate-900/80',
            'transition-all duration-300',
            'overflow-hidden'
          )}
        >
          <div
            className={clsx(
              'border-divider-light flex items-center justify-between border-b p-4',
              'dark:border-divider-dark'
            )}
          >
            <h2 className={clsx('text-sm font-bold text-slate-900', 'dark:text-slate-100')}>
              Contenido
            </h2>
            <AnimatePresence>
              {showScrollTop && (
                <m.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setShowScrollTop(false);
                  }}
                  className={clsx(
                    'text-accent-600 hover:text-accent-700 rounded-full px-2 py-1 text-xs',
                    'dark:text-accent-400 dark:hover:text-accent-300'
                  )}
                >
                  subir ↑
                </m.button>
              )}
            </AnimatePresence>
          </div>
          <div className={clsx('overflow-y-auto overflow-x-hidden max-h-[calc(100vh-200px)]')}>
            <ol className={clsx('flex flex-col py-2')}>
              {items.map((item) => (
                <TableOfContentsLink
                  key={item.url}
                  title={item.title}
                  depth={item.depth}
                  slug={item.slug}
                  active={currentSection === item.slug}
                />
              ))}
            </ol>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default TableOfContents;
