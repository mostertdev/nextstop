import { type FC } from "react";

const BookingsEmpty: FC = () => {
  return (
    <div className="flex size-full items-center justify-center py-14">
      <div className="flex flex-col items-center justify-center space-y-2 text-[#1D1D1D]">
        <h2 className="text-4xl font-bold">No Bookings Here</h2>
        <p className="max-w-sm text-center">
          Update your booking form & share it with your guests to start
          receiving bookings.
        </p>
      </div>
    </div>
  );
};

export default BookingsEmpty;
