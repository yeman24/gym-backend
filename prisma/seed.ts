import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client.js";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  const password = await bcrypt.hash("admin123", 10);
  await prisma.adminUser.upsert({
    where: { email: "admin@ironhouse.fit" },
    update: { hashedPassword: password },
    create: { email: "admin@ironhouse.fit", hashedPassword: password },
  });

  const plans = await Promise.all([
    prisma.membershipPlan.upsert({ where: { id: 1 }, update: {}, create: { name: "Foundation", price: 39, durationInDays: 30, features: "24/7 gym access|All equipment|Free induction" } }),
    prisma.membershipPlan.upsert({ where: { id: 2 }, update: {}, create: { name: "Performance", price: 69, durationInDays: 30, features: "Everything in Foundation|Unlimited classes|Monthly PT check-in" } }),
    prisma.membershipPlan.upsert({ where: { id: 3 }, update: {}, create: { name: "Athlete", price: 89, durationInDays: 30, features: "Everything in Performance|2 PT sessions|Recovery suite access" } }),
  ]);

  const maya = await prisma.trainer.upsert({ where: { id: 1 }, update: {}, create: { name: "Maya Chen", bio: "Strength coach and former national-level powerlifter helping people build confidence under the bar.", specialty: "Strength & Conditioning", photoUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80" } });
  const leo = await prisma.trainer.upsert({ where: { id: 2 }, update: {}, create: { name: "Leo Martins", bio: "Movement specialist with a background in athletics, mobility, and sustainable performance.", specialty: "Athletic Performance", photoUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" } });

  if ((await prisma.gymClass.count()) === 0) {
    await prisma.gymClass.createMany({ data: [
      { title: "Engine Room", trainerId: maya.id, schedule: "Mon & Wed · 6:30 AM", capacity: 18, description: "A focused strength session for building a stronger base." },
      { title: "Athletic Flow", trainerId: leo.id, schedule: "Tue & Thu · 7:00 PM", capacity: 16, description: "Move better, jump higher, and leave feeling switched on." },
      { title: "Saturday Sweat", trainerId: maya.id, schedule: "Sat · 10:00 AM", capacity: 24, description: "A welcoming full-body session to start the weekend well." },
    ] });
  }
  if ((await prisma.member.count()) === 0) {
    await prisma.member.create({ data: { name: "Jordan Lee", email: "jordan@example.com", phone: "+44 7700 900123", membershipPlanId: plans[1].id } });
  }
  console.log("Seed complete. Admin: admin@ironhouse.fit / admin123");
}

main().finally(() => prisma.$disconnect());
