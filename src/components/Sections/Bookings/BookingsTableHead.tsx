import { type FC } from "react";

const BookingsTableHead: FC = () => {
  return (
    <thead className="text-xs uppercase text-[#1D1D1D]">
      <tr>
        <th scope="col" className="bg-[#F9F9F9] px-6 py-3">
          Guest
        </th>
        <th scope="col" className="px-6 py-3">
          Check-In
        </th>
        <th scope="col" className="px-6 py-3 ">
          Check-Out
        </th>
        <th scope="col" className="bg-[#F9F9F9] px-6 py-3">
          Package
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default BookingsTableHead;
