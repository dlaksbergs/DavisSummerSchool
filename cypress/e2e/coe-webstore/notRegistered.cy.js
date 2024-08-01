import Login from "../pageElements/Login";
//https://tdlschool.atlassian.net/browse/TSS22N-19
describe("error message appears with invalid credentials", () => {
  it("tries to sign in with invalid credentials", () => {
    cy.visit("/sign-in");//visit the sign in page
    Login.elements.emailInput().type('mark.john@gmail.com');//input the email
    Login.elements.passwordInput().type('abc135234')//input incorrect password
    Login.elements.signInButton().click()//click the sign in button
    Login.elements.signInError().should("contain","Error: Wrong email or password.")//check if the correct error message appears
  });
});