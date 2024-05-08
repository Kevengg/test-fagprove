import { WhereType, db } from "../src/models/db";
import request from "supertest";
import app from "../src/app";
import { productMapper } from "../src/util/product";
import ProductOutput from "../src/models/productOutput";

const productsTest = async () => {
    const activeDbProducts = await db.product.findMany({
        where: { deletedAt: null },
        include: {
            productVersions: true,
        },
    });

    const a = async () => {
        const versionWhere: WhereType<"ProductVersion"> = {};
        const productWhere: WhereType<"Product"> = {};

        // product hasn't been deleted
        productWhere.deletedAt = { equals: null };
        // is published before now
        versionWhere.publishedAt = { lte: new Date() };
        // and has the status "Published"
        versionWhere.publishingStatus = { equals: "Published" };

        /**
         * gets all products
         */
        const products = await db.product.findMany({
            // where
            where: productWhere,
            include: {
                // include the latest version that fits the where args
                productVersions: {
                    where: versionWhere.publishedAt ? versionWhere : undefined,
                    orderBy: { createdAt: "desc" },
                    take: 1,
                },
            },
        });

        // return only the once that have an active version
        return products.reduce(
            (p, c) => (c.productVersions.length ? [...p, productMapper(c)] : p),
            [] as ProductOutput[]
        );
    };

    await request(app)
        .get("/products")
        .expect(200)
        .expect(await a());
};

export default productsTest;
