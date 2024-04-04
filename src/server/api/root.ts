import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

import { hostRouter } from "~/server/api/routers/host";
import { packageRouter } from "~/server/api/routers/package";
import { bookingRouter } from "~/server/api/routers/booking";

export const appRouter = createTRPCRouter({
  host: hostRouter,
  package: packageRouter,
  booking: bookingRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
