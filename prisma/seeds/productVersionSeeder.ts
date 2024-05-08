import { PrismaClient } from "@prisma/client";
import { CreateType } from "../../src/models/db";

const productVersionSeeder = async (productId: number, prismaClient: PrismaClient) => {
    const productVersionData: CreateType<"ProductVersion"> = {
        id: 1,
        productId: productId,
        agreementTime: 0,
        agreementTimeUnit: "Day",
        billingFrequency: 0,
        billingFrequencyUnit: "Day",
        addonPriceMinimumFixedFor: 0,
        addonPriceMinimumFixedForUnit: "Day",
        productType: "Fixed",
        billingType: "After",
        monthlyFee: 0,
        addonPrice: 0,
        elCertificatePrice: 0,
        maxKwhPerYear: 0,
        feeMandatoryType: "None",
        feePostalLetter: 0,
        feeContractBreach: 0,
        otherConditions: "",
        orderUrl: "",
        applicableToCustomerType: "Everyone",
        alertChannel: "Email",
        pricingType: "Arrears",
        publishingStatus: "Approved",
        publishedAt: new Date(),
        priceChangedAt: new Date(),
        purchasePricingType: "Arrears",
        purchaseAddonPrice: 0,
        previousVersionId: null,
    };

    // starts a new DB transaction
    prismaClient.$transaction((tx) =>
        // creates a new database entery for eatch product in productData
        tx.productVersion.createMany({ data: productVersionData, skipDuplicates: true })
    );
};

export default productVersionSeeder;
