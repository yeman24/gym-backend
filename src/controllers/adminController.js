import { z } from "zod";
import { prisma } from "../config/db.js";
import { sendError, sendSuccess } from "../utils/response.js";

const models = { members: "member", classes: "gymClass", trainers: "trainer", plans: "membershipPlan" };
const include = { members: { membershipPlan: true }, classes: { trainer: true } };
const schemas = {
  members: z.object({ name: z.string().trim().min(2), email: z.string().email(), phone: z.string().trim().optional(), membershipPlanId: z.coerce.number().int().positive() }),
  classes: z.object({ title: z.string().trim().min(2), trainerId: z.coerce.number().int().positive(), schedule: z.string().trim().min(2), capacity: z.coerce.number().int().positive(), description: z.string().trim().min(10) }),
  trainers: z.object({ name: z.string().trim().min(2), bio: z.string().trim().min(10), specialty: z.string().trim().min(2), photoUrl: z.string().url().optional().or(z.literal("")) }),
  plans: z.object({ name: z.string().trim().min(2), price: z.coerce.number().nonnegative(), durationInDays: z.coerce.number().int().positive(), features: z.string().trim().min(2) }),
};

function getResource(req, res) {
  const resource = req.params.resource;
  if (!models[resource]) { sendError(res, "Unknown admin resource.", 404); return null; }
  return resource;
}

function parseBody(resource, body, partial = false) {
  try { return (partial ? schemas[resource].partial() : schemas[resource]).parse(body); }
  catch (error) { error.statusCode = 400; error.message = "Please check the form fields and try again."; throw error; }
}

export async function listResource(req, res) {
  const resource = getResource(req, res);
  if (!resource) return;
  const model = prisma[models[resource]];
  const rows = await model.findMany({ ...(include[resource] ? { include: include[resource] } : {}), orderBy: { id: "desc" } });
  sendSuccess(res, rows);
}
export async function createResource(req, res) {
  const resource = getResource(req, res);
  if (!resource) return;
  const data = parseBody(resource, req.body);
  const row = await prisma[models[resource]].create({ data });
  sendSuccess(res, row, "Created.", 201);
}
export async function updateResource(req, res) {
  const resource = getResource(req, res);
  if (!resource) return;
  const data = parseBody(resource, req.body, true);
  sendSuccess(res, await prisma[models[resource]].update({ where: { id: Number(req.params.id) }, data }), "Updated.");
}
export async function deleteResource(req, res) {
  const resource = getResource(req, res);
  if (!resource) return;
  try {
    await prisma[models[resource]].delete({ where: { id: Number(req.params.id) } });
    sendSuccess(res, null, "Deleted.");
  } catch (error) {
    if (error.code === "P2003") return sendError(res, "This record is still in use. Reassign related records before deleting it.", 409);
    if (error.code === "P2025") return sendError(res, "Record not found.", 404);
    throw error;
  }
}
