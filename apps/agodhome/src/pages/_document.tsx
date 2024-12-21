import { Head, Html, Main, NextScript } from 'next/document';

function Document({ locale }) {

  return (
    <Html lang={locale || 'es'}>
      <Head />
      <body>
        <div id="skip-navigation" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
