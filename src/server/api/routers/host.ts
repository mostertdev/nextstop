import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

export const hostRouter = createTRPCRouter({
  fetchHost: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
      include: {
        packages: true,
        bookings: {
          include: {
            package: true,
          },
        },
      },
    });
  }),

  fetchHostBySlug: publicProcedure
    .input(
      z.object({
        hostSlug: z.string(),
      }),
    )
    .query(({ input, ctx }) => {
      return ctx.db.user.findUnique({
        where: {
          hostSlug: input.hostSlug,
        },
        include: {
          packages: {
            include: {
              bookings: true,
            },
          },
        },
      });
    }),

  updateHost: protectedProcedure
    .input(
      z.object({
        hostName: z.string(),
        hostSlug: z.string(),
        hostLogo: z.string(),
      }),
    )
    .mutation(({ input, ctx }) => {
      return ctx.db.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          hostName: input.hostName,
          hostSlug: input.hostSlug,
          hostLogo: input.hostLogo,
        },
      });
    }),
});
