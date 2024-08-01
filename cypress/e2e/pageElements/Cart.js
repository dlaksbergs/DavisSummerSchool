class Cart {
  elements = {
    checkoutButton: () => cy.getByTestId("checkout-button"),
    addDiscountButton: () => cy.getByTestId("add-discount-button"),
    discountInput: () => cy.get('[data-testid="discount-input"]'), // TODO: rewrite with getByTestId
    discountClick: () =>cy.get('#code'), // TODO: rewrite with getByTestId
    discountApplyButton: () => cy.getByTestId("discount-apply-button"),
    discountErrorMessage: () => cy.getByTestId("discount-error-message"),
  };
}

export default new Cart();
