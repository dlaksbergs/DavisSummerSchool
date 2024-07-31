import Store from "../pageElements/Store";
//https://tdlschool.atlassian.net/browse/TSS22N-69
describe("Check if products are sorted by price", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  it("should sort products by price from low to high", () => {
    cy.visit("/store");
    Store.sortProducts("lowToHigh");
    Store.verifyPricesSorted("ascending");
  });

  it("should sort products by price from high to low", () => {
    cy.visit("/store");
    Store.sortProducts("highToLow");
    Store.verifyPricesSorted("descending");
  });
});
