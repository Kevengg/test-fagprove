/**
 * Represents a company.
 *
 * @typedef {object} Company
 * @property {number} id.required - The ID of the company.
 * @property {string} name.required - The name of the company.
 * @property {number} number.required - The number of the company.
 * @property {boolean} active.required - Indicates if the company is active.
 * @property {string} createdAt.required - The date when the company entery was created. - json:{"format":"date-time"}
 * @property {string | null} deletedAt - The date when the company entery was deleted, or null if not deleted. - json:{"format":"date-time"}
 */
export interface Company {
    id: number;
    name: string;
    number: number;
    active: boolean;
    createdAt: Date;
    deletedAt: Date | null; // null if not deleted
}
