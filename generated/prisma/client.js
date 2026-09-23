var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// generated/prisma/client.ts
import * as path from "node:path";
import { fileURLToPath } from "node:url";

// generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.10.0",
  "engineVersion": "0edf323efd1d98336f3f0a68684b56f689b900d3",
  "activeProvider": "sqlite",
  "inlineSchema": 'generator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "sqlite"\n}\n\nmodel Member {\n  id               Int            @id @default(autoincrement())\n  name             String\n  email            String         @unique\n  phone            String?\n  membershipPlanId Int\n  membershipPlan   MembershipPlan @relation(fields: [membershipPlanId], references: [id])\n  joinDate         DateTime       @default(now())\n  createdAt        DateTime       @default(now())\n  updatedAt        DateTime       @updatedAt\n}\n\nmodel MembershipPlan {\n  id             Int      @id @default(autoincrement())\n  name           String\n  price          Float\n  durationInDays Int\n  features       String\n  members        Member[]\n  createdAt      DateTime @default(now())\n  updatedAt      DateTime @updatedAt\n}\n\nmodel Trainer {\n  id        Int        @id @default(autoincrement())\n  name      String\n  bio       String\n  specialty String\n  photoUrl  String?\n  classes   GymClass[]\n  createdAt DateTime   @default(now())\n  updatedAt DateTime   @updatedAt\n}\n\nmodel GymClass {\n  id          Int            @id @default(autoincrement())\n  title       String\n  trainerId   Int\n  trainer     Trainer        @relation(fields: [trainerId], references: [id])\n  schedule    String\n  capacity    Int\n  description String\n  bookings    ClassBooking[]\n  createdAt   DateTime       @default(now())\n  updatedAt   DateTime       @updatedAt\n}\n\nmodel ClassBooking {\n  id         Int      @id @default(autoincrement())\n  gymClassId Int\n  gymClass   GymClass @relation(fields: [gymClassId], references: [id], onDelete: Cascade)\n  name       String\n  email      String\n  phone      String?\n  createdAt  DateTime @default(now())\n\n  @@unique([gymClassId, email])\n}\n\nmodel ContactInquiry {\n  id        Int      @id @default(autoincrement())\n  name      String\n  email     String\n  message   String\n  createdAt DateTime @default(now())\n}\n\nmodel AdminUser {\n  id             Int      @id @default(autoincrement())\n  email          String   @unique\n  hashedPassword String\n  createdAt      DateTime @default(now())\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"Member":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"membershipPlanId","kind":"scalar","type":"Int"},{"name":"membershipPlan","kind":"object","type":"MembershipPlan","relationName":"MemberToMembershipPlan"},{"name":"joinDate","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null,"schema":null},"MembershipPlan":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"name","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"durationInDays","kind":"scalar","type":"Int"},{"name":"features","kind":"scalar","type":"String"},{"name":"members","kind":"object","type":"Member","relationName":"MemberToMembershipPlan"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null,"schema":null},"Trainer":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"name","kind":"scalar","type":"String"},{"name":"bio","kind":"scalar","type":"String"},{"name":"specialty","kind":"scalar","type":"String"},{"name":"photoUrl","kind":"scalar","type":"String"},{"name":"classes","kind":"object","type":"GymClass","relationName":"GymClassToTrainer"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null,"schema":null},"GymClass":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"title","kind":"scalar","type":"String"},{"name":"trainerId","kind":"scalar","type":"Int"},{"name":"trainer","kind":"object","type":"Trainer","relationName":"GymClassToTrainer"},{"name":"schedule","kind":"scalar","type":"String"},{"name":"capacity","kind":"scalar","type":"Int"},{"name":"description","kind":"scalar","type":"String"},{"name":"bookings","kind":"object","type":"ClassBooking","relationName":"ClassBookingToGymClass"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null,"schema":null},"ClassBooking":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"gymClassId","kind":"scalar","type":"Int"},{"name":"gymClass","kind":"object","type":"GymClass","relationName":"ClassBookingToGymClass"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null,"schema":null},"ContactInquiry":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"message","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null,"schema":null},"AdminUser":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"email","kind":"scalar","type":"String"},{"name":"hashedPassword","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null,"schema":null}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","members","_count","membershipPlan","Member.findUnique","Member.findUniqueOrThrow","Member.findFirst","Member.findFirstOrThrow","Member.findMany","data","Member.createOne","Member.createMany","Member.createManyAndReturn","Member.updateOne","Member.updateMany","Member.updateManyAndReturn","create","update","Member.upsertOne","Member.deleteOne","Member.deleteMany","having","_avg","_sum","_min","_max","Member.groupBy","Member.aggregate","MembershipPlan.findUnique","MembershipPlan.findUniqueOrThrow","MembershipPlan.findFirst","MembershipPlan.findFirstOrThrow","MembershipPlan.findMany","MembershipPlan.createOne","MembershipPlan.createMany","MembershipPlan.createManyAndReturn","MembershipPlan.updateOne","MembershipPlan.updateMany","MembershipPlan.updateManyAndReturn","MembershipPlan.upsertOne","MembershipPlan.deleteOne","MembershipPlan.deleteMany","MembershipPlan.groupBy","MembershipPlan.aggregate","trainer","gymClass","bookings","classes","Trainer.findUnique","Trainer.findUniqueOrThrow","Trainer.findFirst","Trainer.findFirstOrThrow","Trainer.findMany","Trainer.createOne","Trainer.createMany","Trainer.createManyAndReturn","Trainer.updateOne","Trainer.updateMany","Trainer.updateManyAndReturn","Trainer.upsertOne","Trainer.deleteOne","Trainer.deleteMany","Trainer.groupBy","Trainer.aggregate","GymClass.findUnique","GymClass.findUniqueOrThrow","GymClass.findFirst","GymClass.findFirstOrThrow","GymClass.findMany","GymClass.createOne","GymClass.createMany","GymClass.createManyAndReturn","GymClass.updateOne","GymClass.updateMany","GymClass.updateManyAndReturn","GymClass.upsertOne","GymClass.deleteOne","GymClass.deleteMany","GymClass.groupBy","GymClass.aggregate","ClassBooking.findUnique","ClassBooking.findUniqueOrThrow","ClassBooking.findFirst","ClassBooking.findFirstOrThrow","ClassBooking.findMany","ClassBooking.createOne","ClassBooking.createMany","ClassBooking.createManyAndReturn","ClassBooking.updateOne","ClassBooking.updateMany","ClassBooking.updateManyAndReturn","ClassBooking.upsertOne","ClassBooking.deleteOne","ClassBooking.deleteMany","ClassBooking.groupBy","ClassBooking.aggregate","ContactInquiry.findUnique","ContactInquiry.findUniqueOrThrow","ContactInquiry.findFirst","ContactInquiry.findFirstOrThrow","ContactInquiry.findMany","ContactInquiry.createOne","ContactInquiry.createMany","ContactInquiry.createManyAndReturn","ContactInquiry.updateOne","ContactInquiry.updateMany","ContactInquiry.updateManyAndReturn","ContactInquiry.upsertOne","ContactInquiry.deleteOne","ContactInquiry.deleteMany","ContactInquiry.groupBy","ContactInquiry.aggregate","AdminUser.findUnique","AdminUser.findUniqueOrThrow","AdminUser.findFirst","AdminUser.findFirstOrThrow","AdminUser.findMany","AdminUser.createOne","AdminUser.createMany","AdminUser.createManyAndReturn","AdminUser.updateOne","AdminUser.updateMany","AdminUser.updateManyAndReturn","AdminUser.upsertOne","AdminUser.deleteOne","AdminUser.deleteMany","AdminUser.groupBy","AdminUser.aggregate","AND","OR","NOT","id","email","hashedPassword","createdAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","name","message","gymClassId","phone","title","trainerId","schedule","capacity","description","updatedAt","bio","specialty","photoUrl","every","some","none","gymClassId_email","price","durationInDays","features","membershipPlanId","joinDate","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","increment","decrement","multiply","divide"]'),
  graph: "0AJKcAwFAADfAQAgggEAAN4BADCDAQAAAwAQhAEAAN4BADCFAQIAAAABhgEBAAAAAYgBQADEAQAhlAEBAMMBACGXAQEAzwEAIZ0BQADEAQAhqAECAMIBACGpAUAAxAEAIQEAAAABACAMBQAA3wEAIIIBAADeAQAwgwEAAAMAEIQBAADeAQAwhQECAMIBACGGAQEAwwEAIYgBQADEAQAhlAEBAMMBACGXAQEAzwEAIZ0BQADEAQAhqAECAMIBACGpAUAAxAEAIQIFAAC-AgAglwEAAO0BACADAAAAAwAgAQAABAAwAgAAAQAgAQAAAAMAIAEAAAABACADAAAAAwAgAQAABAAwAgAAAQAgAwAAAAMAIAEAAAQAMAIAAAEAIAMAAAADACABAAAEADACAAABACAJBQAAvQIAIIUBAgAAAAGGAQEAAAABiAFAAAAAAZQBAQAAAAGXAQEAAAABnQFAAAAAAagBAgAAAAGpAUAAAAABAQsAAAsAIAiFAQIAAAABhgEBAAAAAYgBQAAAAAGUAQEAAAABlwEBAAAAAZ0BQAAAAAGoAQIAAAABqQFAAAAAAQELAAANADABCwAADQAwCQUAALwCACCFAQIA5wEAIYYBAQDlAQAhiAFAAOYBACGUAQEA5QEAIZcBAQDzAQAhnQFAAOYBACGoAQIA5wEAIakBQADmAQAhAgAAAAEAIAsAABAAIAiFAQIA5wEAIYYBAQDlAQAhiAFAAOYBACGUAQEA5QEAIZcBAQDzAQAhnQFAAOYBACGoAQIA5wEAIakBQADmAQAhAgAAAAMAIAsAABIAIAIAAAADACALAAASACADAAAAAQAgEgAACwAgEwAAEAAgAQAAAAEAIAEAAAADACAGBAAAtwIAIBgAALgCACAZAAC7AgAgGgAAugIAIBsAALkCACCXAQAA7QEAIAuCAQAA3QEAMIMBAAAZABCEAQAA3QEAMIUBAgC3AQAhhgEBALgBACGIAUAAuQEAIZQBAQC4AQAhlwEBAMgBACGdAUAAuQEAIagBAgC3AQAhqQFAALkBACEDAAAAAwAgAQAAGAAwFwAAGQAgAwAAAAMAIAEAAAQAMAIAAAEAIAsDAADcAQAgggEAANoBADCDAQAAHwAQhAEAANoBADCFAQIAAAABiAFAAMQBACGUAQEAwwEAIZ0BQADEAQAhpQEIANsBACGmAQIAwgEAIacBAQDDAQAhAQAAABwAIAEAAAAcACALAwAA3AEAIIIBAADaAQAwgwEAAB8AEIQBAADaAQAwhQECAMIBACGIAUAAxAEAIZQBAQDDAQAhnQFAAMQBACGlAQgA2wEAIaYBAgDCAQAhpwEBAMMBACEBAwAAtgIAIAMAAAAfACABAAAgADACAAAcACADAAAAHwAgAQAAIAAwAgAAHAAgAwAAAB8AIAEAACAAMAIAABwAIAgDAAC1AgAghQECAAAAAYgBQAAAAAGUAQEAAAABnQFAAAAAAaUBCAAAAAGmAQIAAAABpwEBAAAAAQELAAAkACAHhQECAAAAAYgBQAAAAAGUAQEAAAABnQFAAAAAAaUBCAAAAAGmAQIAAAABpwEBAAAAAQELAAAmADABCwAAJgAwCAMAAKgCACCFAQIA5wEAIYgBQADmAQAhlAEBAOUBACGdAUAA5gEAIaUBCACnAgAhpgECAOcBACGnAQEA5QEAIQIAAAAcACALAAApACAHhQECAOcBACGIAUAA5gEAIZQBAQDlAQAhnQFAAOYBACGlAQgApwIAIaYBAgDnAQAhpwEBAOUBACECAAAAHwAgCwAAKwAgAgAAAB8AIAsAACsAIAMAAAAcACASAAAkACATAAApACABAAAAHAAgAQAAAB8AIAUEAACiAgAgGAAAowIAIBkAAKYCACAaAAClAgAgGwAApAIAIAqCAQAA1wEAMIMBAAAyABCEAQAA1wEAMIUBAgC3AQAhiAFAALkBACGUAQEAuAEAIZ0BQAC5AQAhpQEIANgBACGmAQIAtwEAIacBAQC4AQAhAwAAAB8AIAEAADEAMBcAADIAIAMAAAAfACABAAAgADACAAAcACALMQAA0AEAIIIBAADOAQAwgwEAAEIAEIQBAADOAQAwhQECAAAAAYgBQADEAQAhlAEBAMMBACGdAUAAxAEAIZ4BAQDDAQAhnwEBAMMBACGgAQEAzwEAIQEAAAA1ACANLgAA1QEAIDAAANYBACCCAQAA1AEAMIMBAAA3ABCEAQAA1AEAMIUBAgDCAQAhiAFAAMQBACGYAQEAwwEAIZkBAgDCAQAhmgEBAMMBACGbAQIAwgEAIZwBAQDDAQAhnQFAAMQBACECLgAAoAIAIDAAAKECACANLgAA1QEAIDAAANYBACCCAQAA1AEAMIMBAAA3ABCEAQAA1AEAMIUBAgAAAAGIAUAAxAEAIZgBAQDDAQAhmQECAMIBACGaAQEAwwEAIZsBAgDCAQAhnAEBAMMBACGdAUAAxAEAIQMAAAA3ACABAAA4ADACAAA5ACAKLwAA0wEAIIIBAADSAQAwgwEAADsAEIQBAADSAQAwhQECAMIBACGGAQEAwwEAIYgBQADEAQAhlAEBAMMBACGWAQIAwgEAIZcBAQDPAQAhAi8AAJ8CACCXAQAA7QEAIAsvAADTAQAgggEAANIBADCDAQAAOwAQhAEAANIBADCFAQIAAAABhgEBAMMBACGIAUAAxAEAIZQBAQDDAQAhlgECAMIBACGXAQEAzwEAIaQBAADRAQAgAwAAADsAIAEAADwAMAIAAD0AIAEAAAA7ACABAAAANwAgAQAAADUAIAsxAADQAQAgggEAAM4BADCDAQAAQgAQhAEAAM4BADCFAQIAwgEAIYgBQADEAQAhlAEBAMMBACGdAUAAxAEAIZ4BAQDDAQAhnwEBAMMBACGgAQEAzwEAIQIxAACeAgAgoAEAAO0BACADAAAAQgAgAQAAQwAwAgAANQAgAwAAAEIAIAEAAEMAMAIAADUAIAMAAABCACABAABDADACAAA1ACAIMQAAnQIAIIUBAgAAAAGIAUAAAAABlAEBAAAAAZ0BQAAAAAGeAQEAAAABnwEBAAAAAaABAQAAAAEBCwAARwAgB4UBAgAAAAGIAUAAAAABlAEBAAAAAZ0BQAAAAAGeAQEAAAABnwEBAAAAAaABAQAAAAEBCwAASQAwAQsAAEkAMAgxAACQAgAghQECAOcBACGIAUAA5gEAIZQBAQDlAQAhnQFAAOYBACGeAQEA5QEAIZ8BAQDlAQAhoAEBAPMBACECAAAANQAgCwAATAAgB4UBAgDnAQAhiAFAAOYBACGUAQEA5QEAIZ0BQADmAQAhngEBAOUBACGfAQEA5QEAIaABAQDzAQAhAgAAAEIAIAsAAE4AIAIAAABCACALAABOACADAAAANQAgEgAARwAgEwAATAAgAQAAADUAIAEAAABCACAGBAAAiwIAIBgAAIwCACAZAACPAgAgGgAAjgIAIBsAAI0CACCgAQAA7QEAIAqCAQAAzQEAMIMBAABVABCEAQAAzQEAMIUBAgC3AQAhiAFAALkBACGUAQEAuAEAIZ0BQAC5AQAhngEBALgBACGfAQEAuAEAIaABAQDIAQAhAwAAAEIAIAEAAFQAMBcAAFUAIAMAAABCACABAABDADACAAA1ACABAAAAOQAgAQAAADkAIAMAAAA3ACABAAA4ADACAAA5ACADAAAANwAgAQAAOAAwAgAAOQAgAwAAADcAIAEAADgAMAIAADkAIAouAACJAgAgMAAAigIAIIUBAgAAAAGIAUAAAAABmAEBAAAAAZkBAgAAAAGaAQEAAAABmwECAAAAAZwBAQAAAAGdAUAAAAABAQsAAF0AIAiFAQIAAAABiAFAAAAAAZgBAQAAAAGZAQIAAAABmgEBAAAAAZsBAgAAAAGcAQEAAAABnQFAAAAAAQELAABfADABCwAAXwAwCi4AAPsBACAwAAD8AQAghQECAOcBACGIAUAA5gEAIZgBAQDlAQAhmQECAOcBACGaAQEA5QEAIZsBAgDnAQAhnAEBAOUBACGdAUAA5gEAIQIAAAA5ACALAABiACAIhQECAOcBACGIAUAA5gEAIZgBAQDlAQAhmQECAOcBACGaAQEA5QEAIZsBAgDnAQAhnAEBAOUBACGdAUAA5gEAIQIAAAA3ACALAABkACACAAAANwAgCwAAZAAgAwAAADkAIBIAAF0AIBMAAGIAIAEAAAA5ACABAAAANwAgBQQAAPYBACAYAAD3AQAgGQAA-gEAIBoAAPkBACAbAAD4AQAgC4IBAADMAQAwgwEAAGsAEIQBAADMAQAwhQECALcBACGIAUAAuQEAIZgBAQC4AQAhmQECALcBACGaAQEAuAEAIZsBAgC3AQAhnAEBALgBACGdAUAAuQEAIQMAAAA3ACABAABqADAXAABrACADAAAANwAgAQAAOAAwAgAAOQAgAQAAAD0AIAEAAAA9ACADAAAAOwAgAQAAPAAwAgAAPQAgAwAAADsAIAEAADwAMAIAAD0AIAMAAAA7ACABAAA8ADACAAA9ACAHLwAA9QEAIIUBAgAAAAGGAQEAAAABiAFAAAAAAZQBAQAAAAGWAQIAAAABlwEBAAAAAQELAABzACAGhQECAAAAAYYBAQAAAAGIAUAAAAABlAEBAAAAAZYBAgAAAAGXAQEAAAABAQsAAHUAMAELAAB1ADAHLwAA9AEAIIUBAgDnAQAhhgEBAOUBACGIAUAA5gEAIZQBAQDlAQAhlgECAOcBACGXAQEA8wEAIQIAAAA9ACALAAB4ACAGhQECAOcBACGGAQEA5QEAIYgBQADmAQAhlAEBAOUBACGWAQIA5wEAIZcBAQDzAQAhAgAAADsAIAsAAHoAIAIAAAA7ACALAAB6ACADAAAAPQAgEgAAcwAgEwAAeAAgAQAAAD0AIAEAAAA7ACAGBAAA7gEAIBgAAO8BACAZAADyAQAgGgAA8QEAIBsAAPABACCXAQAA7QEAIAmCAQAAxwEAMIMBAACBAQAQhAEAAMcBADCFAQIAtwEAIYYBAQC4AQAhiAFAALkBACGUAQEAuAEAIZYBAgC3AQAhlwEBAMgBACEDAAAAOwAgAQAAgAEAMBcAAIEBACADAAAAOwAgAQAAPAAwAgAAPQAgCIIBAADGAQAwgwEAAIcBABCEAQAAxgEAMIUBAgAAAAGGAQEAwwEAIYgBQADEAQAhlAEBAMMBACGVAQEAwwEAIQEAAACEAQAgAQAAAIQBACAIggEAAMYBADCDAQAAhwEAEIQBAADGAQAwhQECAMIBACGGAQEAwwEAIYgBQADEAQAhlAEBAMMBACGVAQEAwwEAIQADAAAAhwEAIAEAAIgBADACAACEAQAgAwAAAIcBACABAACIAQAwAgAAhAEAIAMAAACHAQAgAQAAiAEAMAIAAIQBACAFhQECAAAAAYYBAQAAAAGIAUAAAAABlAEBAAAAAZUBAQAAAAEBCwAAjAEAIAWFAQIAAAABhgEBAAAAAYgBQAAAAAGUAQEAAAABlQEBAAAAAQELAACOAQAwAQsAAI4BADAFhQECAOcBACGGAQEA5QEAIYgBQADmAQAhlAEBAOUBACGVAQEA5QEAIQIAAACEAQAgCwAAkQEAIAWFAQIA5wEAIYYBAQDlAQAhiAFAAOYBACGUAQEA5QEAIZUBAQDlAQAhAgAAAIcBACALAACTAQAgAgAAAIcBACALAACTAQAgAwAAAIQBACASAACMAQAgEwAAkQEAIAEAAACEAQAgAQAAAIcBACAFBAAA6AEAIBgAAOkBACAZAADsAQAgGgAA6wEAIBsAAOoBACAIggEAAMUBADCDAQAAmgEAEIQBAADFAQAwhQECALcBACGGAQEAuAEAIYgBQAC5AQAhlAEBALgBACGVAQEAuAEAIQMAAACHAQAgAQAAmQEAMBcAAJoBACADAAAAhwEAIAEAAIgBADACAACEAQAgB4IBAADBAQAwgwEAAKABABCEAQAAwQEAMIUBAgAAAAGGAQEAAAABhwEBAMMBACGIAUAAxAEAIQEAAACdAQAgAQAAAJ0BACAHggEAAMEBADCDAQAAoAEAEIQBAADBAQAwhQECAMIBACGGAQEAwwEAIYcBAQDDAQAhiAFAAMQBACEAAwAAAKABACABAAChAQAwAgAAnQEAIAMAAACgAQAgAQAAoQEAMAIAAJ0BACADAAAAoAEAIAEAAKEBADACAACdAQAgBIUBAgAAAAGGAQEAAAABhwEBAAAAAYgBQAAAAAEBCwAApQEAIASFAQIAAAABhgEBAAAAAYcBAQAAAAGIAUAAAAABAQsAAKcBADABCwAApwEAMASFAQIA5wEAIYYBAQDlAQAhhwEBAOUBACGIAUAA5gEAIQIAAACdAQAgCwAAqgEAIASFAQIA5wEAIYYBAQDlAQAhhwEBAOUBACGIAUAA5gEAIQIAAACgAQAgCwAArAEAIAIAAACgAQAgCwAArAEAIAMAAACdAQAgEgAApQEAIBMAAKoBACABAAAAnQEAIAEAAACgAQAgBQQAAOABACAYAADhAQAgGQAA5AEAIBoAAOMBACAbAADiAQAgB4IBAAC2AQAwgwEAALMBABCEAQAAtgEAMIUBAgC3AQAhhgEBALgBACGHAQEAuAEAIYgBQAC5AQAhAwAAAKABACABAACyAQAwFwAAswEAIAMAAACgAQAgAQAAoQEAMAIAAJ0BACAHggEAALYBADCDAQAAswEAEIQBAAC2AQAwhQECALcBACGGAQEAuAEAIYcBAQC4AQAhiAFAALkBACENBAAAuwEAIBgAAMABACAZAAC7AQAgGgAAuwEAIBsAALsBACCJAQIAAAABigECAAAABIsBAgAAAASMAQIAAAABjQECAAAAAY4BAgAAAAGPAQIAAAABkAECAL8BACEOBAAAuwEAIBoAAL4BACAbAAC-AQAgiQEBAAAAAYoBAQAAAASLAQEAAAAEjAEBAAAAAY0BAQAAAAGOAQEAAAABjwEBAAAAAZABAQC9AQAhkQEBAAAAAZIBAQAAAAGTAQEAAAABCwQAALsBACAaAAC8AQAgGwAAvAEAIIkBQAAAAAGKAUAAAAAEiwFAAAAABIwBQAAAAAGNAUAAAAABjgFAAAAAAY8BQAAAAAGQAUAAugEAIQsEAAC7AQAgGgAAvAEAIBsAALwBACCJAUAAAAABigFAAAAABIsBQAAAAASMAUAAAAABjQFAAAAAAY4BQAAAAAGPAUAAAAABkAFAALoBACEIiQECAAAAAYoBAgAAAASLAQIAAAAEjAECAAAAAY0BAgAAAAGOAQIAAAABjwECAAAAAZABAgC7AQAhCIkBQAAAAAGKAUAAAAAEiwFAAAAABIwBQAAAAAGNAUAAAAABjgFAAAAAAY8BQAAAAAGQAUAAvAEAIQ4EAAC7AQAgGgAAvgEAIBsAAL4BACCJAQEAAAABigEBAAAABIsBAQAAAASMAQEAAAABjQEBAAAAAY4BAQAAAAGPAQEAAAABkAEBAL0BACGRAQEAAAABkgEBAAAAAZMBAQAAAAELiQEBAAAAAYoBAQAAAASLAQEAAAAEjAEBAAAAAY0BAQAAAAGOAQEAAAABjwEBAAAAAZABAQC-AQAhkQEBAAAAAZIBAQAAAAGTAQEAAAABDQQAALsBACAYAADAAQAgGQAAuwEAIBoAALsBACAbAAC7AQAgiQECAAAAAYoBAgAAAASLAQIAAAAEjAECAAAAAY0BAgAAAAGOAQIAAAABjwECAAAAAZABAgC_AQAhCIkBCAAAAAGKAQgAAAAEiwEIAAAABIwBCAAAAAGNAQgAAAABjgEIAAAAAY8BCAAAAAGQAQgAwAEAIQeCAQAAwQEAMIMBAACgAQAQhAEAAMEBADCFAQIAwgEAIYYBAQDDAQAhhwEBAMMBACGIAUAAxAEAIQiJAQIAAAABigECAAAABIsBAgAAAASMAQIAAAABjQECAAAAAY4BAgAAAAGPAQIAAAABkAECALsBACELiQEBAAAAAYoBAQAAAASLAQEAAAAEjAEBAAAAAY0BAQAAAAGOAQEAAAABjwEBAAAAAZABAQC-AQAhkQEBAAAAAZIBAQAAAAGTAQEAAAABCIkBQAAAAAGKAUAAAAAEiwFAAAAABIwBQAAAAAGNAUAAAAABjgFAAAAAAY8BQAAAAAGQAUAAvAEAIQiCAQAAxQEAMIMBAACaAQAQhAEAAMUBADCFAQIAtwEAIYYBAQC4AQAhiAFAALkBACGUAQEAuAEAIZUBAQC4AQAhCIIBAADGAQAwgwEAAIcBABCEAQAAxgEAMIUBAgDCAQAhhgEBAMMBACGIAUAAxAEAIZQBAQDDAQAhlQEBAMMBACEJggEAAMcBADCDAQAAgQEAEIQBAADHAQAwhQECALcBACGGAQEAuAEAIYgBQAC5AQAhlAEBALgBACGWAQIAtwEAIZcBAQDIAQAhDgQAAMoBACAaAADLAQAgGwAAywEAIIkBAQAAAAGKAQEAAAAFiwEBAAAABYwBAQAAAAGNAQEAAAABjgEBAAAAAY8BAQAAAAGQAQEAyQEAIZEBAQAAAAGSAQEAAAABkwEBAAAAAQ4EAADKAQAgGgAAywEAIBsAAMsBACCJAQEAAAABigEBAAAABYsBAQAAAAWMAQEAAAABjQEBAAAAAY4BAQAAAAGPAQEAAAABkAEBAMkBACGRAQEAAAABkgEBAAAAAZMBAQAAAAEIiQECAAAAAYoBAgAAAAWLAQIAAAAFjAECAAAAAY0BAgAAAAGOAQIAAAABjwECAAAAAZABAgDKAQAhC4kBAQAAAAGKAQEAAAAFiwEBAAAABYwBAQAAAAGNAQEAAAABjgEBAAAAAY8BAQAAAAGQAQEAywEAIZEBAQAAAAGSAQEAAAABkwEBAAAAAQuCAQAAzAEAMIMBAABrABCEAQAAzAEAMIUBAgC3AQAhiAFAALkBACGYAQEAuAEAIZkBAgC3AQAhmgEBALgBACGbAQIAtwEAIZwBAQC4AQAhnQFAALkBACEKggEAAM0BADCDAQAAVQAQhAEAAM0BADCFAQIAtwEAIYgBQAC5AQAhlAEBALgBACGdAUAAuQEAIZ4BAQC4AQAhnwEBALgBACGgAQEAyAEAIQsxAADQAQAgggEAAM4BADCDAQAAQgAQhAEAAM4BADCFAQIAwgEAIYgBQADEAQAhlAEBAMMBACGdAUAAxAEAIZ4BAQDDAQAhnwEBAMMBACGgAQEAzwEAIQuJAQEAAAABigEBAAAABYsBAQAAAAWMAQEAAAABjQEBAAAAAY4BAQAAAAGPAQEAAAABkAEBAMsBACGRAQEAAAABkgEBAAAAAZMBAQAAAAEDoQEAADcAIKIBAAA3ACCjAQAANwAgAoYBAQAAAAGWAQIAAAABCi8AANMBACCCAQAA0gEAMIMBAAA7ABCEAQAA0gEAMIUBAgDCAQAhhgEBAMMBACGIAUAAxAEAIZQBAQDDAQAhlgECAMIBACGXAQEAzwEAIQ8uAADVAQAgMAAA1gEAIIIBAADUAQAwgwEAADcAEIQBAADUAQAwhQECAMIBACGIAUAAxAEAIZgBAQDDAQAhmQECAMIBACGaAQEAwwEAIZsBAgDCAQAhnAEBAMMBACGdAUAAxAEAIaoBAAA3ACCrAQAANwAgDS4AANUBACAwAADWAQAgggEAANQBADCDAQAANwAQhAEAANQBADCFAQIAwgEAIYgBQADEAQAhmAEBAMMBACGZAQIAwgEAIZoBAQDDAQAhmwECAMIBACGcAQEAwwEAIZ0BQADEAQAhDTEAANABACCCAQAAzgEAMIMBAABCABCEAQAAzgEAMIUBAgDCAQAhiAFAAMQBACGUAQEAwwEAIZ0BQADEAQAhngEBAMMBACGfAQEAwwEAIaABAQDPAQAhqgEAAEIAIKsBAABCACADoQEAADsAIKIBAAA7ACCjAQAAOwAgCoIBAADXAQAwgwEAADIAEIQBAADXAQAwhQECALcBACGIAUAAuQEAIZQBAQC4AQAhnQFAALkBACGlAQgA2AEAIaYBAgC3AQAhpwEBALgBACENBAAAuwEAIBgAAMABACAZAADAAQAgGgAAwAEAIBsAAMABACCJAQgAAAABigEIAAAABIsBCAAAAASMAQgAAAABjQEIAAAAAY4BCAAAAAGPAQgAAAABkAEIANkBACENBAAAuwEAIBgAAMABACAZAADAAQAgGgAAwAEAIBsAAMABACCJAQgAAAABigEIAAAABIsBCAAAAASMAQgAAAABjQEIAAAAAY4BCAAAAAGPAQgAAAABkAEIANkBACELAwAA3AEAIIIBAADaAQAwgwEAAB8AEIQBAADaAQAwhQECAMIBACGIAUAAxAEAIZQBAQDDAQAhnQFAAMQBACGlAQgA2wEAIaYBAgDCAQAhpwEBAMMBACEIiQEIAAAAAYoBCAAAAASLAQgAAAAEjAEIAAAAAY0BCAAAAAGOAQgAAAABjwEIAAAAAZABCADAAQAhA6EBAAADACCiAQAAAwAgowEAAAMAIAuCAQAA3QEAMIMBAAAZABCEAQAA3QEAMIUBAgC3AQAhhgEBALgBACGIAUAAuQEAIZQBAQC4AQAhlwEBAMgBACGdAUAAuQEAIagBAgC3AQAhqQFAALkBACEMBQAA3wEAIIIBAADeAQAwgwEAAAMAEIQBAADeAQAwhQECAMIBACGGAQEAwwEAIYgBQADEAQAhlAEBAMMBACGXAQEAzwEAIZ0BQADEAQAhqAECAMIBACGpAUAAxAEAIQ0DAADcAQAgggEAANoBADCDAQAAHwAQhAEAANoBADCFAQIAwgEAIYgBQADEAQAhlAEBAMMBACGdAUAAxAEAIaUBCADbAQAhpgECAMIBACGnAQEAwwEAIaoBAAAfACCrAQAAHwAgAAAAAAABrwEBAAAAAQGvAUAAAAABBa8BAgAAAAG1AQIAAAABtgECAAAAAbcBAgAAAAG4AQIAAAABAAAAAAAAAAAAAAABrwEBAAAAAQUSAADMAgAgEwAAzwIAIKwBAADNAgAgrQEAAM4CACCyAQAAOQAgAxIAAMwCACCsAQAAzQIAILIBAAA5ACAAAAAAAAUSAADGAgAgEwAAygIAIKwBAADHAgAgrQEAAMkCACCyAQAANQAgCxIAAP0BADATAACCAgAwrAEAAP4BADCtAQAA_wEAMK4BAACAAgAgrwEAAIECADCwAQAAgQIAMLEBAACBAgAwsgEAAIECADCzAQAAgwIAMLQBAACEAgAwBYUBAgAAAAGGAQEAAAABiAFAAAAAAZQBAQAAAAGXAQEAAAABAgAAAD0AIBIAAIgCACADAAAAPQAgEgAAiAIAIBMAAIcCACABCwAAyAIAMAsvAADTAQAgggEAANIBADCDAQAAOwAQhAEAANIBADCFAQIAAAABhgEBAMMBACGIAUAAxAEAIZQBAQDDAQAhlgECAMIBACGXAQEAzwEAIaQBAADRAQAgAgAAAD0AIAsAAIcCACACAAAAhQIAIAsAAIYCACAJggEAAIQCADCDAQAAhQIAEIQBAACEAgAwhQECAMIBACGGAQEAwwEAIYgBQADEAQAhlAEBAMMBACGWAQIAwgEAIZcBAQDPAQAhCYIBAACEAgAwgwEAAIUCABCEAQAAhAIAMIUBAgDCAQAhhgEBAMMBACGIAUAAxAEAIZQBAQDDAQAhlgECAMIBACGXAQEAzwEAIQWFAQIA5wEAIYYBAQDlAQAhiAFAAOYBACGUAQEA5QEAIZcBAQDzAQAhBYUBAgDnAQAhhgEBAOUBACGIAUAA5gEAIZQBAQDlAQAhlwEBAPMBACEFhQECAAAAAYYBAQAAAAGIAUAAAAABlAEBAAAAAZcBAQAAAAEDEgAAxgIAIKwBAADHAgAgsgEAADUAIAQSAAD9AQAwrAEAAP4BADCuAQAAgAIAILIBAACBAgAwAAAAAAALEgAAkQIAMBMAAJYCADCsAQAAkgIAMK0BAACTAgAwrgEAAJQCACCvAQAAlQIAMLABAACVAgAwsQEAAJUCADCyAQAAlQIAMLMBAACXAgAwtAEAAJgCADAIMAAAigIAIIUBAgAAAAGIAUAAAAABmAEBAAAAAZoBAQAAAAGbAQIAAAABnAEBAAAAAZ0BQAAAAAECAAAAOQAgEgAAnAIAIAMAAAA5ACASAACcAgAgEwAAmwIAIAELAADFAgAwDS4AANUBACAwAADWAQAgggEAANQBADCDAQAANwAQhAEAANQBADCFAQIAAAABiAFAAMQBACGYAQEAwwEAIZkBAgDCAQAhmgEBAMMBACGbAQIAwgEAIZwBAQDDAQAhnQFAAMQBACECAAAAOQAgCwAAmwIAIAIAAACZAgAgCwAAmgIAIAuCAQAAmAIAMIMBAACZAgAQhAEAAJgCADCFAQIAwgEAIYgBQADEAQAhmAEBAMMBACGZAQIAwgEAIZoBAQDDAQAhmwECAMIBACGcAQEAwwEAIZ0BQADEAQAhC4IBAACYAgAwgwEAAJkCABCEAQAAmAIAMIUBAgDCAQAhiAFAAMQBACGYAQEAwwEAIZkBAgDCAQAhmgEBAMMBACGbAQIAwgEAIZwBAQDDAQAhnQFAAMQBACEHhQECAOcBACGIAUAA5gEAIZgBAQDlAQAhmgEBAOUBACGbAQIA5wEAIZwBAQDlAQAhnQFAAOYBACEIMAAA_AEAIIUBAgDnAQAhiAFAAOYBACGYAQEA5QEAIZoBAQDlAQAhmwECAOcBACGcAQEA5QEAIZ0BQADmAQAhCDAAAIoCACCFAQIAAAABiAFAAAAAAZgBAQAAAAGaAQEAAAABmwECAAAAAZwBAQAAAAGdAUAAAAABBBIAAJECADCsAQAAkgIAMK4BAACUAgAgsgEAAJUCADAAAi4AAKACACAwAAChAgAgAjEAAJ4CACCgAQAA7QEAIAAAAAAAAAWvAQgAAAABtQEIAAAAAbYBCAAAAAG3AQgAAAABuAEIAAAAAQsSAACpAgAwEwAArgIAMKwBAACqAgAwrQEAAKsCADCuAQAArAIAIK8BAACtAgAwsAEAAK0CADCxAQAArQIAMLIBAACtAgAwswEAAK8CADC0AQAAsAIAMAeFAQIAAAABhgEBAAAAAYgBQAAAAAGUAQEAAAABlwEBAAAAAZ0BQAAAAAGpAUAAAAABAgAAAAEAIBIAALQCACADAAAAAQAgEgAAtAIAIBMAALMCACABCwAAxAIAMAwFAADfAQAgggEAAN4BADCDAQAAAwAQhAEAAN4BADCFAQIAAAABhgEBAAAAAYgBQADEAQAhlAEBAMMBACGXAQEAzwEAIZ0BQADEAQAhqAECAMIBACGpAUAAxAEAIQIAAAABACALAACzAgAgAgAAALECACALAACyAgAgC4IBAACwAgAwgwEAALECABCEAQAAsAIAMIUBAgDCAQAhhgEBAMMBACGIAUAAxAEAIZQBAQDDAQAhlwEBAM8BACGdAUAAxAEAIagBAgDCAQAhqQFAAMQBACELggEAALACADCDAQAAsQIAEIQBAACwAgAwhQECAMIBACGGAQEAwwEAIYgBQADEAQAhlAEBAMMBACGXAQEAzwEAIZ0BQADEAQAhqAECAMIBACGpAUAAxAEAIQeFAQIA5wEAIYYBAQDlAQAhiAFAAOYBACGUAQEA5QEAIZcBAQDzAQAhnQFAAOYBACGpAUAA5gEAIQeFAQIA5wEAIYYBAQDlAQAhiAFAAOYBACGUAQEA5QEAIZcBAQDzAQAhnQFAAOYBACGpAUAA5gEAIQeFAQIAAAABhgEBAAAAAYgBQAAAAAGUAQEAAAABlwEBAAAAAZ0BQAAAAAGpAUAAAAABBBIAAKkCADCsAQAAqgIAMK4BAACsAgAgsgEAAK0CADAAAAAAAAAFEgAAvwIAIBMAAMICACCsAQAAwAIAIK0BAADBAgAgsgEAABwAIAMSAAC_AgAgrAEAAMACACCyAQAAHAAgAQMAALYCACAHhQECAAAAAYgBQAAAAAGUAQEAAAABnQFAAAAAAaUBCAAAAAGmAQIAAAABpwEBAAAAAQIAAAAcACASAAC_AgAgAwAAAB8AIBIAAL8CACATAADDAgAgCQAAAB8AIAsAAMMCACCFAQIA5wEAIYgBQADmAQAhlAEBAOUBACGdAUAA5gEAIaUBCACnAgAhpgECAOcBACGnAQEA5QEAIQeFAQIA5wEAIYgBQADmAQAhlAEBAOUBACGdAUAA5gEAIaUBCACnAgAhpgECAOcBACGnAQEA5QEAIQeFAQIAAAABhgEBAAAAAYgBQAAAAAGUAQEAAAABlwEBAAAAAZ0BQAAAAAGpAUAAAAABB4UBAgAAAAGIAUAAAAABmAEBAAAAAZoBAQAAAAGbAQIAAAABnAEBAAAAAZ0BQAAAAAEHhQECAAAAAYgBQAAAAAGUAQEAAAABnQFAAAAAAZ4BAQAAAAGfAQEAAAABoAEBAAAAAQIAAAA1ACASAADGAgAgBYUBAgAAAAGGAQEAAAABiAFAAAAAAZQBAQAAAAGXAQEAAAABAwAAAEIAIBIAAMYCACATAADLAgAgCQAAAEIAIAsAAMsCACCFAQIA5wEAIYgBQADmAQAhlAEBAOUBACGdAUAA5gEAIZ4BAQDlAQAhnwEBAOUBACGgAQEA8wEAIQeFAQIA5wEAIYgBQADmAQAhlAEBAOUBACGdAUAA5gEAIZ4BAQDlAQAhnwEBAOUBACGgAQEA8wEAIQkuAACJAgAghQECAAAAAYgBQAAAAAGYAQEAAAABmQECAAAAAZoBAQAAAAGbAQIAAAABnAEBAAAAAZ0BQAAAAAECAAAAOQAgEgAAzAIAIAMAAAA3ACASAADMAgAgEwAA0AIAIAsAAAA3ACALAADQAgAgLgAA-wEAIIUBAgDnAQAhiAFAAOYBACGYAQEA5QEAIZkBAgDnAQAhmgEBAOUBACGbAQIA5wEAIZwBAQDlAQAhnQFAAOYBACEJLgAA-wEAIIUBAgDnAQAhiAFAAOYBACGYAQEA5QEAIZkBAgDnAQAhmgEBAOUBACGbAQIA5wEAIZwBAQDlAQAhnQFAAOYBACEBBQACAgMFAQQAAwEDBgAAAQUAAgEFAAIFBAAIGAAJGQAKGgALGwAMAAAAAAAFBAAIGAAJGQAKGgALGwAMAAAFBAARGAASGQATGgAUGwAVAAAAAAAFBAARGAASGQATGgAUGwAVAgQAGzE6GAMEABouABcwPhkBLwAYATA_AAExQAAAAAUEAB8YACAZACEaACIbACMAAAAAAAUEAB8YACAZACEaACIbACMBLgAXAS4AFwUEACgYACkZACoaACsbACwAAAAAAAUEACgYACkZACoaACsbACwBLwAYAS8AGAUEADEYADIZADMaADQbADUAAAAAAAUEADEYADIZADMaADQbADUAAAAFBAA7GAA8GQA9GgA-GwA_AAAAAAAFBAA7GAA8GQA9GgA-GwA_AAAABQQARRgARhkARxoASBsASQAAAAAABQQARRgARhkARxoASBsASQYCAQcHAQgIAQkJAQoKAQwMAQ0OBA4PBQ8RARATBBEUBhQVARUWARYXBBwaBx0bDR4dAh8eAiAhAiEiAiIjAiMlAiQnBCUoDiYqAicsBCgtDykuAiovAiswBCwzEC00FjI2FzNBFzREFzVFFzZGFzdIFzhKBDlLHDpNFztPBDxQHT1RFz5SFz9TBEBWHkFXJEJYGENZGERaGEVbGEZcGEdeGEhgBElhJUpjGEtlBExmJk1nGE5oGE9pBFBsJ1FtLVJuGVNvGVRwGVVxGVZyGVd0GVh2BFl3Llp5GVt7BFx8L119GV5-GV9_BGCCATBhgwE2YoUBN2OGATdkiQE3ZYoBN2aLATdnjQE3aI8BBGmQAThqkgE3a5QBBGyVATltlgE3bpcBN2-YAQRwmwE6cZwBQHKeAUFznwFBdKIBQXWjAUF2pAFBd6YBQXioAQR5qQFCeqsBQXutAQR8rgFDfa8BQX6wAUF_sQEEgAG0AUSBAbUBSg"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("node:buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AdminUserScalarFieldEnum: () => AdminUserScalarFieldEnum,
  AnyNull: () => AnyNull2,
  ClassBookingScalarFieldEnum: () => ClassBookingScalarFieldEnum,
  ContactInquiryScalarFieldEnum: () => ContactInquiryScalarFieldEnum,
  DbNull: () => DbNull2,
  Decimal: () => Decimal2,
  GymClassScalarFieldEnum: () => GymClassScalarFieldEnum,
  JsonNull: () => JsonNull2,
  MemberScalarFieldEnum: () => MemberScalarFieldEnum,
  MembershipPlanScalarFieldEnum: () => MembershipPlanScalarFieldEnum,
  ModelName: () => ModelName,
  NullTypes: () => NullTypes2,
  NullsOrder: () => NullsOrder,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
  TrainerScalarFieldEnum: () => TrainerScalarFieldEnum,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  defineExtension: () => defineExtension,
  empty: () => empty2,
  getExtensionContext: () => getExtensionContext,
  join: () => join2,
  prismaVersion: () => prismaVersion,
  raw: () => raw2,
  sql: () => sql
});
import * as runtime2 from "@prisma/client/runtime/client";
var PrismaClientKnownRequestError2 = runtime2.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError2 = runtime2.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError2 = runtime2.PrismaClientRustPanicError;
var PrismaClientInitializationError2 = runtime2.PrismaClientInitializationError;
var PrismaClientValidationError2 = runtime2.PrismaClientValidationError;
var sql = runtime2.sqltag;
var empty2 = runtime2.empty;
var join2 = runtime2.join;
var raw2 = runtime2.raw;
var Sql2 = runtime2.Sql;
var Decimal2 = runtime2.Decimal;
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var prismaVersion = {
  client: "7.10.0",
  engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var DbNull2 = runtime2.DbNull;
var JsonNull2 = runtime2.JsonNull;
var AnyNull2 = runtime2.AnyNull;
var ModelName = {
  Member: "Member",
  MembershipPlan: "MembershipPlan",
  Trainer: "Trainer",
  GymClass: "GymClass",
  ClassBooking: "ClassBooking",
  ContactInquiry: "ContactInquiry",
  AdminUser: "AdminUser"
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  Serializable: "Serializable"
});
var MemberScalarFieldEnum = {
  id: "id",
  name: "name",
  email: "email",
  phone: "phone",
  membershipPlanId: "membershipPlanId",
  joinDate: "joinDate",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var MembershipPlanScalarFieldEnum = {
  id: "id",
  name: "name",
  price: "price",
  durationInDays: "durationInDays",
  features: "features",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var TrainerScalarFieldEnum = {
  id: "id",
  name: "name",
  bio: "bio",
  specialty: "specialty",
  photoUrl: "photoUrl",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var GymClassScalarFieldEnum = {
  id: "id",
  title: "title",
  trainerId: "trainerId",
  schedule: "schedule",
  capacity: "capacity",
  description: "description",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var ClassBookingScalarFieldEnum = {
  id: "id",
  gymClassId: "gymClassId",
  name: "name",
  email: "email",
  phone: "phone",
  createdAt: "createdAt"
};
var ContactInquiryScalarFieldEnum = {
  id: "id",
  name: "name",
  email: "email",
  message: "message",
  createdAt: "createdAt"
};
var AdminUserScalarFieldEnum = {
  id: "id",
  email: "email",
  hashedPassword: "hashedPassword",
  createdAt: "createdAt"
};
var SortOrder = {
  asc: "asc",
  desc: "desc"
};
var NullsOrder = {
  first: "first",
  last: "last"
};
var defineExtension = runtime2.Extensions.defineExtension;

// generated/prisma/enums.ts
var enums_exports = {};

// generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();
export {
  enums_exports as $Enums,
  prismaNamespace_exports as Prisma,
  PrismaClient
};
