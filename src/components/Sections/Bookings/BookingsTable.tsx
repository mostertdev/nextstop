import { type FC, useState } from "react";

import BookingsTableHead from "./BookingsTableHead";
import BookingsTableItem from "./BookingsTableItem";
import UpdateBookingModal from "../../Modals/UpdateBookingModal";
import DeleteBookingModal from "../../Modals/DeleteBookingModal";

import type { Package, Booking } from "@prisma/client";

interface BookingsTableProps {
  bookings?: Booking[] & { package?: Package };
  refetch: () => void;
}

const BookingsTable: FC<BookingsTableProps> = ({ bookings, refetch }) => {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="relative overflow-x-auto rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <table className="w-full text-left text-sm text-[#1D1D1D] rtl:text-right">
        <BookingsTableHead />

        <tbody>
          {bookings?.map((b) => {
            return (
              <BookingsTableItem
                key={b.id}
                booking={b}
                handleUpdate={() => {
                  setSelectedBooking(b);
                  setShowUpdateModal(true);
                }}
                handleDelete={() => {
                  setSelectedBooking(b);
                  setShowDeleteModal(true);
                }}
              />
            );
          })}
        </tbody>
      </table>

      {showUpdateModal && (
        <UpdateBookingModal
          close={() => setShowUpdateModal(false)}
          fetch={refetch}
        />
      )}

      {showDeleteModal && (
        <DeleteBookingModal close={() => setShowDeleteModal(false)} />
      )}
    </div>
  );
};

export default BookingsTable;
