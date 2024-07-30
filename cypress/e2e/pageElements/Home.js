class Home {
  elements = {
    Heading: () => cy.getByTestId("nav-store-link"),
  };
}

export default new Home();
