import { Prisma, PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export type Models = keyof typeof Prisma.ModelName;

export type ArgsType<T extends Models> =
    Prisma.TypeMap["model"][T]["operations"]["findMany"]["args"];

export type WhereType<T extends Models> = NonNullable<ArgsType<T>["where"]>;

export type CreateArgsType<T extends Models> =
    Prisma.TypeMap["model"][T]["operations"]["create"]["args"];

export type CreateType<T extends Models> = NonNullable<CreateArgsType<T>["data"]>;

export { db };
