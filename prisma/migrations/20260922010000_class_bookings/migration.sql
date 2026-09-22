CREATE TABLE "ClassBooking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gymClassId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ClassBooking_gymClassId_fkey" FOREIGN KEY ("gymClassId") REFERENCES "GymClass" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "ClassBooking_gymClassId_email_key" ON "ClassBooking"("gymClassId", "email");
