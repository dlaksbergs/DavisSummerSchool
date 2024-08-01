import SignUp from "../pageElements/SignUp";
//https://tdlschool.atlassian.net/browse/TSS22N-60
describe("error message appears when registering a user with already used email", () => {
  it("tries to sign up with an used email", () => {
    cy.visit("/sign-up");//visit the sign in page
    SignUp.elements.firstNameInput().type('maksis')//input first name
    SignUp.elements.lastNameInput().type('paksis')//input last name
    SignUp.elements.emailInput().type('abc.abc@gmail.com')//input last name
    SignUp.elements.passwordInput().type('123');//input password
    SignUp.elements.registerButton().click();//click the sign in button
    SignUp.elements.signUpError().should('contain','Error: A customer with the given email already has an account. Log in instead.');//checks that the correct error message appears
  });
});