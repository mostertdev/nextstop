import { type FC } from "react";

const BookingFormStep3: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-[#1D1D1D]">
      <h1 className="pb-5 text-4xl font-semibold">🎉 Thank You!</h1>

      <p className="text-center font-light">
        Your booking has been confirmed. We&apos;ll send you an email with the
        details. See you soon!
      </p>
    </div>
  );
};

export default BookingFormStep3;
