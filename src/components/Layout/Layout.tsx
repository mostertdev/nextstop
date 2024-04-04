import { type FC } from "react";

import PageMetaTags from "~/components/MetaData/PageMetaTags";
import LayoutHeader from "~/components/Layout/LayoutHeader";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode | React.ReactNode[];
  hideHeader?: boolean;
}

const Layout: FC<LayoutProps> = ({ pageTitle, children, hideHeader }) => {
  return (
    <div>
      <PageMetaTags pageTitle={pageTitle} />
      {!hideHeader && <LayoutHeader />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
