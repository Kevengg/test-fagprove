type TimeUnit = "Day" | "Month" | "Year";
type ProductType = "Spot" | "HourlySpot" | "Fixed" | "Variabl" | "Purchase" | "Plus" | "Other";
type BillingType = "Before" | "After" | "Period";
type FeeMandatoryType = "None" | "ElectronicInvoice" | "DirectDebit" | "Both";
type CustomerType =
    | "Everyone"
    | "New"
    | "Existing"
    | "ExistingWithMembership"
    | "NewWithMembership"
    | "WithMembership"
    | "ExistingAndNew"
    | "ExistingAndNewWithMembership";
type AlertChannel = "Email" | "Sms" | "PostalLetter" | "Website" | "MyPage" | "Phone";
type PricingType = "Spot" | "Kilowatt" | "Arrears" | "OnRequest";
type PublishingStatus = "Approved" | "Published" | "Rejected" | "Draft" | "Pending";

export {
    TimeUnit,
    ProductType,
    BillingType,
    FeeMandatoryType,
    CustomerType,
    AlertChannel,
    PricingType,
    PublishingStatus,
};
