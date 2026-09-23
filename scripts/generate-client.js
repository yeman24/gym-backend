import { execSync } from "node:child_process";
import path from "node:path";
import fs from "node:fs";

console.log("Generating Prisma client...");
execSync("npx prisma generate", { stdio: "inherit" });

const clientTs = path.resolve(process.cwd(), "generated/prisma/client.ts");
const clientJs = path.resolve(process.cwd(), "generated/prisma/client.js");

if (fs.existsSync(clientTs)) {
  console.log("Bundling client.ts to client.js for native Node.js ESM execution...");
  execSync(
    `npx esbuild "${clientTs}" --bundle --platform=node --format=esm --packages=external --outfile="${clientJs}"`,
    { stdio: "inherit" }
  );
  console.log("Prisma client.js generated successfully!");
}
