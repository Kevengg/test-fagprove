import { PrismaClient } from "@prisma/client";
import companySeeder from "./seeds/companySeeder";
import productSeeder from "./seeds/productSeeds";

const prismaClient = new PrismaClient();

async function Main() {
    await companySeeder(prismaClient);
    await productSeeder(prismaClient);
}

Main()
    .then(async () => {
        await prismaClient.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prismaClient.$disconnect();
    });
