import localFont from 'next/font/local';

export const plusJakartaSans = localFont({
  src: [
    {
      path: './PlusJakartaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './PlusJakartaSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});
