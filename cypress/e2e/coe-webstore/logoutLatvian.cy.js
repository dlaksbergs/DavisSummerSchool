import Global from "../pageElements/Global";
import Home from "../pageElements/Home";
//https://tdlschool.atlassian.net/browse/TSS22N-166
describe("switch language to latvian", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");
  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });
  it("Change language to latvian and log out", () => {
    cy.visit("/");
    Global.elements.menuButton().click();
    Global.elements.menuButtonLinks().should("be.visible");
    Global.elements.languageSelectButton().click();
    Global.elements.languageLatvian().click();

    Global.elements.menuButton().click();
    Global.elements.languageSelectButton().should("contain", "LV");
    Global.elements.logoutButton().click();
    cy.contains("h1", "Laipni lūdzam atpakaļ");
  });
});
