import { type FC } from "react";
import Link from "next/link";

import Button from "~/components/Base/Button";

interface BookingsLinksProps {
  _?: never;
}

const BookingsLinks: FC<BookingsLinksProps> = () => {
  const handleCopyLink = () => {
    void navigator.clipboard.writeText("nextstop-demo.vercel.app/flux-hotel");
  };

  return (
    <section className="w-full rounded-xl bg-[#1D1D1D] px-10 py-6 text-[#FFFFFF]">
      <div className="flex flex-col pb-4">
        <span className="text-xs font-light">Booking Link</span>
        <span className="text-lg font-semibold">
          nextstop-demo.vercel.app/flux-hotel
        </span>
      </div>

      <div className="max-w-[150px]">
        <Button invert onClickHandler={handleCopyLink}>
          Copy Link
        </Button>
      </div>

      <div className="pt-12">
        <Link href="/host/manager">
          <Button invert>Edit Branding & Packages</Button>
        </Link>
      </div>
    </section>
  );
};

export default BookingsLinks;
