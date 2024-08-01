import SignUp from "../pageElements/SignUp";
//https://tdlschool.atlassian.net/browse/TSS22N-40
describe("error message appears when leaving mandatory field empty", () => {
  it("tries to sign up with mandatory field empty", () => {
    cy.visit("/sign-up");//visit the sign in page
    SignUp.elements.lastNameInput().type('Max')//input last name
    SignUp.elements.passwordInput().type('1234');//input password
    SignUp.elements.registerButton().click();//click the sign in button
    SignUp.elements.firstNameInput().should('have.prop','validationMessage');//checks that validation message appears
  });
});