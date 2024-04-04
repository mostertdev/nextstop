import { type FC } from "react";
import Image from "next/image";

import { FaBed, FaBath } from "react-icons/fa";

interface BookingFormStep1Props {
  _?: never;
}

const BookingFormStep1: FC<BookingFormStep1Props> = () => {
  return (
    <div>
      <div className="flex items-center justify-between space-x-4 px-8">
        <div className="w-full">
          <label className="text-xs font-medium text-[#606060]">Check In</label>
          <div className="relative">
            <input
              type="date"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="text-xs font-medium text-[#606060]">
            Check Out
          </label>
          <div className="relative">
            <input
              type="date"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 pl-8">
        <h2 className="text-base font-medium text-[#606060]">
          Availabe Packages:
        </h2>
      </div>
      <div className="flex w-full items-start justify-start space-x-5 overflow-x-scroll px-8 py-5">
        <div className="group w-[320px] rounded-3xl border border-[#F3EFFD] bg-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Image
            src="https://www.discoverasr.com/content/dam/tal/media/images/properties/indonesia/jakarta/oakwood-hotel-apartments-taman-mini-jakarta/overview/OHATMJ-thumbnail.jpg.transform/ascott-lowres/image.jpg"
            alt="Social Content Picture"
            width={320}
            height={213}
            className="h-auto w-[320px] rounded-t-3xl"
          />

          <div className="w-[320px] px-6 pb-6 pt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center space-x-5">
                <div className="flex items-center justify-center space-x-1">
                  <FaBed className="size-4 text-[#1D1D1D]" />
                  <span className="text-sm font-medium text-[#1D1D1D]">2</span>
                </div>

                <div className="flex items-center justify-center space-x-1">
                  <FaBath className="size-3 text-[#1D1D1D]" />
                  <span className="text-sm font-medium text-[#1D1D1D]">1</span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-1">
                <span className="text-sm font-medium text-[#2F1A44]">
                  $50.00 / night
                </span>
              </div>
            </div>

            <p className="my-5 text-[10px] font-normal text-[#2F1A44]">
              a small room with a view of the city. a small room with a view of
              the city.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start justify-center">
                <span className="text-lg font-semibold text-[#2F1A44]">
                  $150.00
                </span>
                <span className="text-[8px] font-light text-[#2F1A44]">
                  for 7 nights
                </span>
              </div>

              <button className="rounded-md bg-[#1D1D1D] px-8 py-2 text-sm text-[#FFFFFF] shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-[#666666] hover:shadow-none">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFormStep1;
