class Checkout {
  elements = {
    firstNameInput: () => cy.getByTestId("shipping-first-name-input"),
    lastNameInput: () => cy.getByTestId("shipping-last-name-input"),
    addressInput: () => cy.getByTestId("shipping-address-input"),
    postalCodeInput: () => cy.getByTestId("shipping-postal-code-input"),
    cityInput: () => cy.getByTestId("shipping-city-input"),
    countrySelect: () => cy.getByTestId("shipping-country-select"),
    submitAddressButton: () => cy.getByTestId("submit-address-button"),
    deliveryStandart: () => cy.getByTestId("radio-button").first(),
    submitDeliveryButton: () => cy.getByTestId("submit-delivery-option-button"),
    paymentMethod: () => cy.getByTestId("radio-button"),
    submitPaymentButton: () => cy.getByTestId("submit-payment-button"),
    submitOrderButton: () => cy.getByTestId("submit-order-button"),
  };

  fillShippingInformation() {
    this.elements
      .firstNameInput()
      .should("be.visible")
      .clear()
      .type("Labais")
      .should("have.value", "Labais");
    this.elements
      .lastNameInput()
      .should("be.visible")
      .clear()
      .type("Sliktais")
      .should("have.value", "Sliktais");
    this.elements
      .addressInput()
      .should("be.visible")
      .clear()
      .type("Bērzu iela, 8")
      .should("have.value", "Bērzu iela, 8");
    this.elements
      .postalCodeInput()
      .should("be.visible")
      .clear()
      .type("LV-1064")
      .should("have.value", "LV-1064");
    this.elements
      .cityInput()
      .should("be.visible")
      .clear()
      .type("Rīga")
      .should("have.value", "Rīga");
    this.elements
      .countrySelect()
      .should("be.visible")
      .select("Latvia")
      .should("have.value", "lv");
  }
}

module.exports = new Checkout();
