import { prisma } from "../config/db.js";
import { sendSuccess } from "../utils/response.js";

export async function listPlans(_req, res) { sendSuccess(res, await prisma.membershipPlan.findMany({ orderBy: { price: "asc" } })); }
export async function listTrainers(_req, res) { sendSuccess(res, await prisma.trainer.findMany({ orderBy: { name: "asc" } })); }
export async function listClasses(_req, res) { sendSuccess(res, await prisma.gymClass.findMany({ include: { trainer: true }, orderBy: { id: "asc" } })); }
export async function createInquiry(req, res) {
  const inquiry = await prisma.contactInquiry.create({ data: req.body });
  sendSuccess(res, inquiry, "Thanks — we’ll be in touch shortly.", 201);
}
