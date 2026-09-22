import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";
const filename = databaseUrl.replace(/^file:/, "");
const database = new Database(path.resolve(process.cwd(), filename));
database.pragma("foreign_keys = ON");
const migrations = [
  ["MembershipPlan", "20260922000000_init/migration.sql"],
  ["ClassBooking", "20260922010000_class_bookings/migration.sql"],
];
for (const [marker, relativePath] of migrations) {
  const exists = database.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?").get(marker);
  if (!exists) database.exec(fs.readFileSync(path.resolve(process.cwd(), "prisma/migrations", relativePath), "utf8"));
}
database.close();
console.log("Database migration applied.");
