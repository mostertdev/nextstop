import { type NextPage } from "next";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

import Layout from "~/components/Layout/Layout";
import Logo from "~/components/Base/Logo";
import Button from "~/components/Base/Button";

const LandingPage: NextPage = () => {
  const { status } = useSession();

  return (
    <Layout pageTitle="Welcome to NextStop" hideHeader>
      <div className="h-screen w-screen overflow-hidden">
        <div className="flex size-full items-stretch justify-stretch">
          <section className="flex size-full items-center justify-center p-8">
            <div className="flex flex-col space-y-12">
              <Logo />

              <div className="w-full max-w-md text-[#666666]">
                <span>Simplify your booking process.</span>
                <h2 className="text-4xl font-bold text-[#1D1D1D]">
                  Create, Share & Manage your bookings effortlessly!
                </h2>

                <p className="pt-8">
                  Our simple platform allows you to create personalised booking
                  forms quickly. Share your forms effortlessly and manage
                  submissions hassle-free. Start optimising your booking
                  experience today.
                </p>
              </div>

              <div className="max-w-[250px] pt-8">
                {status === "authenticated" && (
                  <Link href="/host">
                    <Button>Go to Dashboard</Button>
                  </Link>
                )}

                {status === "unauthenticated" && (
                  <Button onClickHandler={() => signIn()}>
                    Sign Up for Free
                  </Button>
                )}

                {status === "loading" && (
                  <div className="py-2 text-[#1D1D1D]">Loading...</div>
                )}
              </div>
            </div>
          </section>

          <section className="size-full shadow-2xl shadow-[#000000] transition-all duration-700 ease-in-out hover:scale-105">
            <div className="size-full bg-[url('/assets/ns-background.png')] bg-cover" />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
