import { Company, PrismaClient } from "@prisma/client";

/**
 * holds a list of mock data for companies
 */
const companyData: Company[] = [
    {
        name: "test firma",
        id: 1,
        number: 0,
        active: true,
        createdAt: new Date(),
        deletedAt: null,
    },
];

const companySeeder = async (prismaClient: PrismaClient) => {
    // starts a new DB transaction
    prismaClient.$transaction((tx) =>
        // creates a new database entery for eatch company in companyData
        tx.company.createMany({ data: companyData, skipDuplicates: true })
    );
};

export default companySeeder;
