import { type NextPage } from "next";
import { useState } from "react";

import Authentication from "~/components/Authentication/Autentication";
import Button from "~/components/Base/Button";
import Layout from "~/components/Layout/Layout";
import UpdateHostForm from "~/components/Forms/UpdateHostForm";
import PackageLoader from "~/components/Sections/Packages/PackageLoader";
import PackagesEmpty from "~/components/Sections/Packages/PackagesEmpty";
import CreatePackageModal from "~/components/Modals/CreatePackageModal";
import UpdatePackageModal from "~/components/Modals/UpdatePackageModal";
import DeletePackageModal from "~/components/Modals/DeletePackageModal";
import PackageCard from "~/components/Sections/Packages/PackageCard";

import { api } from "~/_utils/api";
import { type Package } from "@prisma/client";

const HostManagerPage: NextPage = () => {
  const {
    data: packages,
    refetch,
    isLoading,
  } = api.package.fetchPackages.useQuery();

  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <Authentication>
      <Layout pageTitle="NextStop - Host Manager">
        <div className="px-14 pt-10">
          <div className="flex items-start justify-between">
            <section className="w-1/3">
              <h2 className="mb-5 text-2xl font-semibold text-[#1D1D1D]">
                Host Branding
              </h2>
              <UpdateHostForm />
            </section>

            <section className="w-2/3">
              <header className="flex items-center justify-between">
                <h2 className="pl-12 text-2xl font-semibold text-[#1D1D1D]">
                  Package Manager
                </h2>
                <div className="max-w-[300px]">
                  <Button onClickHandler={() => setShowCreateModal(true)}>
                    + Add Package
                  </Button>
                </div>
              </header>

              {isLoading && <PackageLoader />}
              {packages?.length === 0 && <PackagesEmpty />}

              <div className="flex w-full items-start justify-start space-x-6 overflow-x-scroll px-12 py-10">
                {packages?.map((p) => {
                  return (
                    <PackageCard
                      key={p.id}
                      p={p}
                      handleUpdate={() => {
                        setSelectedPackage(p);
                        setShowUpdateModal(true);
                      }}
                      handleDelete={() => {
                        setSelectedPackage(p);
                        setShowDeleteModal(true);
                      }}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        {showCreateModal && (
          <CreatePackageModal
            close={() => setShowCreateModal(false)}
            fetch={refetch}
          />
        )}

        {showUpdateModal && selectedPackage && (
          <UpdatePackageModal
            p={selectedPackage}
            close={() => setShowUpdateModal(false)}
            fetch={refetch}
          />
        )}

        {showDeleteModal && selectedPackage && (
          <DeletePackageModal
            packageId={selectedPackage.id}
            close={() => setShowDeleteModal(false)}
            fetch={refetch}
          />
        )}
      </Layout>
    </Authentication>
  );
};

export default HostManagerPage;
