import { type FC } from "react";
import Head from "next/head";

interface PageMetaTagsProps {
  pageTitle: string;
  pageDescription?: string;
}

const PageMetaTags: FC<PageMetaTagsProps> = ({
  pageTitle,
  pageDescription,
}) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
    </Head>
  );
};

export default PageMetaTags;
