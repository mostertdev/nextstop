import { createRouteHandler } from "uploadthing/next-legacy";

import { appFileRouter } from "~/server/uploadthing";

export default createRouteHandler({
  router: appFileRouter,
});
