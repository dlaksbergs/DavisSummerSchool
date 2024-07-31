import Login from "../pageElements/Login";
describe("get redirected to sign up", () => {
  it("Clicks join us", () => {
    cy.visit("/sign-in");
    Login.elements.registerButton().click();
    cy.url().should("include", "/sign-up");
  });
});
