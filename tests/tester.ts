import pingTest from "./ping.test";
import productsTest from "./dynamicProducts.test";
import dynamicCompaniesTest from "./dynamicCompanies.test";

const tests: (() => void)[] = [pingTest, productsTest, dynamicCompaniesTest];

console.log("Running tests...");

tests.forEach(async (test) => {
    test();
});
console.log("✔", "All tests finished");
