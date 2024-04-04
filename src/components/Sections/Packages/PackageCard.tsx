import { type FC } from "react";
import Image from "next/image";

import { FaBed, FaBath, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

interface PackageCardProps {
  _?: never;
}

const PackageCard: FC<PackageCardProps> = () => {
  return (
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
              <span className="text-sm font-semibold text-[#1D1D1D]">2</span>
            </div>

            <div className="flex items-center justify-center space-x-1">
              <FaBath className="size-3 text-[#1D1D1D]" />
              <span className="text-sm font-semibold text-[#1D1D1D]">1</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-1">
            <span className="text-sm font-semibold text-[#2F1A44]">
              $150.00 / night
            </span>
          </div>
        </div>

        <p className="my-4 text-[10px] font-normal text-[#2F1A44]">
          a small room with a view of the city.
        </p>

        <div className="flex items-center justify-end space-x-5">
          <MdEdit className="size-5 cursor-pointer text-[#2F1A44] transition-all duration-300 ease-in-out hover:scale-125" />
          <FaTrash className="size-4 cursor-pointer text-[#2F1A44] transition-all duration-300 ease-in-out hover:scale-125" />
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
