import pingTest from "./ping.test";
import productsTest from "./dynamicProducts.test";

const tests: (() => void)[] = [pingTest, productsTest];

console.log("Running tests...");

tests.forEach(async (test) => {
    test();
});
console.log("✔", "All tests finished");
