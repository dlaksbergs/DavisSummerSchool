import SignUp from "../pageElements/SignUp";
//https://tdlschool.atlassian.net/browse/TSS22N-51
describe("user does not get created by pressing join and empty fields", () => {
  it("tries to sign up with all fields empty", () => {
    cy.visit("/sign-up");//visit the sign in page

    SignUp.elements.registerButton().click();//click the sign in button
    SignUp.elements.firstNameInput().should('have.prop','validationMessage');//checks that validation message appears
  });
});