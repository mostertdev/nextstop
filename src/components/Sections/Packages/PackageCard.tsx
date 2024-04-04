import { type FC } from "react";
import Image from "next/image";

import { FaBed, FaBath, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import { type Package } from "@prisma/client";

interface PackageCardProps {
  p: Package;
  handleUpdate: () => void;
  handleDelete: () => void;
}

const PackageCard: FC<PackageCardProps> = ({
  p,
  handleUpdate,
  handleDelete,
}) => {
  return (
    <div className="group w-[320px] rounded-3xl border border-[#F3EFFD] bg-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <Image
        src={p.image}
        alt="Preview"
        width={320}
        height={213}
        className="h-auto max-h-[200px] w-[320px] rounded-t-3xl"
      />

      <div className="w-[320px] px-6 pb-6 pt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center space-x-5">
            <div className="flex items-center justify-center space-x-1">
              <FaBed className="size-4 text-[#1D1D1D]" />
              <span className="text-sm font-semibold text-[#1D1D1D]">
                {p.bedrooms}
              </span>
            </div>

            <div className="flex items-center justify-center space-x-1">
              <FaBath className="size-3 text-[#1D1D1D]" />
              <span className="text-sm font-semibold text-[#1D1D1D]">
                {p.bathrooms}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-1">
            <span className="text-sm font-semibold text-[#2F1A44]">
              ${p.price.toFixed(2)} / night
            </span>
          </div>
        </div>

        <p className="my-4 text-[10px] font-normal text-[#2F1A44]">
          {p.description}
        </p>

        <div className="flex items-center justify-end space-x-5">
          <span onClick={handleUpdate}>
            <MdEdit className="size-5 cursor-pointer text-[#2F1A44] transition-all duration-300 ease-in-out hover:scale-125" />
          </span>

          <span onClick={handleDelete}>
            <FaTrash className="size-4 cursor-pointer text-[#2F1A44] transition-all duration-300 ease-in-out hover:scale-125" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
