import { Controller, Get, Route } from "tsoa";

/**
 * @typedef {object} Ping
 * @property {string} ping - enum:pong
 */
@Route("ping")
export class PingController extends Controller {
    /**
     * GET /ping
     * @tags Miscellaneous
     * @summary Pings the service
     * @returns {Ping} 200 - success response
     */

    @Get()
    get(): { ping: string } {
        return {
            ping: "pong",
        };
    }
}
