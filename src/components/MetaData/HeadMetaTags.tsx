import { type FC } from "react";

const HeadMetaTags: FC = () => {
  return (
    <>
      <meta name="application-name" content="NextStop" />
      <meta name="theme-color" content="#1D1D1D" />
      <meta
        name="description"
        content="Simplify your booking process. Create, Share & Manage your bookings effortlessly!"
      />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
    </>
  );
};

export default HeadMetaTags;
