import { type NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "~/components/Layout/Layout";
import BookingFormStep1 from "~/components/Sections/BookingForm/BookingFormStep1";
import BookingFormStep2 from "~/components/Sections/BookingForm/BookingFormStep2";
import BookingFormStep3 from "~/components/Sections/BookingForm/BookingFormStep3";

const BookingPage: NextPage = () => {
  const [step, setStep] = useState(1);

  return (
    <Layout pageTitle="NextStop - Flux Hotel Booking" hideHeader>
      <div className="flex h-screen w-screen flex-col items-center justify-center p-4">
        <Image
          src="/assets/ns-logo.png"
          alt="NextStop Logo"
          width={280}
          height={60}
          className="mb-10 h-auto w-80"
        />

        <div className="max-h-[550px] w-full max-w-md rounded-lg bg-[#F3F3F3] py-6">
          {step === 1 && <BookingFormStep1 />}
          {step === 2 && <BookingFormStep2 />}
          {step === 3 && <BookingFormStep3 />}
        </div>

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
