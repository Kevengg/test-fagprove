/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { productController } from './controllers/productController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PingControler } from './controllers/pingController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CompaniesController } from './controllers/companiesController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "ProductType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["Spot"]},{"dataType":"enum","enums":["HourlySpot"]},{"dataType":"enum","enums":["Fixed"]},{"dataType":"enum","enums":["Variabl"]},{"dataType":"enum","enums":["Purchase"]},{"dataType":"enum","enums":["Plus"]},{"dataType":"enum","enums":["Other"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PublishingStatus": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["Approved"]},{"dataType":"enum","enums":["Published"]},{"dataType":"enum","enums":["Rejected"]},{"dataType":"enum","enums":["Draft"]},{"dataType":"enum","enums":["Pending"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PricingType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["Spot"]},{"dataType":"enum","enums":["Kilowatt"]},{"dataType":"enum","enums":["Arrears"]},{"dataType":"enum","enums":["OnRequest"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AlertChannel": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["Email"]},{"dataType":"enum","enums":["Sms"]},{"dataType":"enum","enums":["PostalLetter"]},{"dataType":"enum","enums":["Website"]},{"dataType":"enum","enums":["MyPage"]},{"dataType":"enum","enums":["Phone"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CustomerType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["Everyone"]},{"dataType":"enum","enums":["New"]},{"dataType":"enum","enums":["Existing"]},{"dataType":"enum","enums":["ExistingWithMembership"]},{"dataType":"enum","enums":["NewWithMembership"]},{"dataType":"enum","enums":["WithMembership"]},{"dataType":"enum","enums":["ExistingAndNew"]},{"dataType":"enum","enums":["ExistingAndNewWithMembership"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TimeUnit": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["Day"]},{"dataType":"enum","enums":["Month"]},{"dataType":"enum","enums":["Year"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FeeMandatoryType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["None"]},{"dataType":"enum","enums":["ElectronicInvoice"]},{"dataType":"enum","enums":["DirectDebit"]},{"dataType":"enum","enums":["Both"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "conditions": {
        "dataType": "refObject",
        "properties": {
            "applicableToCustomerType": {"ref":"CustomerType","required":true},
            "agreementTime": {"dataType":"double","required":true},
            "agreementTimeUnit": {"ref":"TimeUnit","required":true},
            "maxKwhPerYear": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}],"required":true},
            "cabinProduct": {"dataType":"boolean","required":true},
            "otherConditions": {"dataType":"string","required":true},
            "feeMandatoryType": {"ref":"FeeMandatoryType","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BillingType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["Before"]},{"dataType":"enum","enums":["After"]},{"dataType":"enum","enums":["Period"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "billing": {
        "dataType": "refObject",
        "properties": {
            "billingType": {"ref":"BillingType","required":true},
            "frequency": {"dataType":"double","required":true},
            "unit": {"ref":"TimeUnit","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "fee": {
        "dataType": "refObject",
        "properties": {
            "monthlyFee": {"dataType":"double","required":true},
            "postalLetterFee": {"dataType":"double","required":true},
            "contractBreachFee": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "currentPrice": {
        "dataType": "refObject",
        "properties": {
            "addonPrice": {"dataType":"double","required":true},
            "purchaseKwPrice": {"dataType":"double","required":true},
            "elCertificatePrice": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "addonPrice": {
        "dataType": "refObject",
        "properties": {
            "minimumFixedFor": {"dataType":"double","required":true},
            "minimumFixedForUnit": {"ref":"TimeUnit","required":true},
            "purchaseAddonPrice": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProductOutput": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "productType": {"ref":"ProductType","required":true},
            "orderUrl": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "organizationId": {"dataType":"double","required":true},
            "publishingStatus": {"ref":"PublishingStatus","required":true},
            "publishedAt": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"enum","enums":[null]}],"required":true},
            "priceType": {"ref":"PricingType","required":true},
            "purchasePriceType": {"ref":"PricingType","required":true},
            "alertChannel": {"ref":"AlertChannel","required":true},
            "conditions": {"ref":"conditions","required":true},
            "billing": {"ref":"billing","required":true},
            "fee": {"ref":"fee","required":true},
            "currentPrice": {"ref":"currentPrice","required":true},
            "addonPrice": {"ref":"addonPrice","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Response": {
        "dataType": "refObject",
        "properties": {
            "status": {"dataType":"double","required":true},
            "message": {"dataType":"string"},
            "data": {"dataType":"any"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NewProductBody": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "agreementTime": {"dataType":"double","required":true},
            "agreementTimeUnit": {"ref":"TimeUnit","required":true},
            "billingFrequency": {"dataType":"double","required":true},
            "billingFrequencyUnit": {"ref":"TimeUnit","required":true},
            "addonPriceMinimumFixedFor": {"dataType":"double","required":true},
            "addonPriceMinimumFixedForUnit": {"ref":"TimeUnit","required":true},
            "productType": {"ref":"ProductType","required":true},
            "billingType": {"ref":"BillingType","required":true},
            "monthlyFee": {"dataType":"double","required":true},
            "addonPrice": {"dataType":"double","required":true},
            "elCertificatePrice": {"dataType":"double","required":true},
            "maxKwhPerYear": {"dataType":"double","required":true},
            "feeMandatoryType": {"ref":"FeeMandatoryType","required":true},
            "feePostalLetter": {"dataType":"double","required":true},
            "feeContractBreach": {"dataType":"double","required":true},
            "otherConditions": {"dataType":"string","required":true},
            "orderUrl": {"dataType":"string","required":true},
            "applicableToCustomerType": {"ref":"CustomerType","required":true},
            "alertChannel": {"ref":"AlertChannel","required":true},
            "cabinProduct": {"dataType":"boolean","required":true},
            "pricingType": {"ref":"PricingType","required":true},
            "publishingStatus": {"ref":"PublishingStatus","required":true},
            "publishedAt": {"dataType":"datetime","required":true},
            "priceChangedAt": {"dataType":"datetime","required":true},
            "purchasePricingType": {"ref":"PricingType","required":true},
            "purchaseAddonPrice": {"dataType":"double","required":true},
            "companyId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Company": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "number": {"dataType":"double","required":true},
            "active": {"dataType":"boolean","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"enum","enums":[null]}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "newCompanyBody": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "number": {"dataType":"double","required":true},
            "active": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/products',
            ...(fetchMiddlewares<RequestHandler>(productController)),
            ...(fetchMiddlewares<RequestHandler>(productController.prototype.getProducts)),

            async function productController_getProducts(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    includeInactive: {"default":false,"in":"query","name":"includeInactive","dataType":"boolean"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new productController();

              await templateService.apiHandler({
                methodName: 'getProducts',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/products/:id',
            ...(fetchMiddlewares<RequestHandler>(productController)),
            ...(fetchMiddlewares<RequestHandler>(productController.prototype.getById)),

            async function productController_getById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new productController();

              await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/products',
            ...(fetchMiddlewares<RequestHandler>(productController)),
            ...(fetchMiddlewares<RequestHandler>(productController.prototype.newProduct)),

            async function productController_newProduct(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    body: {"in":"body","name":"body","required":true,"ref":"NewProductBody"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new productController();

              await templateService.apiHandler({
                methodName: 'newProduct',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/products/:id',
            ...(fetchMiddlewares<RequestHandler>(productController)),
            ...(fetchMiddlewares<RequestHandler>(productController.prototype.deleteCompany)),

            async function productController_deleteCompany(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new productController();

              await templateService.apiHandler({
                methodName: 'deleteCompany',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/ping',
            ...(fetchMiddlewares<RequestHandler>(PingControler)),
            ...(fetchMiddlewares<RequestHandler>(PingControler.prototype.get)),

            async function PingControler_get(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PingControler();

              await templateService.apiHandler({
                methodName: 'get',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/companies',
            ...(fetchMiddlewares<RequestHandler>(CompaniesController)),
            ...(fetchMiddlewares<RequestHandler>(CompaniesController.prototype.getCompanies)),

            async function CompaniesController_getCompanies(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    includeInactive: {"default":false,"in":"query","name":"includeInactive","dataType":"boolean"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CompaniesController();

              await templateService.apiHandler({
                methodName: 'getCompanies',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/companies/:id',
            ...(fetchMiddlewares<RequestHandler>(CompaniesController)),
            ...(fetchMiddlewares<RequestHandler>(CompaniesController.prototype.getById)),

            async function CompaniesController_getById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CompaniesController();

              await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/companies',
            ...(fetchMiddlewares<RequestHandler>(CompaniesController)),
            ...(fetchMiddlewares<RequestHandler>(CompaniesController.prototype.newCompany)),

            async function CompaniesController_newCompany(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    body: {"in":"body","name":"body","required":true,"ref":"newCompanyBody"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CompaniesController();

              await templateService.apiHandler({
                methodName: 'newCompany',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/companies/:id',
            ...(fetchMiddlewares<RequestHandler>(CompaniesController)),
            ...(fetchMiddlewares<RequestHandler>(CompaniesController.prototype.deleteCompany)),

            async function CompaniesController_deleteCompany(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CompaniesController();

              await templateService.apiHandler({
                methodName: 'deleteCompany',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
