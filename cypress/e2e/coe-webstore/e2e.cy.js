import Global from "../pageElements/Global";
import Home from "../pageElements/Home";
import ProductListingPage from "../pageElements/ProductListingPage";
import ProductDescriptionPage from "../pageElements/ProductDescriptionPage";
import Checkout from "../pageElements/Checkout";
import Cart from "../pageElements/Cart";
import Overview from "../pageElements/Overview";
//https://tdlschool.atlassian.net/browse/TSS22N-268
describe("Full user flow", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  it("Step 1: Select product and verify details", () => {
    cy.visit("/");
    Home.elements.heading().should("have.text", "Store of Excellence");//check if the page has loaded
    ProductListingPage.elements.shirt().click();//choose a product
    ProductDescriptionPage.elements.title().contains("Medusa T-Shirt");//check if the correct product has been chosen
  });

  it("Step 2: Select product options and add to cart", () => {
    cy.visit("/products/t-shirt");
    ProductDescriptionPage.elements.sizeXL().click();// select size
    ProductDescriptionPage.elements
      .sizeXL()
      .should("have.class", "bg-ui-bg-subtle");//check if the correct size is selected
    ProductDescriptionPage.elements.colorBlack().click();//select color
    ProductDescriptionPage.elements
      .colorBlack()
      .should("have.class", "bg-ui-bg-subtle");//check if the correct color is selected
    ProductDescriptionPage.elements.addProductButton().click();// add the product to the cart
    ProductDescriptionPage.elements
      .cartButton()
      .scrollIntoView()
      .should("be.visible");//check if the cart icon has appeared
  });

  it("Step 3: View cart and checkout", () => {
    cy.visit("/cart");//visit the cart page
    ProductDescriptionPage.elements.title().contains("Medusa T-Shirt");//check if the correct product is in the cart
    Cart.elements.checkoutButton().click();// click on the checkout button
    cy.contains("h2", "Shipping Address");// check if the correct page is loaded
    Checkout.fillShippingInformation();// call the function to fill in the shipping information
    Checkout.elements.submitAddressButton().click();// submit the shipping information
    Checkout.elements.deliveryStandart().should("be.visible");//check if it loaded correctly
    Checkout.elements.deliveryStandart().click();//choose the delivery method
    Checkout.elements
      .deliveryStandart()
      .should("have.attr", "aria-checked", "true");// check if the method is selected
    Checkout.elements.submitDeliveryButton().click();// submit the delivery method
    Checkout.elements
      .paymentMethod()
      .should("have.attr", "aria-checked", "true");//check if the payment method is automatically selected
    Checkout.elements.submitPaymentButton().click();//submit the payment method
    Checkout.elements.submitOrderButton().should("be.visible");//check if the submit order button is visible
    Checkout.elements.submitOrderButton().click();//submit all the information
    Overview.elements.productName().contains("Medusa T-Shirt");//check if the placed order has the correct product
  });

  it("Step 4: Logout", () => {
    cy.visit("/");//visit the main paig
    
    Global.elements.menuButton().click();//click on the burger menu
    Global.elements.menuButtonLinks().should("be.visible");//check if the side navigation menu appears

    Global.elements.logoutButton().click();//click on the logout button
    cy.contains("h1", "Welcome back");//check if the sign in page loads
  });
});
