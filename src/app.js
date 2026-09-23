import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import publicRoutes from "./routes/publicRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export const app = express();

const configuredOrigins = env.FRONTEND_URL
  ? env.FRONTEND_URL.split(",").map((u) => u.trim())
  : [];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser requests (mobile apps, curl, etc.)
      if (!origin) return callback(null, true);

      // Match configured origin, wildcard, localhost, or any vercel.app deployment
      if (
        configuredOrigins.includes("*") ||
        configuredOrigins.includes(origin) ||
        origin.includes("localhost") ||
        origin.endsWith(".vercel.app")
      ) {
        return callback(null, true);
      }

      // Default allow for seamless connectivity between frontend and backend
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (_req, res) =>
  res.json({
    success: true,
    data: { status: "ok" },
    message: "IronHouse Backend API is live on Render."
  })
);

app.get("/api/health", (_req, res) =>
  res.json({
    success: true,
    data: { status: "ok" },
    message: "IronHouse API is running."
  })
);

app.use("/api", publicRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/admin", adminRoutes);
app.use((_req, res) =>
  res.status(404).json({ success: false, data: null, message: "Route not found." })
);
app.use(errorHandler);
