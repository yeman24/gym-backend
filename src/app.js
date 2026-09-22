import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import publicRoutes from "./routes/publicRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export const app = express();
app.use(cors({ origin: env.FRONTEND_URL }));
app.use(express.json());
app.get("/api/health", (_req, res) => res.json({ success: true, data: { status: "ok" }, message: "IronHouse API is running." }));
app.use("/api", publicRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/admin", adminRoutes);
app.use((_req, res) => res.status(404).json({ success: false, data: null, message: "Route not found." }));
app.use(errorHandler);
