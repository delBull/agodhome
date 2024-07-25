import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import bgcard from '@/assets/images/bus.jpg';

import styles from '@/styles/CustomCard.module.css';

type CustomCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  additionalDesc: React.ReactNode;
};

function BackgroundCard({ icon, title, desc, additionalDesc }: CustomCardProps) {
  return (
    <div
      className={clsx(
        'border-divider-light relative z-10 flex-1 rounded-2xl border bg-white h-96',
        'dark:border-divider-dark dark:bg-opacity-0',
        'transition-transform duration-300 ease-in-out transform hover:translate-x-1', // Smooth movement effect
        styles.card // Aplica la clase CSS personalizada
      )}
    >
      <Image
            src={bgcard}
            alt="AGOD Ecosystem"
            width={600}
            height={300}
            className={clsx(styles['floating-image'], ['bus w-full h-full md:-auto absolute opacity-40'])}
          /> 
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
            'mt-4 mr-2 ml-4 flex items-center gap-6 rounded-full bg-slate-0',
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
          'p-4 pl-12 text-sm text-slate-800',
          'dark:text-slate-100'
        )} style={{ fontSize: '18px', lineHeight: '1.2'}}
      >
        {additionalDesc}
      </div>
    </div>
  );
}

export default BackgroundCard;
