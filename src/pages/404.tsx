import { type FC } from "react";

import PageMetaTags from "~/components/MetaData/PageMetaTags";

const Error404Page: FC = () => {
  return (
    <>
      <PageMetaTags pageTitle="404 Page Not Found" />

      <div className="bg-[#FFFFFF]">
        <div className="flex h-screen w-screen flex-col items-center justify-center space-y-20 p-4">
          <span className="animate-bounce text-8xl font-semibold uppercase text-[#1D1D1D]">
            404
          </span>

          <div className="space-y-5 text-center text-[#1D1D1D]">
            <h1 className="text-6xl font-semibold uppercase">PAGE NOT FOUND</h1>
            <p className="mx-auto max-w-2xl text-center text-xl">
              It seems like the page you are looking for does not exist. Please
              check the URL or go back to the homepage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404Page;
