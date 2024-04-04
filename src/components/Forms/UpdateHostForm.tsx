import { type FC, useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

import ImageUploader from "~/components/Base/ImageUploader";
import Button from "~/components/Base/Button";

import { api } from "~/_utils/api";

const UpdateHostForm: FC = () => {
  const [hostName, setHostName] = useState("");
  const [hostLogo, setHostLogo] = useState("");
  const [hostLoaded, setHostLoaded] = useState(false);

  const { data: host } = api.host.fetchHost.useQuery();

  useEffect(() => {
    if (host && !hostLoaded) {
      setHostName(host.hostName ?? "");
      setHostLogo(host.hostLogo ?? "");
      setHostLoaded(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [host]);

  const { mutate: updateHost, isPending } = api.host.updateHost.useMutation({
    onSuccess: () => {
      toast.dismiss();
      toast.success("Host have been updated!", {
        position: "top-center",
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("Something went wrong, please try again.", {
        position: "top-center",
      });
    },
  });

  const handleUpdateHost = () => {
    if (!hostName) {
      toast.error("Host Name is required", {
        position: "top-center",
      });
      return;
    }

    if (!hostLogo) {
      toast.error("Host Logo is required", {
        position: "top-center",
      });
      return;
    }

    updateHost({
      hostName: hostName,
      hostLogo: hostLogo,
      hostSlug: hostName.toLowerCase().replace(/\s/g, "-"),
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <label className="text-xs text-[#606060]">Host Name</label>
        <div className="relative">
          <input
            type="text"
            className="w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[#2F1A44] focus:outline-[#1D1D1D]"
            value={hostName}
            onChange={(e) => setHostName(e.target.value)}
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
          <Button onClickHandler={handleUpdateHost} isLoading={isPending}>
            Save Changes
          </Button>
        </div>

        <Link href="/host">
          <span className="cursor-pointer pr-12 text-[#1D1D1D] hover:underline">
            Cancel
          </span>
        </Link>
      </div>
    </div>
  );
};

export default UpdateHostForm;
