import Global from "../pageElements/Global";
import Home from "../pageElements/Home";
import ProductListingPage from "../pageElements/ProductListingPage";
import ProductDescriptionPage from "../pageElements/ProductDescriptionPage";
import Checkout from "/Users/tdlschool18/DavisSummerSchool/cypress/e2e/pageElements/Checkout"
import Cart from "../pageElements/Cart";
import Overview from "../pageElements/Overview";

describe("login functionality", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  it("Step 1: Select product and verify details", () => {
    cy.visit("/");

    // Step 3
    Home.elements.heading().should("have.text", "Store of Excellence");

    // Step 4
    ProductListingPage.elements.shirt().click();
    ProductDescriptionPage.elements.title().contains("Medusa T-Shirt");
  });

  it("Step 2: Select product options and add to cart", () => {
    cy.visit("/products/t-shirt");
    // Step 5
    ProductDescriptionPage.elements.sizeL().click();
    ProductDescriptionPage.elements.sizeL()
      .should("have.class", "bg-ui-bg-subtle");

    // Step 6
    ProductDescriptionPage.elements.colorBlack().click();
    ProductDescriptionPage.elements.colorBlack()
      .should("have.class", "bg-ui-bg-subtle");

    // Step 7
    ProductDescriptionPage.elements.addProductButton().click();
    ProductDescriptionPage.elements.cartButton().scrollIntoView().should("be.visible");
  });

  it("Step 3: View cart and proceed to checkout", () => {
    cy.visit("/cart");
    // Step 8
    ProductDescriptionPage.elements.cartButton().click();
    ProductDescriptionPage.elements.title().contains("Medusa T-Shirt");

    // Step 9
    Cart.elements.checkoutButton().click();
    cy.contains("h2", "Shipping Address");
  });

  it("Step 4: Fill shipping information", () => {
    cy.visit("/checkout?step=address");
    //cy.getByTestId('edit-address-button').click();
    // Step 10
    Checkout.fillShippingInformation();

    // Step 11
    Checkout.elements.submitAddressButton().click();
  });

  it("Step 5: Select delivery option and proceed to payment", () => {
    // Step 12
    cy.visit("/checkout?step=delivery");
    Checkout.elements.deliveryStandart().should("be.visible");
    Checkout.elements.deliveryStandart().click();
    Checkout.elements.deliveryStandart().should("have.attr", "aria-checked", "true");

    // Step 13
    Checkout.elements.submitDeliveryButton().click();
    Checkout.elements.paymentMethod().should("have.attr", "aria-checked", "true");

    // Step 14
    
    Checkout.elements.submitPaymentButton().click();
    Checkout.elements.submitOrderButton().should("be.visible");
  });

  it("Step 6: Place order and logout", () => {
    // Step 15
    cy.visit("/checkout?step=review");
    Checkout.elements.submitOrderButton().click();
    Overview.elements.productName().contains("Medusa T-Shirt");

    // Step 16
    Global.elements.menuButton().click();
    Global.elements.menuButtonLinks().should("be.visible");

    // Step 17
    Global.elements.logoutButton().click();
    cy.contains("h1", "Welcome back");
  });
  /* it("Step 7: Change language", () => {
    cy.visit("/");
    cy.getByTestId("nav-menu-button").click();
    cy.getByTestId("home-link").should("be.visible");
    cy.get('button[role="combobox"]').click();
    cy.contains("span", "LV").click();

    cy.getByTestId("nav-menu-button").click();
    cy.get('button[role="combobox"]').should("contain", "LV");
    cy.getByTestId("logout-button").click();
    cy.contains("h1", "Laipni lūdzam atpakaļ");
  }); */
});
