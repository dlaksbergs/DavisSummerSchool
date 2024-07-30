class ProductListingPage {
  elements = {
    shirt: () => cy.getByTestId("product-wrapper").first(),
  };
}

export default new ProductListingPage();
