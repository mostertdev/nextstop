import { type NextPage } from "next";
import { useState } from "react";
import Link from "next/link";

import Authentication from "~/components/Authentication/Autentication";
import Button from "~/components/Base/Button";
import Layout from "~/components/Layout/Layout";
import PackagesEmpty from "~/components/Sections/Packages/PackagesEmpty";
import PackageCard from "~/components/Sections/Packages/PackageCard";
import ImageUploader from "~/components/Base/ImageUploader";
import CreatePackageModal from "~/components/Modals/CreatePackageModal";
import UpdatePackageModal from "~/components/Modals/UpdatePackageModal";
import DeletePackageModal from "~/components/Modals/DeletePackageModal";

const HostManagerPage: NextPage = () => {
  const [hostLogo, setHostLogo] = useState("");

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

              <div className="space-y-8">
                <div>
                  <label className="text-xs text-[#606060]">Host Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
                    />
                  </div>
                </div>

                <div className="max-w-sm">
                  <ImageUploader
                    label="Upload a Logo"
                    featuredImg={hostLogo}
                    onChange={setHostLogo}
                  />
                </div>

                <div className="flex max-w-sm items-center justify-between">
                  <div className="w-full max-w-[225px]">
                    <Button>Save Changes</Button>
                  </div>

                  <Link href="/host">
                    <span className="cursor-pointer pr-12 text-[#1D1D1D] hover:underline">
                      Cancel
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            <section className="w-2/3">
              <header className="flex items-center justify-between">
                <h2 className="pl-12 text-2xl font-semibold text-[#1D1D1D]">
                  Package Manager
                </h2>
                <div className="max-w-[300px]">
                  <Button>+ Add Package</Button>
                </div>
              </header>

              <PackagesEmpty />

              <div className="flex w-full items-start justify-start space-x-6 overflow-x-scroll px-12 py-10">
                <PackageCard />
              </div>
            </section>
          </div>
        </div>

        {showCreateModal && (
          <CreatePackageModal close={() => setShowCreateModal(false)} />
        )}

        {showUpdateModal && (
          <UpdatePackageModal close={() => setShowUpdateModal(false)} />
        )}

        {showDeleteModal && (
          <DeletePackageModal close={() => setShowDeleteModal(false)} />
        )}
      </Layout>
    </Authentication>
  );
};

export default HostManagerPage;
