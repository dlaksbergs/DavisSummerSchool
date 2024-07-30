class Home {
  elements = {
    heading: () => cy.getByTestId("nav-store-link"),
  };
}

export default new Home();
