import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tw">
    <Head>
      <link rel="icon" href="/LOGO.svg" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  );
}
