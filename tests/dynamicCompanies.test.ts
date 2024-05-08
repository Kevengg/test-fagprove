import { WhereType, db } from "../src/models/db";
import request from "supertest";
import app from "../src/app";

const dynamicCompaniesTest = async () => {
    const a = async () => {
        const where: WhereType<"Company"> = {};

        // company hasen't been deleted
        where.deletedAt = { equals: null };
        // is active
        where.active = { equals: true };

        /**
         * gets all companies
         */
        const companies = await db.company.findMany({
            where,
        });

        return companies.map((c) => ({
            ...c,
            createdAt: c.createdAt.toISOString(),
        }));
    };

    await request(app)
        .get("/companies")
        .expect(200)
        .expect(await a());
};

export default dynamicCompaniesTest;
