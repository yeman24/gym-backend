import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";
const filename = databaseUrl.replace(/^file:/, "");
const database = new Database(path.resolve(process.cwd(), filename));
const migrationPath = path.resolve(process.cwd(), "prisma/migrations/20260922000000_init/migration.sql");
const alreadyInitialized = database.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='MembershipPlan'").get();
if (!alreadyInitialized) database.exec(fs.readFileSync(migrationPath, "utf8"));
database.close();
console.log("Database migration applied.");
