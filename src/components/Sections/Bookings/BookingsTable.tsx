import { type FC, useState } from "react";

import BookingsTableHead from "./BookingsTableHead";
import BookingsTableItem from "./BookingsTableItem";
import UpdateBookingModal from "../../Modals/UpdateBookingModal";
import DeleteBookingModal from "../../Modals/DeleteBookingModal";

interface BookingsTableProps {
  _?: never;
}

const BookingsTable: FC<BookingsTableProps> = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="relative overflow-x-auto rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <table className="w-full text-left text-sm text-[#1D1D1D] rtl:text-right">
        <BookingsTableHead />

        <tbody>
          <BookingsTableItem />
        </tbody>
      </table>

      {showUpdateModal && (
        <UpdateBookingModal close={() => setShowUpdateModal(false)} />
      )}

      {showDeleteModal && (
        <DeleteBookingModal close={() => setShowDeleteModal(false)} />
      )}
    </div>
  );
};

export default BookingsTable;
