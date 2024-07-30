class ProductDescriptionPage {
  elements = {
    Title: () => cy.getByTestId("product-title"),
    sizeL: () => cy.getByTestId("option-button").contains("L"),
    colorBlack: () => cy.getByTestId("option-button").contains("Black"),
    addProductButton: () => cy.getByTestId("add-product-button"),
    cartButton: () => cy.getByTestId("nav-cart-link"),
  };
}

export default new ProductDescriptionPage();
