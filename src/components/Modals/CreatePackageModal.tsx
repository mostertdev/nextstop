import { type FC, useState } from "react";

import Modal from "~/components/Base/Modal";
import ImageUploader from "~/components/Base/ImageUploader";

interface CreatePackageModalProps {
  close: () => void;
}

const CreatePackageModal: FC<CreatePackageModalProps> = ({ close }) => {
  const [packageThumbnail, setPackageThumbnail] = useState<string>("");
  return (
    <Modal>
      <section className="w-[550px] p-10">
        <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-center space-y-4">
          <h2 className="w-full text-xl font-medium text-[#2F1A44]">
            Create a New Package
          </h2>

          <div className="relative w-full space-y-4">
            <input
              type="text"
              className="w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
              placeholder="Package Name"
            />

            <input
              type="text"
              className="w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
              placeholder="Price per Night"
            />

            <div className="flex items-center justify-between space-x-4">
              <input
                type="text"
                className="w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
                placeholder="Bedrooms"
              />
              <input
                type="text"
                className="w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
                placeholder="Bathrooms"
              />
            </div>

            <ImageUploader
              label="Upload a Thumbnail"
              featuredImg={packageThumbnail}
              onChange={setPackageThumbnail}
            />
          </div>

          <div className="flex w-full items-center justify-between space-x-5">
            <button className="rounded-md bg-[#1D1D1D] px-10 py-2 text-[#FFFFFF] shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-[#666666] hover:shadow-none">
              Create Package
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

export default CreatePackageModal;
