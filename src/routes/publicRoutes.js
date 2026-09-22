import { Router } from "express";
import { z } from "zod";
import { listClasses, listPlans, listTrainers, createInquiry, createBooking } from "../controllers/publicController.js";

const router = Router();
router.get("/plans", listPlans);
router.get("/trainers", listTrainers);
router.get("/classes", listClasses);
router.post("/bookings", createBooking);
router.post("/inquiries", (req, res, next) => { try { req.body = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(10) }).parse(req.body); next(); } catch (e) { next(e); } }, createInquiry);
export default router;
