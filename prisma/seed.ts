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
    prisma.membershipPlan.upsert({
      where: { id: 1 },
      update: { name: "Day Pass", price: 18, durationInDays: 1, features: "Full day open gym access|Locker & towel service|Complimentary post-workout shake|Locker room & sauna access" },
      create: { id: 1, name: "Day Pass", price: 18, durationInDays: 1, features: "Full day open gym access|Locker & towel service|Complimentary post-workout shake|Locker room & sauna access" }
    }),
    prisma.membershipPlan.upsert({
      where: { id: 2 },
      update: { name: "Foundation", price: 45, durationInDays: 30, features: "24/7 gym access|All strength & cardio equipment|Induction & form screening|Locker room & sauna access" },
      create: { id: 2, name: "Foundation", price: 45, durationInDays: 30, features: "24/7 gym access|All strength & cardio equipment|Induction & form screening|Locker room & sauna access" }
    }),
    prisma.membershipPlan.upsert({
      where: { id: 3 },
      update: { name: "Performance", price: 75, durationInDays: 30, features: "Everything in Foundation|Unlimited coach-led classes|Monthly 1-on-1 PT check-in|IronHouse training app access" },
      create: { id: 3, name: "Performance", price: 75, durationInDays: 30, features: "Everything in Foundation|Unlimited coach-led classes|Monthly 1-on-1 PT check-in|IronHouse training app access" }
    }),
    prisma.membershipPlan.upsert({
      where: { id: 4 },
      update: { name: "Athlete Pro", price: 115, durationInDays: 30, features: "Everything in Performance|4 1-on-1 coaching sessions|Recovery suite & cold plunge|Custom nutrition & programming" },
      create: { id: 4, name: "Athlete Pro", price: 115, durationInDays: 30, features: "Everything in Performance|4 1-on-1 coaching sessions|Recovery suite & cold plunge|Custom nutrition & programming" }
    }),
  ]);

  await prisma.membershipPlan.deleteMany({ where: { id: { notIn: [1, 2, 3, 4] } } }).catch(() => {});

  const maya = await prisma.trainer.upsert({
    where: { id: 1 },
    update: { name: "Maya Chen", bio: "Strength coach and former national-level powerlifter helping people build confidence under the barbell.", specialty: "Strength & Conditioning", photoUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80" },
    create: { id: 1, name: "Maya Chen", bio: "Strength coach and former national-level powerlifter helping people build confidence under the barbell.", specialty: "Strength & Conditioning", photoUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80" }
  });

  const leo = await prisma.trainer.upsert({
    where: { id: 2 },
    update: { name: "Leo Martin", bio: "Movement specialist with a background in athletics, mobility, and sustainable power output.", specialty: "Athletic Performance", photoUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
    create: { id: 2, name: "Leo Martin", bio: "Movement specialist with a background in athletics, mobility, and sustainable power output.", specialty: "Athletic Performance", photoUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" }
  });

  const richard = await prisma.trainer.upsert({
    where: { id: 3 },
    update: { name: "Richard Davies", bio: "Welsh weightlifting coach with 8+ years coaching national contenders. Specialist in snatch and clean & jerk mechanics.", specialty: "Olympic Weightlifting", photoUrl: "/trainers/richard.jpg" },
    create: { id: 3, name: "Richard Davies", bio: "Welsh weightlifting coach with 8+ years coaching national contenders. Specialist in snatch and clean & jerk mechanics.", specialty: "Olympic Weightlifting", photoUrl: "/trainers/richard.jpg" }
  });

  const elena = await prisma.trainer.upsert({
    where: { id: 4 },
    update: { name: "Elena Rostova", bio: "Former national gymnast turned biomechanics coach, dedicated to bulletproofing joints, hip mobility, and movement longevity.", specialty: "Mobility & Structural Reset", photoUrl: "/trainers/elena.jpg" },
    create: { id: 4, name: "Elena Rostova", bio: "Former national gymnast turned biomechanics coach, dedicated to bulletproofing joints, hip mobility, and movement longevity.", specialty: "Mobility & Structural Reset", photoUrl: "/trainers/elena.jpg" }
  });

  const marcus = await prisma.trainer.upsert({
    where: { id: 5 },
    update: { name: "Marcus Vance", bio: "Ultra-endurance athlete and master coach with an obsessive eye for aerobic pacing, work capacity, and mental grit.", specialty: "Hyrox & Conditioning", photoUrl: "/trainers/marcus.jpg" },
    create: { id: 5, name: "Marcus Vance", bio: "Ultra-endurance athlete and master coach with an obsessive eye for aerobic pacing, work capacity, and mental grit.", specialty: "Hyrox & Conditioning", photoUrl: "/trainers/marcus.jpg" }
  });

  const classData = [
    { id: 1, title: "Engine Room", trainerId: maya.id, schedule: "Mon & Wed · 6:30 AM", capacity: 18, description: "A focused strength session for building a resilient, heavy compound base." },
    { id: 2, title: "Athletic Flow", trainerId: leo.id, schedule: "Tue & Thu · 7:00 PM", capacity: 16, description: "Move better, jump higher, and leave feeling energized and switched on." },
    { id: 3, title: "Barbell Club", trainerId: richard.id, schedule: "Mon & Thu · 5:30 PM", capacity: 12, description: "Technical Olympic lifting, snatch, clean & jerk, and heavy pull mechanics." },
    { id: 4, title: "Structural Reset & Mobility", trainerId: elena.id, schedule: "Wed & Sun · 6:00 PM", capacity: 16, description: "Deep hip and shoulder openers, thoracic mobility, and breathwork for longevity." },
    { id: 5, title: "Hyrox Race Engine", trainerId: marcus.id, schedule: "Fri · 6:00 PM", capacity: 20, description: "Ergometer intervals, weighted lunges, and sled work programmed for endurance athletes." },
    { id: 6, title: "Saturday Sweat", trainerId: maya.id, schedule: "Sat · 10:00 AM", capacity: 24, description: "A welcoming, high-volume full-body session to kick off the weekend." },
  ];

  for (const cls of classData) {
    await prisma.gymClass.upsert({
      where: { id: cls.id },
      update: cls,
      create: cls
    });
  }

  await prisma.gymClass.deleteMany({ where: { id: { notIn: classData.map(c => c.id) } } }).catch(() => {});

  if ((await prisma.member.count()) === 0) {
    await prisma.member.create({ data: { name: "Jordan Lee", email: "jordan@example.com", phone: "+44 7700 900123", membershipPlanId: plans[2].id } });
  }
  console.log("Seed complete. Admin: admin@ironhouse.fit / admin123");
}

main().finally(() => prisma.$disconnect());
