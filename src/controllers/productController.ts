import { Body, Controller, Delete, Get, Path, Put, Query, Route } from "tsoa";
import { CreateArgsType, WhereType, db } from "../models/db";
import { ApiError } from "../errors";
import { Response } from "../models";
import Product, { NewProductBody } from "../models/product";
import ProductOutput from "../models/productOutput";
import { newProductMapper, productMapper } from "../util/product";

@Route("products")
export class productController extends Controller {
    /**
     * GET /products
     * @tags Product
     * @param {boolean} includeInactive.query.optional - True if should include inactive products
     * @summary Gets all active products
     * @returns {ProductOutput[]} 200 - success response
     */
    @Get()
    async getProducts(@Query() includeInactive: boolean = false): Promise<ProductOutput[]> {
        // holds the args for where
        const versionWhere: WhereType<"ProductVersion"> = {};
        const productWhere: WhereType<"Product"> = {};

        // const includeInactive = false;

        // add args if it shouldn't include inactive products
        if (!includeInactive) {
            // product hasn't been deleted
            productWhere.deletedAt = { equals: null };
            // is published before now
            versionWhere.publishedAt = { lte: new Date() };
            // and has the status "Published"
            versionWhere.publishingStatus = { equals: "Published" };
        }

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
    }

    /**
     * GET /products/{id}
     * @tags Product
     * @param {number} id.path.required  - Id of wanted product
     * @summary Gets product by provided id
     * @returns {ProductOutput} 200 - success response
     * @returns {Response} 404 - not found
     */
    @Get("{id}")
    async getById(@Path() id: number): Promise<ProductOutput> {
        const product = await db.product.findFirst({
            where: { id },
            include: { productVersions: true },
        });

        if (!product) {
            throw new ApiError("No products with provided id was found", 404);
        }

        return productMapper(product);
    }

    /**
     * PUT /products
     * @tags Product
     * @summary Creates new product entry
     * @param {NewProductBody} request.body.required - New product data
     * @returns {Response} 200 - success response
     * @returns {Response} 400 - bad request
     */
    @Put()
    async newProduct(@Body() body: NewProductBody): Promise<Response> {
        const dbReturn = await db.product.create({
            ...newProductMapper(body),
            include: { productVersions: true },
        });

        if (dbReturn.id) {
            return {
                status: 200,
                message: "Company successfully created",
                data: productMapper(dbReturn),
            };
        } else {
            throw new ApiError("Failed to delete company", 400);
        }
    }

    /**
     * DELETE /products/{id}
     * @tags Product
     * @param {number} id.path.required - Id of wanted product
     * @summary Deletes product entry with provided id
     * @returns {Response} 200 - success response
     * @returns {Response} 404
     */
    @Delete("{id}")
    async deleteCompany(@Path() id: number): Promise<Response> {
        const dbReturn = await db.product.update({
            where: { id },
            data: { deletedAt: new Date() },
            include: { productVersions: true },
        });

        if (dbReturn.id) {
            return {
                status: 200,
                message: "Product successfully deleted",
                data: productMapper(dbReturn),
            };
        } else {
            throw new ApiError("Failed to delete product", 400);
        }
    }
}
