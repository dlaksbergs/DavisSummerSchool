class ProductDescriptionPage {
  elements = {
    title: () => cy.getByTestId("product-title"),
    sizeXL: () => cy.getByTestId("option-button").contains("XL"),
    colorBlack: () => cy.getByTestId("option-button").contains("Black"),
    addProductButton: () => cy.getByTestId("add-product-button"),
    cartButton: () => cy.getByTestId("nav-cart-link"),
  };
}

export default new ProductDescriptionPage();
