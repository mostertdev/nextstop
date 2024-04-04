import { type FC } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

import Button from "~/components/Base/Button";

interface BookingsLinksProps {
  link?: string;
}

const BookingsLinks: FC<BookingsLinksProps> = ({ link }) => {
  const handleCopyLink = () => {
    void navigator.clipboard.writeText(
      `https://nextstop-demo.vercel.app/${link}`,
    );

    toast.dismiss();
    toast.success("Link has been copied!", {
      position: "top-center",
    });
  };

  return (
    <section className="w-full rounded-xl bg-[#1D1D1D] px-10 py-6 text-[#FFFFFF]">
      <div className="flex flex-col pb-4">
        <span className="text-xs font-light">Booking Link</span>
        <span className="text-lg font-semibold">
          nextstop-demo.vercel.app/{link}
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
