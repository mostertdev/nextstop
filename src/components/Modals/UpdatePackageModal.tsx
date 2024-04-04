import { type FC, useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import Modal from "~/components/Base/Modal";
import ImageUploader from "~/components/Base/ImageUploader";

import { api } from "~/_utils/api";
import Button from "../Base/Button";
import { type Package } from "@prisma/client";

interface UpdatePackageModalProps {
  p?: Package;
  fetch: () => void;
  close: () => void;
}

const validationSchema = z.object({
  name: z.string(),
  description: z.string(),
  bedrooms: z.string(),
  bathrooms: z.string(),
  price: z.string(),
});
type FormData = z.infer<typeof validationSchema>;

const UpdatePackageModal: FC<UpdatePackageModalProps> = ({
  p,
  fetch,
  close,
}) => {
  const [packageThumbnail, setPackageThumbnail] = useState("");

  const { mutate: updatePackage, isPending } =
    api.package.updatePackage.useMutation({
      onSuccess: () => {
        toast.dismiss();
        toast.success("Package has been updated!", {
          position: "top-center",
        });

        reset();
        fetch();
        close();
      },
      onError: () => {
        toast.dismiss();
        toast.error("Something went wrong, please try again.", {
          position: "top-center",
        });
      },
    });

  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    updatePackage({
      packageId: p?.id ?? "",
      image: packageThumbnail,
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      bedrooms: parseInt(data.bedrooms),
      bathrooms: parseInt(data.bathrooms),
    });
  };

  useEffect(() => {
    reset({
      name: p?.name,
      description: p?.description,
      price: p?.price.toString(),
      bedrooms: p?.bedrooms.toString(),
      bathrooms: p?.bathrooms.toString(),
    });
    setPackageThumbnail(p?.image ?? "");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(formState.errors);
  }, [formState.errors]);

  return (
    <Modal>
      <section className="w-[550px] p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-center space-y-4">
            <h2 className="w-full text-xl font-medium text-[#2F1A44]">
              Update a Package
            </h2>

            <div className="relative w-full space-y-4">
              <input
                type="text"
                className="w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
                placeholder="Package Name"
                {...register("name", { required: true })}
              />

              <input
                type="number"
                className="w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#1D1D1D] focus:outline-[#1D1D1D]"
                placeholder="Price per Night"
                {...register("price", { required: true })}
              />

              <div className="flex items-center justify-between space-x-4">
                <input
                  type="number"
                  className="w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#1D1D1D] focus:outline-[#1D1D1D]"
                  placeholder="Bedrooms"
                  {...register("bedrooms", { required: true })}
                />
                <input
                  type="number"
                  className="w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#1D1D1D] focus:outline-[#1D1D1D]"
                  placeholder="Bathrooms"
                  {...register("bathrooms", { required: true })}
                />
              </div>

              <textarea
                rows={2}
                placeholder="Description"
                className="w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:outline-[#1D1D1D]"
                {...register("description", { required: true })}
              />

              <ImageUploader
                label="Upload a Thumbnail"
                featuredImg={packageThumbnail}
                onChange={setPackageThumbnail}
              />
            </div>

            <div className="flex w-full items-center justify-between space-x-5">
              <Button isLoading={isPending}>Save Changes</Button>

              <button onClick={close}>
                <span className="cursor-pointer pr-6 text-[#1D1D1D] hover:underline">
                  Cancel
                </span>
              </button>
            </div>
          </div>
        </form>
      </section>
    </Modal>
  );
};

export default UpdatePackageModal;
