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
    Global.elements.menuButton().click();//click on the burger menu
    Global.elements.menuButtonLinks().should("be.visible");//check if the side navigation menu appears
    Global.elements.languageSelectButton().click();//click on the language select button
    Global.elements.languageLatvian().click();//select the Latvian language
    Home.elements.heading().should("have.text", "Veikals izcilībai");//check if the language has changed
  });
});
