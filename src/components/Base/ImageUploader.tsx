import { useState, type FC } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import { UploadButton } from "@uploadthing/react";
import { type AppFileRouter } from "~/server/uploadthing";

interface ImageUploaderProps {
  label: string;
  featuredImg?: string;
  hidePreview?: boolean;
  onChange: (value: string) => void;
}

const ImageUploader: FC<ImageUploaderProps> = ({
  label,
  featuredImg,
  onChange,
  hidePreview = false,
}) => {
  const [previewImage, setPreviewImage] = useState(featuredImg ?? "");

  return (
    <div className="w-full space-y-3 rounded-lg border border-gray-300 bg-gray-50 p-5 text-center text-base focus:outline-[#1D1D1D]">
      <label className="text-[#AFB1CC]">{label}</label>

      <UploadButton<AppFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (!res) return;
          setPreviewImage(res[0]?.url ?? "");
          onChange(res[0]?.url ?? "");
        }}
        onUploadError={(error: Error) => {
          toast.dismiss();
          toast.error(`Upload Failed! ${error.message}`, {
            position: "top-center",
          });
        }}
        className="ut-button:bg-[#1D1D1D]"
      />

      {previewImage && !hidePreview && (
        <Image
          src={previewImage}
          width={80}
          height={80}
          alt="Upload Preview"
          className="mx-auto rounded-full"
        />
      )}
    </div>
  );
};

export default ImageUploader;
