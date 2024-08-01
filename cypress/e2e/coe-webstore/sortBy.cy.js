import Store from "../pageElements/Store";
//https://tdlschool.atlassian.net/browse/TSS22N-69
describe("Check if products are sorted by price", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  it("should sort products by price from low to high", () => {
    cy.visit("/store");//visit the store page
    Store.sortProducts("lowToHigh");//call the function to select the sorting method low->high
    Store.verifyPricesSorted("ascending");//call the function to verify that the products have been sorted correctly
  });

  it("should sort products by price from high to low", () => {
    cy.visit("/store");//visit the store page
    Store.sortProducts("highToLow");//call the function to select the sorting method high->low
    Store.verifyPricesSorted("descending");//call the function to verify that the product have been sorted correctly
  });
});
