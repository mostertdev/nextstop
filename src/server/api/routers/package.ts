import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const packageRouter = createTRPCRouter({
  fetchPackages: protectedProcedure.query(({ ctx }) => {
    return ctx.db.package.findMany({
      where: {
        hostId: ctx.session.user.id,
      },
    });
  }),

  createPackage: protectedProcedure
    .input(
      z.object({
        image: z.string(),
        name: z.string(),
        description: z.string(),
        bedrooms: z.number(),
        bathrooms: z.number(),
        price: z.number(),
      }),
    )
    .mutation(({ input, ctx }) => {
      return ctx.db.package.create({
        data: {
          hostId: ctx.session.user.id,
          image: input.image,
          name: input.name,
          description: input.description,
          bedrooms: input.bedrooms,
          bathrooms: input.bathrooms,
          price: input.price,
        },
      });
    }),

  updatePackage: protectedProcedure
    .input(
      z.object({
        packageId: z.string(),
        image: z.string(),
        name: z.string(),
        description: z.string(),
        bedrooms: z.number(),
        bathrooms: z.number(),
        price: z.number(),
      }),
    )
    .mutation(({ input, ctx }) => {
      return ctx.db.package.update({
        where: {
          id: input.packageId,
        },
        data: {
          image: input.image,
          name: input.name,
          description: input.description,
          bedrooms: input.bedrooms,
          bathrooms: input.bathrooms,
          price: input.price,
        },
      });
    }),

  deletePackage: protectedProcedure
    .input(
      z.object({
        packageId: z.string(),
      }),
    )
    .mutation(({ input, ctx }) => {
      return ctx.db.package.delete({
        where: {
          id: input.packageId,
        },
      });
    }),
});
