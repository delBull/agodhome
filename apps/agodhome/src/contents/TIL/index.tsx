import clsx from 'clsx';
import { useRouter } from 'next/router';
import es from './Contents.es.mdx';
import en from './Contents.en.mdx';

function TILContents(): JSX.Element {
  const router = useRouter();
  const { locale } = router;

  const Contents = locale === 'es' ? es : en;

  return (
    <div className={clsx('content-wrapper mdx-contents')}>
      <Contents />
    </div>
  );
}

export default TILContents;
