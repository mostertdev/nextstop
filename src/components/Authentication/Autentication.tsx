import { type FC } from "react";
import { signIn, useSession } from "next-auth/react";

import SplashLoader from "../Loaders/SplashLoader";

interface AuthenticationProps {
  children: React.ReactNode;
}

const Authentication: FC<AuthenticationProps> = ({ children }) => {
  const { status } = useSession();

  if (status === "loading") {
    return <SplashLoader />;
  }

  if (status === "unauthenticated") {
    void signIn();
  }

  if (status === "authenticated") {
    return <div>{children}</div>;
  }

  return <div className="h-screen w-screen bg-[#FFFFFF]" />;
};

export default Authentication;
