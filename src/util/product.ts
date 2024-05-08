import { CreateArgsType } from "../models/db";
import Product, { NewProductBody } from "../models/product";
import ProductOutput from "../models/productOutput";

/**
 * converts DB Product to ProductOutput
 */
const productMapper = (p: Product): ProductOutput => {
    const v = p.productVersions[0];
    if (v) {
        const productOutput: ProductOutput = {
            name: p.name,
            productType: v.productType,
            orderUrl: v.orderUrl,
            organizationId: p.company?.number || NaN,
            publishingStatus: v.publishingStatus,
            publishedAt: v.publishedAt,
            priceType: v.pricingType,
            purchasePriceType: v.purchasePricingType,
            alertChannel: v.alertChannel,
            conditions: {
                applicableToCustomerType: v.applicableToCustomerType,
                agreementTime: v.agreementTime,
                agreementTimeUnit: v.agreementTimeUnit,
                maxKwhPerYear: v.maxKwhPerYear,
                cabinProduct: v.cabinProduct,
                otherConditions: v.otherConditions,
                feeMandatoryType: v.feeMandatoryType,
            },
            billing: {
                billingType: v.billingType,
                frequency: v.billingFrequency,
                unit: v.billingFrequencyUnit,
            },
            fee: {
                monthlyFee: v.monthlyFee,
                postalLetterFee: v.feePostalLetter,
                contractBreachFee: v.feeContractBreach,
            },
            currentPrice: {
                addonPrice: v.addonPrice,
                purchaseKwPrice: v.purchaseAddonPrice,
                elCertificatePrice: v.elCertificatePrice,
            },
            addonPrice: {
                minimumFixedFor: v.addonPriceMinimumFixedFor,
                minimumFixedForUnit: v.addonPriceMinimumFixedForUnit,
                purchaseAddonPrice: v.purchaseAddonPrice,
            },
        };

        return productOutput;
    }
    return { name: p.name, organizationId: p.company?.number || NaN } as ProductOutput;
};

/**
 * converts newProductBody to Product
 */
const newProductMapper = (p: NewProductBody): CreateArgsType<"Product"> => {
    const v: CreateArgsType<"Product">["data"]["productVersions"] = {
        createMany: {
            data: [
                {
                    id: 0,
                    createdAt: new Date(),
                    agreementTime: p.agreementTime,
                    agreementTimeUnit: p.agreementTimeUnit,
                    billingFrequency: p.billingFrequency,
                    billingFrequencyUnit: p.billingFrequencyUnit,
                    addonPriceMinimumFixedFor: p.addonPriceMinimumFixedFor,
                    addonPriceMinimumFixedForUnit: p.addonPriceMinimumFixedForUnit,
                    productType: p.productType,
                    billingType: p.billingType,
                    monthlyFee: p.monthlyFee,
                    addonPrice: p.addonPrice,
                    elCertificatePrice: p.elCertificatePrice,
                    maxKwhPerYear: p.maxKwhPerYear,
                    feeMandatoryType: p.feeMandatoryType,
                    feePostalLetter: p.feePostalLetter,
                    feeContractBreach: p.feeContractBreach,
                    otherConditions: p.otherConditions,
                    orderUrl: p.orderUrl,
                    applicableToCustomerType: p.applicableToCustomerType,
                    alertChannel: p.alertChannel,
                    cabinProduct: p.cabinProduct,
                    pricingType: p.pricingType,
                    publishingStatus: p.publishingStatus,
                    publishedAt: p.publishedAt,
                    priceChangedAt: p.priceChangedAt,
                    purchasePricingType: p.purchasePricingType,
                    purchaseAddonPrice: p.purchaseAddonPrice,
                },
            ],
            skipDuplicates: false,
        },
    };

    const np: CreateArgsType<"Product"> = {
        data: {
            name: p.name,
            createdAt: new Date(),
            deletedAt: null,
            productVersions: v,
            companyId: p.companyId,
        },
        include: { productVersions: true },
    };

    return np;
};

export { productMapper, newProductMapper };
