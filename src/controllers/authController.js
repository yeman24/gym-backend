import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { prisma } from "../config/db.js";
import { env } from "../config/env.js";
import { sendSuccess } from "../utils/response.js";

const loginSchema = z.object({ email: z.string().email(), password: z.string().min(1) });
export async function login(req, res) {
  const input = loginSchema.parse(req.body);
  const user = await prisma.adminUser.findUnique({ where: { email: input.email } });
  if (!user || !(await bcrypt.compare(input.password, user.hashedPassword))) return res.status(401).json({ success: false, data: null, message: "Incorrect email or password." });
  const token = jwt.sign({ id: user.id, email: user.email }, env.JWT_SECRET, { expiresIn: "8h" });
  sendSuccess(res, { token, user: { id: user.id, email: user.email } }, "Welcome back.");
}
