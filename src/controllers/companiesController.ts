import { Body, Controller, Delete, Get, Path, Put, Query, Route } from "tsoa";
import { WhereType, db } from "../models/db";
import { Company } from "../models/company";
import { ApiError } from "../errors";
import { Response } from "../models";

/**
 * @typedef {object} newCompanyBody
 * @property {string} name.required - Name of the company
 * @property {number} number.required - Company number
 * @property {boolean} active.required - Is active company - json:{"example":true}
 */
interface newCompanyBody {
    name: string;
    number: number;
    active: boolean;
}

@Route("companies")
export class CompaniesController extends Controller {
    /**
     * GET /companies - Gets all active companies
     * @tags Companies
     * @param {boolean} includeInactive.query.optional - True if should include inactive companies
     * @returns {Company} 200 - success response
     */
    @Get()
    async getCompanies(@Query() includeInactive: boolean = false): Promise<Company[]> {
        const where: WhereType<"Company"> = {};

        if (!includeInactive) {
            // company hasen't been deleted
            where.deletedAt = { equals: null };
            // is active
            where.active = { equals: true };
        }

        /**
         * gets all companies
         */
        const companies = await db.company.findMany({
            where,
        });

        return companies;
    }

    /**
     * GET /companies/{id}
     * @tags Companies
     * @param {number} id.path.required - Id of wanted company
     * @summary Gets company by provided id
     * @returns {Company} 200 - success response
     * @returns {Response} 404 - not found
     */
    @Get("{id}")
    async getById(@Path() id: number): Promise<Company> {
        const Company = await db.company.findFirst({ where: { id } });

        if (!Company) {
            throw new ApiError("No company with provided id was found", 404);
        }

        return Company;
    }

    /**
     * PUT /companies
     * @tags Companies
     * @summary Creates new company entry
     * @param {newCompanyBody} request.body.required - New company data
     * @returns {Response} 200 - success response
     * @returns {Response} 404 - not found
     */
    @Put()
    async newCompany(@Body() body: newCompanyBody): Promise<Response> {
        // check if company with provided company number already exists
        const companyExists = !!(await db.company.findFirst({ where: { number: body.number } }));

        if (companyExists) {
            throw new ApiError("Company with provided org number already exists", 400);
        }

        const dbReturn = await db.company.create({ data: body });

        if (dbReturn.id) {
            return { status: 200, message: "Company successfully created", data: dbReturn };
        } else {
            throw new ApiError("Failed to delete company", 400);
        }
    }

    /**
     * DELETE /companies/{id}
     * @tags Companies
     * @param {number} id.path.required - Id of wanted company entry to delete.
     * @summary Deletes the company entry with the provided id.
     * @returns {Response} 200 - success response
     * @returns {Response} 404 - not found
     */

    @Delete("{id}")
    async deleteCompany(@Path() id: number): Promise<Response> {
        const dbReturn = await db.company.update({
            where: { id },
            data: { deletedAt: new Date() },
        });

        if (dbReturn.id) {
            return { status: 200, message: "Company successfully deleted" };
        } else {
            throw new ApiError("Failed to delete company", 400);
        }
    }
}
