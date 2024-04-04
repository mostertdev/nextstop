/* eslint-disable @next/next/no-page-custom-font */

import { type FC } from "react";

const HeadLinkTags: FC = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" sizes="192x192" href="/assets/ns-icon.png" />
      <link rel="apple-touch-icon" href="/assets/ns-icon.png" />
      <link rel="mask-icon" href="/assets/ns-icon.png" color="black" />
    </>
  );
};

export default HeadLinkTags;
