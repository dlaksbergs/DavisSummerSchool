class Cart {
  elements = {
    checkoutButton: () => cy.getByTestId("checkout-button"),
  };
}

export default new Cart();
