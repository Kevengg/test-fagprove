import { PrismaClient, Product } from "@prisma/client";
import { CreateType } from "../../src/models/db";
import productVersionSeeder from "./productVersionSeeder";

/**
 * holds a list of mock data for products
 */
const productData = [
    {
        id: 1,
        createdAt: new Date(),
        name: "test produkt",
        companyId: 1,
    },
];

const productSeeder = async (prismaClient: PrismaClient) => {
    // starts a new DB transaction
    prismaClient.$transaction((tx) =>
        // creates a new database entry for each product in productData
        tx.product.createMany({ data: productData, skipDuplicates: true })
    );
    // run productVersionSeeder for each product in productData
    productData.forEach(async (element) => {
        await productVersionSeeder(element.id, prismaClient);
    });
};

export default productSeeder;
