import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import styles from '@/styles/CustomCard.module.css';

type CustomCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  additionalDesc: React.ReactNode; // Accepts JSX elements
  buttonText: string; // Texto del botón
  infoIcon: React.ReactNode;
};

function LinkCard({ icon, title, desc, additionalDesc, buttonText, infoIcon }: CustomCardProps) {
  return (
    <div
      className={clsx(
        'border-divider-light relative z-10 flex-1 rounded-2xl border bg-white',
        'dark:border-divider-dark dark:bg-opacity-0',
        'transition-transform duration-300 ease-in-out transform hover:translate-x-1', // Smooth movement effect
        styles.card // Aplica la clase CSS personalizada
      )}
    >
      <Link href="/intro">
        <div className="block w-full h-full">
          <div
            className={clsx(
              'border-divider-light absolute inset-x-0 inset-y-8 z-[-1] border-t',
              'dark:border-divider-dark'
            )}
          />
          <div
            className={clsx(
              'border-divider-light absolute inset-y-0 inset-x-8 z-[-1] border-l',
              'dark:border-divider-dark'
            )}
          />
          <div className={clsx('-mt-0.5')}>
            <div
              className={clsx(
                'mt-4 mr-2 ml-4 flex items-center gap-6 rounded-full bg-slate-100',
                'dark:bg-opacity-0'
              )}
            >
              <div className={clsx('-m-2')}>{icon}</div>
              <div
                className={clsx(
                  'truncate py-2 pr-4 text-sm font-bold text-slate-700',
                  'dark:text-slate-300'
                )}
              >
                {title}
              </div>
            </div>
          </div>
          <div
            className={clsx(
              'p-4 pl-12 text-sm text-slate-600',
              'dark:text-slate-400'
            )} style={{ fontSize: '18px', lineHeight: '1.2'}}
          >
            {desc}
          </div>
          <div
            className={clsx(
              'p-4 pl-12 text-sm text-slate-600',
              'dark:text-slate-300'
            )} style={{ fontSize: '18px', lineHeight: '1.2'}}
          >
            {additionalDesc}
          </div>
          <div className={clsx('flex absolute right-0 bottom-0 mr-10 mb-4')}>
            <span
              className={clsx(
                'rounded-lg bg-opacity-0 text-sm text-slate-600 ml-1', 'dark:text-slate-200',
            'hover:bg-opacity-0 transition-colors duration-300'
              )}
            >
              {buttonText}
            </span>
            {infoIcon}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default LinkCard;
