import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "~/components/Layout/Layout";

import { api } from "~/_utils/api";
import { FaBath, FaBed } from "react-icons/fa";
import Button from "~/components/Base/Button";
import SplashLoader from "~/components/Loaders/SplashLoader";
import { z } from "zod";

import BookingThankYou from "~/components/Sections/BookingForm/BookingThankYou";
import { toast } from "react-toastify";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  checkIn: z.string(),
  checkOut: z.string(),
  guestFullName: z.string(),
  guestEmail: z.string(),
  guestPhone: z.string(),
  guestNotes: z.string().optional(),
});
type FormData = z.infer<typeof validationSchema>;

const BookingPage: NextPage = () => {
  const router = useRouter();

  const { hostSlug } = router.query;
  const { data: host, isLoading } = api.host.fetchHostBySlug.useQuery({
    hostSlug: hostSlug as string,
  });

  const [selectedPackage, setSelectedPackage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const { mutate: createBooking, isPending } =
    api.booking.createBooking.useMutation({
      onSuccess: () => {
        toast.dismiss();
        toast.success("Booking has been submitted!", {
          position: "top-center",
        });

        setShowThankYou(true);
      },
      onError: () => {
        toast.dismiss();
        toast.error("Something went wrong, please try again.", {
          position: "top-center",
        });
      },
    });

  const { register, handleSubmit, watch } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!selectedPackage) {
      toast.error("Please select a package to proceed.", {
        position: "top-center",
      });
      return;
    }

    createBooking({
      hostId: host?.id ?? "",
      packageId: selectedPackage,
      ...data,
    });
  };

  const getCost = () => {
    return host?.packages.find((p) => p.id === selectedPackage)?.price ?? 0;
  };

  const getDays = () => {
    const checkIn = new Date(watch("checkIn"));
    const checkOut = new Date(watch("checkOut"));

    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  if (isLoading) {
    return <SplashLoader />;
  }

  return (
    <Layout pageTitle={`NextStop - ${host?.hostName}`} hideHeader>
      <div className="flex flex-col items-center justify-center p-4">
        <Image
          src={host?.hostLogo ?? "/assets/ns-logo.png"}
          alt="Logo"
          width={280}
          height={60}
          className="mb-5 h-20 w-auto"
        />

        {showThankYou ? (
          <BookingThankYou />
        ) : (
          <div className="w-full max-w-md rounded-lg bg-[#F3F3F3] py-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5 pl-8">
                <h1 className="text-2xl font-semibold text-[#1D1D1D]">
                  {host?.hostName}
                </h1>
                <span className="text-sm text-[#1D1D1D]">
                  Let&apos;s get you booked!
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between space-x-4 px-8">
                  <div className="w-full">
                    <label className="text-xs font-medium text-[#606060]">
                      Check In
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
                        {...register("checkIn", { required: true })}
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
                        {...register("checkOut", { required: true })}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pl-8">
                  <h2 className="text-sm font-medium text-[#1D1D1D]">
                    Availabe Packages:
                  </h2>
                </div>
                <div className="flex w-full items-start justify-start space-x-5 overflow-x-scroll px-8 py-5">
                  {host?.packages.map((p) => {
                    return (
                      <div key={p.id}>
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
                                  <span className="text-sm font-medium text-[#1D1D1D]">
                                    {p.bedrooms}
                                  </span>
                                </div>

                                <div className="flex items-center justify-center space-x-1">
                                  <FaBath className="size-3 text-[#1D1D1D]" />
                                  <span className="text-sm font-medium text-[#1D1D1D]">
                                    {p.bathrooms}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center justify-center space-x-1">
                                <span className="text-sm font-medium text-[#2F1A44]">
                                  ${p.price.toFixed()} / night
                                </span>
                              </div>
                            </div>

                            <p className="my-5 text-[10px] font-normal text-[#2F1A44]">
                              {p.description}
                            </p>

                            {selectedPackage === p.id ? (
                              <div className="text-center">
                                <span className="text-sm font-medium text-[#1D1D1D]">
                                  Selected!
                                </span>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center">
                                <Button
                                  onClickHandler={() =>
                                    setSelectedPackage(p.id)
                                  }
                                >
                                  Select Package
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="my-8 h-0.5 bg-[#D5D5D5]" />

              <div className="px-8">
                <div className="mb-5">
                  <h2 className="text-base font-medium text-[#606060]">
                    Personal Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="w-full">
                    <label className="text-xs font-medium text-[#606060]">
                      *Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
                        {...register("guestFullName", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-medium text-[#606060]">
                      *Email
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
                        {...register("guestEmail", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-medium text-[#606060]">
                      *Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
                        {...register("guestPhone", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-medium text-[#606060]">
                      Preferrences / Additional Notes
                    </label>
                    <div className="relative">
                      <textarea
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
                        {...register("guestNotes", { required: false })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-8 h-0.5 bg-[#D5D5D5]" />

              <div className="mt-5 flex items-center justify-between px-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#1D1D1D]">
                    ${(getCost() * getDays()).toFixed(2)}
                  </span>
                  <span className="text-xs text-[#1D1D1D]">
                    For {getDays()} nights
                  </span>
                </div>

                <div className="max-w-[225px]">
                  <Button isLoading={isPending}>Confirm & Book</Button>
                </div>
              </div>
            </form>
          </div>
        )}

        <span className="space-x-1 py-4 text-xs font-light text-[#ACACAC]">
          <span>powered by</span>
          <Link href="https://nextstop-demo.vercel.app" target="_blank">
            <span className="hover:text-[#1D1D1D] hover:underline">
              NextStop
            </span>
          </Link>
        </span>
      </div>
    </Layout>
  );
};

export default BookingPage;
