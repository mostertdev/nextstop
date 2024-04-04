import { type FC } from "react";

import PageMetaTags from "~/components/MetaData/PageMetaTags";

const Error500Page: FC = () => {
  return (
    <div>
      <PageMetaTags pageTitle="500 Internal Server Error" />

      <div className="bg-[#FFFFFF]">
        <div className="flex h-screen w-screen flex-col items-center justify-center space-y-12 p-4 md:space-y-20">
          <span className="animate-bounce text-8xl font-semibold uppercase text-[#1D1D1D]">
            500
          </span>

          <div className="space-y-5 text-center text-[#1D1D1D]">
            <h1 className="text-4xl font-semibold uppercase md:text-6xl">
              INTERNAL SERVER ERROR
            </h1>
            <p className="mx-auto max-w-2xl text-center text-lg font-medium md:text-xl">
              It seems like something went horribly wrong... Sorry!
              <br />
              Please try again in a few minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error500Page;
