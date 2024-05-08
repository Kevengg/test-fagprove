/**
 * @typedef {object} Response
 * @property {number} status.required - Status code of the response
 * @property {string} message.required - Response message
 * @property {string} data - Data added to response
 */
export default interface Response {
    status: number; // status code
    message?: string; // Response message
    data?: unknown; // Data added to response
}
