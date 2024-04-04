import { type FC } from "react";

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

interface BookingsTableItemProps {
  _?: never;
}

const BookingsTableItem: FC<BookingsTableItemProps> = () => {
  return (
    <tr className="border-b border-[#D0D0D0]">
      <th
        scope="row"
        className="whitespace-nowrap bg-[#F9F9F9] px-6 py-4 font-medium text-gray-900"
      >
        <div className="flex w-full items-center justify-between">
          <span className="font-semibold">Dominic Mostert</span>
          <div className="flex items-center justify-center space-x-4">
            <MdEmail className="size-5 cursor-pointer text-[#1D1D1D] transition-all duration-300 ease-in-out hover:scale-125" />
            <FaPhone className="size-4 cursor-pointer text-[#1D1D1D] transition-all duration-300 ease-in-out hover:scale-125" />
          </div>
        </div>
      </th>
      <td className="px-6 py-4">01-01-2024</td>
      <td className="px-6 py-4">01-01-2024</td>
      <td className="bg-[#F9F9F9] px-6 py-4 ">Room #101</td>
      <td className="px-6 py-4 ">$225.00</td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-start space-x-5">
          <span className="cursor-pointer font-semibold hover:underline">
            Edit
          </span>
          <span className="cursor-pointer font-semibold hover:underline">
            Delete
          </span>
        </div>
      </td>
    </tr>
  );
};

export default BookingsTableItem;
