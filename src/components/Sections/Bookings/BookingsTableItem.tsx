import { type FC } from "react";
import Link from "next/link";

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

import type { Package, Booking } from "@prisma/client";

interface BookingsTableItemProps {
  booking: Booking & { package?: Package };
  handleUpdate: () => void;
  handleDelete: () => void;
}

const BookingsTableItem: FC<BookingsTableItemProps> = ({
  booking,
  handleUpdate,
  handleDelete,
}) => {
  const getTotalPrice = () => {
    const days = Math.ceil(
      Math.abs(booking.checkOut.getTime() - booking.checkIn.getTime()) /
        (1000 * 60 * 60 * 24),
    );

    return days * (booking.package?.price ?? 0);
  };

  return (
    <tr className="border-b border-[#D0D0D0]">
      <th className="whitespace-nowrap bg-[#F9F9F9] px-6 py-4 font-medium text-gray-900">
        <div className="flex w-full items-center justify-between space-x-4">
          <span className="font-semibold">{booking.guestFullName}</span>
          <div className="flex items-center justify-center space-x-4">
            <Link href={`mailto:${booking.guestEmail}`} target="_blank">
              <MdEmail className="size-5 cursor-pointer text-[#1D1D1D] transition-all duration-300 ease-in-out hover:scale-125" />
            </Link>

            <Link href={`tel:${booking.guestPhone}`} target="_blank">
              <FaPhone className="size-4 cursor-pointer text-[#1D1D1D] transition-all duration-300 ease-in-out hover:scale-125" />
            </Link>
          </div>
        </div>

        {booking.guestNotes && (
          <p className="max-w-xs py-2 text-xs text-slate-400">
            {booking.guestNotes}
          </p>
        )}
      </th>
      <td className="px-6 py-4">{booking.checkIn.toLocaleDateString()}</td>
      <td className="px-6 py-4">{booking.checkOut.toLocaleDateString()}</td>
      <td className="bg-[#F9F9F9] px-6 py-4">{booking.package?.name}</td>
      <td className="px-6 py-4">${getTotalPrice().toFixed(2)}</td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-start space-x-5">
          <span onClick={handleUpdate}>
            <span className="cursor-pointer font-semibold hover:underline">
              Edit
            </span>
          </span>

          <span onClick={handleDelete}>
            <span className="cursor-pointer font-semibold hover:underline">
              Delete
            </span>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default BookingsTableItem;
