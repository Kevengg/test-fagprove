import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import { version, description, license } from "../package.json";
import { ApiError } from "./errors";
import { Response as ErrorReturn } from "./models";
import { RegisterRoutes } from "./routes";
import swagger, { Options } from "express-jsdoc-swagger";

/**
 * creates a new express application
 */
const app: Express = express();

/**
 * gets the app env(environment) from the .env file, if env isn't defined assume that it should be running locally
 */
const env = process.env.NODE_ENV || "local";

// if app is running in local alow any cors between te application and anny other locally runing applications
if (env === "local") {
    app.use(
        cors({
            origin: ["http://localhost", "http://localhost:3000"],
        })
    );
}

// allows the app to handle incoming json requests
app.use(express.json());

// registers tsoa routes
RegisterRoutes(app);

// handels errors in the api
app.use((err: ApiError | Error, _req: Request, res: Response, _next: NextFunction) => {
    console.warn(err);

    if (err instanceof ApiError) {
        return res.status(err.status || 400).json({
            message: err.message,
            status: err.status || 400,
        } as ErrorReturn);
    }

    return res.status(400).json({
        error: {
            message: err.message,
            name: err.name,
        },
    });
});

// options for swagger
const swaggerOptions: Options = {
    info: {
        title: "oppgave 2 - Hovedoppgaven",
        description,
        version,
    },
    swaggerUiOptions: {
        customfavIcon:
            "https://www.forbrukerradet.no/wp-content/themes/frweb22/img/icons/favicon.ico",
        customCss:
            ".swagger-ui .topbar { background-color: #fff } .swagger-ui .topbar img { content: url('https://www.forbrukerradet.no/wp-content/themes/frweb22/dist/forbrukerradet_logo_symbol.svg') }",
        customSiteTitle: "test-fagprøve API",
    },
    baseDir: __dirname,
    filesPattern: "**/*.ts",
    swaggerUIPath: "/swagger",
};

swagger(app)(swaggerOptions);

// returns error on empty path
app.use((req: Request, res: Response) => {
    return res.status(404).json({ status: 404, message: `Culd not find ${req.path}` });
});

export default app;
