import { prisma } from "../config/db.js";
import { sendSuccess } from "../utils/response.js";
import { z } from "zod";

export async function listPlans(_req, res) { sendSuccess(res, await prisma.membershipPlan.findMany({ orderBy: { price: "asc" } })); }
export async function listTrainers(_req, res) { sendSuccess(res, await prisma.trainer.findMany({ orderBy: { name: "asc" } })); }
export async function listClasses(_req, res) { sendSuccess(res, await prisma.gymClass.findMany({ include: { trainer: true, _count: { select: { bookings: true } } }, orderBy: { id: "asc" } })); }
export async function createInquiry(req, res) {
  const inquiry = await prisma.contactInquiry.create({ data: req.body });
  sendSuccess(res, inquiry, "Thanks — we’ll be in touch shortly.", 201);
}

const bookingSchema = z.object({ gymClassId: z.coerce.number().int().positive(), name: z.string().trim().min(2), email: z.string().email(), phone: z.string().trim().optional() });

export async function createBooking(req, res, next) {
  try {
    const input = bookingSchema.parse(req.body);
    const booking = await prisma.$transaction(async (tx) => {
      const gymClass = await tx.gymClass.findUnique({ where: { id: input.gymClassId }, include: { trainer: true, _count: { select: { bookings: true } } } });
      if (!gymClass) { const error = new Error("That class could not be found."); error.statusCode = 404; throw error; }
      if (gymClass._count.bookings >= gymClass.capacity) { const error = new Error("This class is full. Please choose another session."); error.statusCode = 409; throw error; }
      try {
        return await tx.classBooking.create({ data: input });
      } catch (error) {
        if (error.code === "P2002") { const duplicate = new Error("You already have a booking for this class."); duplicate.statusCode = 409; throw duplicate; }
        throw error;
      }
    });
    sendSuccess(res, { bookingId: booking.id, classId: booking.gymClassId }, "Your spot is booked. See you there!", 201);
  } catch (error) {
    if (error instanceof z.ZodError) { error.statusCode = 400; error.message = "Please check your booking details and try again."; }
    next(error);
  }
}
