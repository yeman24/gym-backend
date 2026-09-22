import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ success: false, data: null, message: "Authentication required." });
  try {
    req.admin = jwt.verify(token, env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ success: false, data: null, message: "Invalid or expired token." });
  }
}
