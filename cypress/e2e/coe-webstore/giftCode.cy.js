import Global from "../pageElements/Global";
import ProductDescriptionPage from "../pageElements/ProductDescriptionPage";
import Home from "../pageElements/Home";
import ProductListingPage from "../pageElements/ProductListingPage";
import Cart from "../pageElements/Cart";
import Checkout from "../pageElements/Checkout";

//https://tdlschool.atlassian.net/browse/TSS22N-166
describe("switch language to Latvian", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  it("Step 1: Select product and verify details", () => {
    cy.visit("/");
    Home.elements.heading().should("have.text", "Store of Excellence"); // check if the page has loaded
    ProductListingPage.elements.shirt().click(); // choose a product
    ProductDescriptionPage.elements.title().contains("Medusa T-Shirt"); // check if the correct product has been chosen
  });

  it("Step 2: Select product options and add to cart", () => {
    cy.visit("/products/t-shirt");
    ProductDescriptionPage.elements.sizeXL().click(); // select size
    ProductDescriptionPage.elements.sizeXL().should("have.class", "bg-ui-bg-subtle"); // check if the correct size is selected
    ProductDescriptionPage.elements.colorBlack().click(); // select color
    ProductDescriptionPage.elements.colorBlack().should("have.class", "bg-ui-bg-subtle"); // check if the correct color is selected
    ProductDescriptionPage.elements.addProductButton().click(); // add the product to the cart
    ProductDescriptionPage.elements.cartButton().scrollIntoView().should("be.visible"); // check if the cart icon has appeared
  });

  it("Step 3: Enter the code and check the error message", () => {
    cy.visit("/cart"); // visit the cart page
    ProductDescriptionPage.elements.title().contains("Medusa T-Shirt"); // check if the correct product is in the cart
    Cart.elements.addDiscountButton().click(); // click on add discount button

    Cart.elements.discountInput().type('Discount', { force: true }).should("have.value", "Discount");//enter the code
    
    Cart.elements.discountApplyButton().click();//click the apply button
    Cart.elements.discountErrorMessage().should("contain.text", "Discount/Gift card with code Discount was not found");//check if the correct error message is displayed
  });
});
