import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

export const bookingRouter = createTRPCRouter({
  fetchBookings: protectedProcedure.query(({ ctx }) => {
    return ctx.db.booking.findMany({
      where: {
        hostId: ctx.session.user.id,
      },
    });
  }),

  createBooking: publicProcedure
    .input(
      z.object({
        hostId: z.string(),
        packageId: z.string(),
        checkIn: z.string(),
        checkOut: z.string(),
        guestFullName: z.string(),
        guestEmail: z.string(),
        guestPhone: z.string(),
        guestNotes: z.string().optional(),
      }),
    )
    .mutation(({ input, ctx }) => {
      return ctx.db.booking.create({
        data: {
          hostId: input.hostId,
          packageId: input.packageId,
          checkIn: input.checkIn,
          checkOut: input.checkOut,
          guestFullName: input.guestFullName,
          guestEmail: input.guestEmail,
          guestPhone: input.guestPhone,
          guestNotes: input.guestNotes,
        },
      });
    }),

  updateBooking: protectedProcedure
    .input(
      z.object({
        bookingId: z.string(),
        packageId: z.string(),
        checkIn: z.string(),
        checkOut: z.string(),
      }),
    )
    .mutation(({ input, ctx }) => {
      return ctx.db.booking.update({
        where: {
          id: input.bookingId,
        },
        data: {
          packageId: input.packageId,
          checkIn: input.checkIn,
          checkOut: input.checkOut,
        },
      });
    }),

  deleteBooking: protectedProcedure
    .input(
      z.object({
        bookingId: z.string(),
      }),
    )
    .mutation(({ input, ctx }) => {
      return ctx.db.booking.delete({
        where: {
          id: input.bookingId,
        },
      });
    }),
});
