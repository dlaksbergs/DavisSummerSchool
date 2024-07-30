class ProductListingPage {
  elements = {
    Shirt: () => cy.getByTestId("product-wrapper").first(),
  };
}

export default new ProductListingPage();
