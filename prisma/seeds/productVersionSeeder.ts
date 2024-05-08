import { PrismaClient } from "@prisma/client";
import { CreateType } from "../../src/models/db";

const productVersionSeeder = async (productId: number, prismaClient: PrismaClient) => {
    const productVersionData: CreateType<"ProductVersion">[] = [
        {
            // id of 0 gives the entry an auto-incremented id
            id: 0,
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
            publishingStatus: "Published",
            publishedAt: new Date(),
            priceChangedAt: new Date(),
            purchasePricingType: "Arrears",
            purchaseAddonPrice: 0,
            previousVersionId: null,
        },
    ];

    // starts a new DB transaction
    prismaClient.$transaction((tx) =>
        // creates a new database entry for each product in productData
        tx.productVersion.createMany({
            data: productVersionData.map((p) => ({ ...p, productId })),
            skipDuplicates: true,
        })
    );
};

export default productVersionSeeder;
