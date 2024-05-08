import {
    AlertChannel,
    BillingType,
    CustomerType,
    FeeMandatoryType,
    PricingType,
    ProductType,
    PublishingStatus,
    TimeUnit,
} from "./dbEnums";

/**
 * @typedef {object} ProductOutput
 * @property {string} name - The name of the product.
 * @property {ProductType} productType - The type of the product.
 * @property {string | null} orderUrl - The URL for ordering the product, or null if not available.
 * @property {number} organizationId - The ID of the organization associated with the product.
 * @property {PublishingStatus} publishingStatus - The publishing status of the product.
 * @property {string | null} publishedAt - The date when the product was published, or null if not published yet. - json:{"format":"date-time"}
 * @property {PricingType} priceType - The pricing type of the product.
 * @property {PricingType} purchasePriceType - The purchase price type of the product.
 * @property {AlertChannel} alertChannel - The alert channel for the product.
 * @property {conditions} conditions - The conditions of the product.
 * @property {billing} billing - The billing information of the product.
 * @property {fee} fee - The fee information of the product.
 * @property {currentPrice} currentPrice - The current price information of the product.
 * @property {addonPrice} addonPrice - The addon price information of the product.
 */
export default interface ProductOutput {
    name: string;
    productType: ProductType;
    orderUrl: string | null;
    organizationId: number;
    publishingStatus: PublishingStatus;
    publishedAt: Date | null;
    priceType: PricingType;
    purchasePriceType: PricingType;
    alertChannel: AlertChannel;
    conditions: conditions;
    billing: billing;
    fee: fee;
    currentPrice: currentPrice;
    addonPrice: addonPrice;
}
/**
 * Represents the conditions of a product.
 *
 * @typedef {object} conditions
 * @property {CustomerType} applicableToCustomerType - The customer type that can get the produkt.
 * @property {number} agreementTime - The agreement time in units.
 * @property {TimeUnit} agreementTimeUnit - The unit of the agreement time.
 * @property {number | null} maxKwhPerYear - The maximum kWh per year, or null if not applicable.
 * @property {boolean} cabinProduct - Indicates if the product is a cabin product.
 * @property {string} otherConditions - Other conditions of the product.
 * @property {FeeMandatoryType} feeMandatoryType - The fee mandatory type of the product.
 */
interface conditions {
    applicableToCustomerType: CustomerType;
    agreementTime: number;
    agreementTimeUnit: TimeUnit;
    maxKwhPerYear: number | null;
    cabinProduct: boolean;
    otherConditions: string;
    feeMandatoryType: FeeMandatoryType;
}

/**
 * Represents the billing information of a product.
 *
 * @typedef {object} billing
 * @property {BillingType} billingType - The billing type of the product.
 * @property {number} frequency - The billing frequency.
 * @property {TimeUnit} unit - The unit of the billing frequency.
 */
interface billing {
    billingType: BillingType;
    frequency: number;
    unit: TimeUnit;
}

/**
 * Represents the fee information of a product.
 *
 * @typedef {object} fee
 * @property {number} monthlyFee - The monthly fee.
 * @property {number} postalLetterFee - The postal letter fee.
 * @property {number} contractBreachFee - The contract breach fee.
 */
interface fee {
    monthlyFee: number;
    postalLetterFee: number;
    contractBreachFee: number;
}

/**
 * Represents the current price of a product.
 *
 * @typedef {object} currentPrice
 * @property {number} addonPrice - The addon price.
 * @property {number} purchaseKwPrice - The purchase price per kilowatt.
 * @property {number} elCertificatePrice - The price of the electricity certificate.
 */
interface currentPrice {
    addonPrice: number;
    purchaseKwPrice: number;
    elCertificatePrice: number;
}

/**
 * Represents the addon price of a product.
 *
 * @typedef {object} addonPrice
 * @property {number} minimumFixedFor - The minimum time price is fixed for.
 * @property {TimeUnit} minimumFixedForUnit - The unit of the minimum fixed time.
 * @property {number} purchaseAddonPrice - The purchase price of the addon.
 */
interface addonPrice {
    minimumFixedFor: number;
    minimumFixedForUnit: TimeUnit;
    purchaseAddonPrice: number;
}
