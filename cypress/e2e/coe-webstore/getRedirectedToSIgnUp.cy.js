import Login from "../pageElements/Login";
//https://tdlschool.atlassian.net/browse/TSS22N-16
describe("get redirected to sign up", () => {
  it("Clicks join us", () => {
    cy.visit("/sign-in");//visit the sign in page
    Login.elements.registerButton().click();//click on the sign up button
    cy.url().should("include", "/sign-up");//check if it redirects correctly
  });
});
