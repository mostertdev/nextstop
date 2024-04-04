import { type FC } from "react";

interface BaseButtonProps {
  children: React.ReactNode | React.ReactNode[] | string;
  invert?: boolean;
  isLoading?: boolean;
  onClickHandler?: () => void;
}

const BaseButton: FC<BaseButtonProps> = ({
  children: label,
  invert,
  isLoading,
  onClickHandler,
}) => {
  return (
    <button
      className={`${
        invert ? "bg-[#FFFFFF] text-[#1D1D1D]" : "bg-[#1D1D1D] text-[#F9F9F9]"
      } w-full rounded-md px-8 py-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-[#666666] hover:shadow-none`}
      onClick={onClickHandler}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default BaseButton;
