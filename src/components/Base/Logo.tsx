import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: FC = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/ns-logo.png"
        alt="NextStop Logo"
        width={280}
        height={60}
        className="h-auto w-80"
      />
    </Link>
  );
};

export default Logo;
