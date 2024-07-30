// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
import Login from "../e2e/pageElements/Login";
import Home from "../e2e/pageElements/Home";
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("getByTestId", (id) => {
  cy.get(`[data-testid=${id}]`);
});

Cypress.Commands.add("login", (email, password) => {
  cy.session("loginSession", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome back");
    Login.fillEmail(email);
    Login.fillPassword(password);
    Login.elements.signInButton().click();
    Home.elements.heading().should("have.text", "Store of Excellence");
  });
});
