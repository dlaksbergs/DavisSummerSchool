import Global from "../pageElements/Global";
//https://tdlschool.atlassian.net/browse/TSS22N-166
describe("switch language to latvian", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");
  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });
  it("Change language to latvian and log out", () => {
    cy.visit("/");
    Global.elements.menuButton().click();//click on the burger menu
    Global.elements.menuButtonLinks().should("be.visible");//check if the side navigation menu appears
    Global.elements.languageSelectButton().click();//click on the language selection button
    Global.elements.languageLatvian().click();//select Latvian

    Global.elements.menuButton().click();//click on the burger menu 
    Global.elements.languageSelectButton().should("contain", "LV");//check if the language is saved
    Global.elements.logoutButton().click();//click on the logout button
    cy.contains("h1", "Laipni lūdzam atpakaļ");//check if the sign in page loads with the correct language
  });
});
