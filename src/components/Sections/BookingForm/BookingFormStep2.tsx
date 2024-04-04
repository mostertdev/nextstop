import { type FC } from "react";
import Button from "~/components/Base/Button";

interface BookingFormStep2Props {
  _?: never;
}

const BookingFormStep2: FC<BookingFormStep2Props> = () => {
  return (
    <div className="px-8">
      <div className="mb-5">
        <h2 className="text-base font-medium text-[#606060]">
          Personal Information
        </h2>
      </div>

      <div className="space-y-4">
        <div className="w-full">
          <label className="text-xs font-medium text-[#606060]">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-xs font-medium text-[#606060]">Email</label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-xs font-medium text-[#606060]">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-xs font-medium text-[#606060]">
            Additional Notes
          </label>
          <div className="relative">
            <textarea className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]" />
          </div>
        </div>
      </div>

      <div className="mb-8 mt-4 h-0.5 bg-[#D5D5D5]" />

      <div className="mt-5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-[#1D1D1D]">$150.00</span>
          <span className="text-xs text-[#1D1D1D]">
            From <strong>12 Aug</strong> to <strong>19 Aug</strong>
          </span>
        </div>

        <div className="max-w-[175px]">
          <Button>Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export default BookingFormStep2;
