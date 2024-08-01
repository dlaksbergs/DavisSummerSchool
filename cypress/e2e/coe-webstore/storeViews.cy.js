import Store from "../pageElements/Store";
//https://tdlschool.atlassian.net/browse/TSS22N-171
describe("Check if products are sorted by price", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  it("switch from store view to table view and back", () => {
    cy.visit("/store");//visit the store page
    Store.elements.tableViewButton().click();//click on the table view button
    cy.contains("h2", "Products table view");//check if the view changed to table view
    Store.elements.storeViewButton().click();//click on the store view button
    cy.contains("h1", "All products");//check if the view changed back to default view
  });
});
