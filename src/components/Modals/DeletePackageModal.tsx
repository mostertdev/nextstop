import { type FC } from "react";

import Modal from "~/components/Base/Modal";

interface DeletePackageModalProps {
  close?: () => void;
}

const DeletePackageModal: FC<DeletePackageModalProps> = ({ close }) => {
  return (
    <Modal>
      <section className="w-[550px] px-8 py-20">
        <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-center space-y-4">
          <h2 className="w-full text-xl font-medium text-[#2F1A44]">
            Delete a Package
          </h2>

          <p className="text-sm text-[#4B5563]">
            Are you really sure you want to do this?
            <br />
            This action cannot be undone and all bookings associated with this
            package will also be removed.
          </p>

          <div className="flex w-full items-center justify-between space-x-5">
            <button className="flex w-full cursor-pointer items-center justify-center space-x-1 rounded-xl bg-[#EF4444] px-8 py-2 text-[#FFFFFF] shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-[#B33B3B] hover:shadow-none">
              Delete Package
            </button>
            <span
              className="cursor-pointer pr-6 text-[#1D1D1D] hover:underline"
              onClick={close}
            >
              Cancel
            </span>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default DeletePackageModal;
