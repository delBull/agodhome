import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { jetbrainsMono } from '@/fonts/jetbrains-mono';
import { plusJakartaSans } from '@/fonts/plus-jakarta';

function Root({ children }: PropsWithChildren): JSX.Element {
  return (
    <div
      id="__root"
      className={clsx(jetbrainsMono.variable, plusJakartaSans.variable)}
    >
      {children}
    </div>
  );
}

export default Root;
