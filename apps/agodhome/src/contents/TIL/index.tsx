import clsx from 'clsx';

import Contents from '@/contents/TIL/Contents.mdx';

function TILContents(): JSX.Element {
  return (
    <div className={clsx('content-wrapper mdx-contents')}>
      <Contents />
    </div>
  );
}

export default TILContents;
