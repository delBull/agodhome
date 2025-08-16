
import type { ComponentProps } from 'react';

export function PaperAirplaneIcon(props: ComponentProps<'svg'>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
      />
    </svg>
  );
}
