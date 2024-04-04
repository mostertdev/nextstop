import { type NextPage } from "next";

import Authentication from "~/components/Authentication/Autentication";
import Layout from "~/components/Layout/Layout";
import BookingsTable from "~/components/Sections/Bookings/BookingsTable";
import BookingsEmpty from "~/components/Sections/Bookings/BookingsEmpty";
import BookingsStats from "~/components/Sections/Bookings/BookingsStats";
import BookingsLinks from "~/components/Sections/Bookings/BookingsLinks";
import { api } from "~/_utils/api";

const HostPage: NextPage = () => {
  const { data: host, refetch } = api.host.fetchHost.useQuery();

  return (
    <Authentication>
      <Layout pageTitle="NextStop - Host Dashboard">
        <div className="flex items-start justify-between space-x-14 px-14 py-10">
          <section className="w-2/3">
            <BookingsTable bookings={host?.bookings} refetch={refetch} />
            {host?.bookings.length === 0 && <BookingsEmpty />}
          </section>

          <section className="w-1/3 space-y-8">
            <BookingsStats />
            <BookingsLinks link={host?.hostSlug ?? ""} />
          </section>
        </div>
      </Layout>
    </Authentication>
  );
};

export default HostPage;
