import Global from "../pageElements/Global";
import Home from "../pageElements/Home";
//https://tdlschool.atlassian.net/browse/TSS22N-100
describe("switch language to latvian", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");
  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });
  it("Change language", () => {
    cy.visit("/");
    Global.elements.menuButton().click();
    Global.elements.menuButtonLinks().should("be.visible");
    Global.elements.languageSelectButton().click();
    Global.elements.languageLatvian().click();

    Home.elements.heading().should("have.text", "Veikals izcilībai");
  });
});
