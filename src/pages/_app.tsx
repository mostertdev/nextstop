import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

import { api } from "~/_utils/api";

import "react-toastify/dist/ReactToastify.css";
import "~/styles/globals.css";

const Application: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <ToastContainer newestOnTop pauseOnFocusLoss />
    </SessionProvider>
  );
};

export default api.withTRPC(Application);
