import Store from "../pageElements/Store";
//https://tdlschool.atlassian.net/browse/TSS22N-171
describe("Check if products are sorted by price", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  it("switch from store view to table view and back", () => {
    cy.visit("/store");
    Store.elements.tableViewButton().click();
    cy.contains("h2", "Products table view");
    Store.elements.storeViewButton().click();
    cy.contains("h1", "All products");
  });
});
