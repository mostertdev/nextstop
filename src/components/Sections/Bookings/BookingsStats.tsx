import { type FC } from "react";

import { MdShowChart } from "react-icons/md";

interface BookingsStatsProps {
  _?: never;
}

const BookingsStats: FC<BookingsStatsProps> = () => {
  return (
    <section className="w-full rounded-xl bg-[#1D1D1D] px-10 py-6 text-[#FFFFFF]">
      <div className="flex size-full items-center justify-between">
        <div className="flex flex-col items-start justify-start space-y-4">
          <div className="flex flex-col">
            <span className="text-sm font-light">This Month</span>
            <span className="text-lg font-semibold">0 bookings | $0.00</span>
          </div>

          <span className="text-xs font-light">0 bookings in total</span>
        </div>

        <MdShowChart className="size-24" />
      </div>
    </section>
  );
};

export default BookingsStats;
