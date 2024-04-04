import { type FC } from "react";

const PackagesEmpty: FC = () => {
  return (
    <div className="mt-14 flex size-full items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-2 text-[#1D1D1D]">
        <h2 className="text-4xl font-bold">No Packages Yet</h2>

        <p className="max-w-sm p-0 text-center text-base">
          Add a package to start receiving bookings. Packages can be rooms,
          experiences, or services.
        </p>
      </div>
    </div>
  );
};

export default PackagesEmpty;
