import Login from "../pageElements/Login";
import Home from "../pageElements/Home";

describe("login functionality", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");
  beforeEach(() => {
    cy.session("loginSession", () => {
      cy.login(USERNAME, PASSWORD);
    });
  });

  it("Step 1: Select product and verify details", () => {
    cy.visit("/");

    // Step 3
    Home.elements.Heading().should("have.text", "Store of Excellence");

    // Step 4
    cy.getByTestId("product-wrapper").first().click();
    cy.getByTestId("product-title").contains("Medusa T-Shirt");
  });

  it("Step 2: Select product options and add to cart", () => {
    cy.visit("/products/t-shirt");
    // Step 5
    cy.getByTestId("option-button").contains("M").click();
    cy.getByTestId("option-button")
      .contains("M")
      .should("have.class", "bg-ui-bg-subtle");

    // Step 6
    cy.getByTestId("option-button").contains("Black").click();
    cy.getByTestId("option-button")
      .contains("Black")
      .should("have.class", "bg-ui-bg-subtle");

    // Step 7
    cy.getByTestId("add-product-button").click();
    cy.getByTestId("nav-cart-link").scrollIntoView().should("be.visible");
  });

  it("Step 3: View cart and proceed to checkout", () => {
    cy.visit("/cart");
    // Step 8
    cy.getByTestId("nav-cart-link").click();
    cy.getByTestId("product-title").contains("Medusa T-Shirt");

    // Step 9
    cy.getByTestId("checkout-button").click();
    cy.contains("h2", "Shipping Address");
  });

  it("Step 4: Fill shipping information", () => {
    cy.visit("/checkout?step=address");
    //cy.getByTestId('edit-address-button').click();
    // Step 10
    cy.getByTestId("shipping-first-name-input")
      .should("be.visible")
      .clear()
      .type("Labais")
      .should("have.value", "Labais");
    cy.getByTestId("shipping-last-name-input")
      .should("be.visible")
      .clear()
      .type("Sliktais")
      .should("have.value", "Sliktais");
    cy.getByTestId("shipping-address-input")
      .should("be.visible")
      .clear()
      .type("Bērzu iela, 8")
      .should("have.value", "Bērzu iela, 8");
    cy.getByTestId("shipping-postal-code-input")
      .should("be.visible")
      .clear()
      .type("LV-1064")
      .should("have.value", "LV-1064");
    cy.getByTestId("shipping-city-input")
      .should("be.visible")
      .clear()
      .type("Rīga")
      .should("have.value", "Rīga");
    cy.getByTestId("shipping-country-select")
      .should("be.visible")
      .select("Latvia")
      .should("have.value", "lv");

    // Step 11
    cy.getByTestId("submit-address-button").click();
  });

  it("Step 5: Select delivery option and proceed to payment", () => {
    // Step 12
    cy.visit("/checkout?step=delivery");
    cy.getByTestId("radio-button").should("be.visible");
    cy.getByTestId("radio-button").first().click();
    cy.getByTestId("radio-button")
      .first()
      .should("have.attr", "aria-checked", "true");

    // Step 13
    cy.getByTestId("submit-delivery-option-button").click();
    cy.getByTestId("radio-button")
      .first()
      .should("have.attr", "aria-checked", "true");

    // Step 14
    cy.getByTestId("submit-payment-button").click();
    cy.getByTestId("submit-order-button").should("be.visible");
  });

  it("Step 6: Place order and logout", () => {
    // Step 15
    cy.visit("/checkout?step=review");
    cy.getByTestId("submit-order-button").click();
    cy.getByTestId("product-name").contains("Medusa T-Shirt");

    // Step 16
    cy.getByTestId("nav-menu-button").click();
    cy.getByTestId("home-link").should("be.visible");

    // Step 17
    cy.getByTestId("logout-button").click();
    cy.contains("h1", "Welcome back");
  });
  it("Step 7: Change language", () => {
    cy.visit("/");
    cy.getByTestId("nav-menu-button").click();
    cy.getByTestId("home-link").should("be.visible");
    cy.get('button[role="combobox"]').click();
    cy.contains("span", "LV").click();

    cy.getByTestId("nav-menu-button").click();
    cy.get('button[role="combobox"]').should("contain", "LV");
  });
});
