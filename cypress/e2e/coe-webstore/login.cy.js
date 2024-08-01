import Global from "/Users/tdlschool18/DavisSummerSchool/cypress/e2e/pageElements/Global.js";
import Login from "../pageElements/Login";
import Home from "../pageElements/Home";

describe("login functionality", () => {
  beforeEach(() => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("opens webstore page", () => {
    cy.contains("h1", "Welcome back");
    Login.elements.emailInput("should.be", "visible");
    Login.elements.passwordInput("should.be", "visible");
    Login.elements.signInButton("should.be", "visible");
  });
  it("logs in &opens store page", () => {
    Home.elements.Heading().contains("Store of Excellence");
    cy.getByTestId("nav-menu-button").click();
    Global.navigateMenuButton.openPage("Store");
  });
  it("Full flow from login to checkout to logout", () => {
    // https://on.cypress.io/type

    Home.elements.Heading().should("have.text", "Store of Excellence");

    cy.get('[data-testid="product-wrapper"]:first').click();
    cy.get(
      ':nth-child(1) > .flex-col > [data-testid="product-options"] > :nth-child(1)',
    ).click();
    cy.get(
      ':nth-child(2) > .flex-col > [data-testid="product-options"] > :nth-child(1)',
    ).click();
    cy.getByTestId("add-product-button").click();
    cy.get(".bg-ui-tag-blue-bg").click();
    cy.getByTestId("checkout-button").click();
    //cy.getByTestId('edit-address-button').click();
    cy.getByTestId("shipping-first-name-input")
      .should("be.visible")
      .clear()
      .type("Labais");
    cy.getByTestId("shipping-last-name-input")
      .should("be.visible")
      .clear()
      .type("Sliktais");
    cy.getByTestId("shipping-address-input")
      .should("be.visible")
      .clear()
      .type("Bērzu iela, 8");
    cy.getByTestId("shipping-postal-code-input")
      .should("be.visible")
      .clear()
      .type("LV-1064");
    cy.getByTestId("shipping-city-input")
      .should("be.visible")
      .clear()
      .type("Rīga");
    cy.getByTestId("shipping-country-select")
      .should("be.visible")
      .select("Canada");
    cy.getByTestId("submit-address-button").click();

    cy.getByTestId("radio-button").click();
    cy.getByTestId("submit-delivery-option-button").click();
    cy.getByTestId("submit-payment-button").click();
    cy.getByTestId("submit-order-button").click();

    cy.getByTestId("nav-menu-button").click();
    cy.getByTestId("logout-button").click();
  });
});
