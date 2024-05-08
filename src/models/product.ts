import { Company } from "./company";
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

// /**
//  * @typedef {object} Product
//  * @property {number} id.required
//  * @property {string} createdAt.required - json:{"format":"date-time"}
//  * @property {string} name.required
//  * @property {string | null} deletedAt - json:{"format":"date-time"}
//  * @property {ProductVersion[]} productVersions
//  * @property {Company} company.required
//  */
export default interface Product {
    id: number;
    createdAt: Date;
    name: string;
    deletedAt: Date | null;
    productVersions: ProductVersion[];
    company?: Company;
}

// /**
//  * @typedef {object} ProductVersion
//  * @property {number} id.required
//  * @property {number} productId.required
//  * @property {Product} product.required
//  * @property {string} createdAt.required - json:{"format":"date-time"}
//  * @property {number} agreementTime.required
//  * @property {string} agreementTimeUnit.required - json:{"enum":["day","month","year"],"example":"month"}
//  * @property {number} billingFrequency.required
//  * @property {string} billingFrequencyUnit.required - json:{"enum":["day","month","year"],"example":"month"}
//  * @property {number} addonPriceMinimumFixedFor.required
//  * @property {string} addonPriceMinimumFixedForUnit.required - json:{"enum":["day","month","year"],"example":"month"}
//  * @property {string} productType.required  - enum:Spot,Hourly_spot,Fixed,Variable,Purchase,Plus,Other
//  * @property {string} billingType.required - enum:Before,After,Period
//  * @property {number} monthlyFee.required
//  * @property {number} addonPrice.required
//  * @property {number} elCertificatePrice.required
//  * @property {number} maxKwhPerYear.required
//  * @property {string} feeMandatoryType.required - enum:None,ElectronicInvoice,DirectDebit,Both
//  * @property {number} feePostalLetter.required
//  * @property {number} feeContractBreach.required
//  * @property {string} otherConditions.required
//  * @property {string} orderUrl.required
//  * @property {string} applicableToCustomerType.required - enum:Everyone,New,Existing,ExistingWithMembership,NewWithMembership,WithMembership,ExistingAndNew,ExistingAndNewWithMembership
//  * @property {string} alertChannel.required - enum:Email,Sms,PostalLetter,Website,MyPage,Phone
//  * @property {boolean} cabinProduct.required
//  * @property {string} pricingType.required -enum:Spot,Kilowatt,Arrears,OnRequest
//  * @property {string} publishingStatus.required - json:{"enum":["Approved","Published","Rejected","Draft","Pending"], example:"Published"}
//  * @property {string} publishedAt.required - json:{"format":"date-time"}
//  * @property {string} priceChangedAt.required - json:{"format":"date-time"}
//  * @property {string} purchasePricingType.required - enum:Spot,Kilowatt,Arrears,OnRequest
//  * @property {number} purchaseAddonPrice.required
//  */
export interface ProductVersion {
    id: number;
    productId: number;
    product?: Product;
    createdAt: Date;
    agreementTime: number;
    agreementTimeUnit: TimeUnit;
    billingFrequency: number;
    billingFrequencyUnit: TimeUnit;
    addonPriceMinimumFixedFor: number;
    addonPriceMinimumFixedForUnit: TimeUnit;
    productType: ProductType;
    billingType: BillingType;
    monthlyFee: number;
    addonPrice: number;
    elCertificatePrice: number;
    maxKwhPerYear: number;
    feeMandatoryType: FeeMandatoryType;
    feePostalLetter: number;
    feeContractBreach: number;
    otherConditions: string;
    orderUrl: string;
    applicableToCustomerType: CustomerType;
    alertChannel: AlertChannel;
    cabinProduct: boolean;
    pricingType: PricingType;
    publishingStatus: PublishingStatus;
    publishedAt: Date;
    priceChangedAt: Date;
    purchasePricingType: PricingType;
    purchaseAddonPrice: number;
}

/**
 * @typedef {object} NewProductBody
 * @property {string} name.required
 * @property {number} agreementTime.required
 * @property {string} agreementTimeUnit.required - enum:Day,Month,Year
 * @property {number} billingFrequency.required
 * @property {string} billingFrequencyUnit.required - enum:Day,Month,Year
 * @property {number} addonPriceMinimumFixedFor.required
 * @property {string} addonPriceMinimumFixedForUnit.required - enum:Day,Month,Year
 * @property {string} productType.required -enum:Spot,Hourly_spot,Fixed,Variable,Purchase,Plus,Other
 * @property {string} billingType.required - enum:Before,After,Period
 * @property {number} monthlyFee.required
 * @property {number} addonPrice.required
 * @property {number} elCertificatePrice.required
 * @property {number} maxKwhPerYear.required
 * @property {string} feeMandatoryType.required - enum:None,ElectronicInvoice,DirectDebit,Both
 * @property {number} feePostalLetter.required
 * @property {number} feeContractBreach.required
 * @property {string} otherConditions.required
 * @property {string} orderUrl.required
 * @property {string} applicableToCustomerType.required - enum:Everyone,New,Existing,ExistingWithMembership,NewWithMembership,WithMembership,ExistingAndNew,ExistingAndNewWithMembership
 * @property {string} alertChannel.required - enum:Email,Sms,PostalLetter,Website,MyPage,Phone
 * @property {boolean} cabinProduct.required
 * @property {string} pricingType.required - enum:Spot,Kilowatt,Arrears,OnRequest
 * @property {string} publishingStatus.required - json:{"enum":["Approved","Published","Rejected","Draft","Pending"], "example":"Published"}
 * @property {string} publishedAt.required - json:{"format":"date-time"}
 * @property {string} priceChangedAt.required - json:{"format":"date-time"}
 * @property {string} purchasePricingType.required - enum:Spot,Kilowatt,Arrears,OnRequest
 * @property {number} purchaseAddonPrice.required
 * @property {number} companyId.required - Company id - Temporary way to assign product to a company - json:{"example":1}
 */
export interface NewProductBody {
    name: string;
    agreementTime: number;
    agreementTimeUnit: TimeUnit;
    billingFrequency: number;
    billingFrequencyUnit: TimeUnit;
    addonPriceMinimumFixedFor: number;
    addonPriceMinimumFixedForUnit: TimeUnit;
    productType: ProductType;
    billingType: BillingType;
    monthlyFee: number;
    addonPrice: number;
    elCertificatePrice: number;
    maxKwhPerYear: number;
    feeMandatoryType: FeeMandatoryType;
    feePostalLetter: number;
    feeContractBreach: number;
    otherConditions: string;
    orderUrl: string;
    applicableToCustomerType: CustomerType;
    alertChannel: AlertChannel;
    cabinProduct: boolean;
    pricingType: PricingType;
    publishingStatus: PublishingStatus;
    publishedAt: Date;
    priceChangedAt: Date;
    purchasePricingType: PricingType;
    purchaseAddonPrice: number;
    companyId: number;
}
