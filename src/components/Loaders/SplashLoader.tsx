import { type FC } from "react";
import Image from "next/image";

import PageMetaTags from "../MetaData/PageMetaTags";

const SplashLoader: FC = () => {
  return (
    <div>
      <PageMetaTags pageTitle="NextStop - Loading..." />

      <div className="h-screen w-screen bg-[#FFFFFF]">
        <div className="flex size-full items-center justify-center space-x-4">
          <Image
            src="/assets/ns-icon.png"
            alt="NextStop Icon"
            width={100}
            height={99}
            className="size-32"
          />
          <span className="text-4xl font-semibold text-[#1D1D1D]">
            loading...
          </span>
        </div>
      </div>
    </div>
  );
};

export default SplashLoader;
