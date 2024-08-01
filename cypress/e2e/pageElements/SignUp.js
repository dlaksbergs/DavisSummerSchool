class SignUp {
    elements = {
      firstNameInput: () => cy.getByTestId("first-name-input"),
      lastNameInput: () => cy.getByTestId("last-name-input"),
      emailInput: () => cy.getByTestId("email-input"),
      phoneInput: () => cy.getByTestId("phone-input"),
      passwordInput: () => cy.getByTestId("password-input"),
      registerButton: () => cy.getByTestId("register-button"),
      signUpError: () => cy.getByTestId("register-error"),
    };
    
  }
  
  export default new SignUp();
  