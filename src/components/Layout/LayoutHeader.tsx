import { type FC } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

import Logo from "~/components/Base/Logo";

const LayoutHeader: FC = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex items-center justify-between px-14 py-6">
      <Logo />

      {status === "authenticated" && (
        <div className="flex items-center justify-between space-x-2">
          <Image
            src={session?.user?.image ?? ""}
            alt="Profile Picture"
            width={100}
            height={50}
            className="size-14 rounded-full"
          />

          <div className="flex flex-col items-start justify-start">
            <span className="text-base font-semibold text-[#1D1D1D]">
              {session?.user.name}
            </span>

            <span onClick={() => signOut()}>
              <span className="cursor-pointer text-xs font-semibold text-[#666666] hover:underline">
                Sign Out
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutHeader;
