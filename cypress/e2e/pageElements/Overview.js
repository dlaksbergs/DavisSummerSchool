class Overview {
  elements = {
    productName: () => cy.getByTestId("product-name"),
  };
}

export default new Overview();
