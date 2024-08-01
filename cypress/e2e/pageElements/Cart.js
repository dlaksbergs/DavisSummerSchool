class Cart {
  elements = {
    checkoutButton: () => cy.getByTestId("checkout-button"),
    addDiscountButton: () => cy.getByTestId("add-discount-button"),
    discountInput: () => cy.get('[data-testid="discount-input"]'),
    discountClick: () =>cy.get('#code'),
    discountApplyButton: () => cy.getByTestId("discount-apply-button"),
    discountErrorMessage: () => cy.getByTestId("discount-error-message"),
  };
}

export default new Cart();
