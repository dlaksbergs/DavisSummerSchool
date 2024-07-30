class Global {
  elements = {
    menuButton: () => cy.getByTestId("nav-menu-button"),
    menuButtonLinks: (pageName) =>
      cy.getByTestId("nav-menu-popup").contains("a", pageName),
  };
  navigateMenuButton = {
    openPage: (pageName) => {
      this.elements.menuButton.click;
      this.elements.menuButtonLinks(pageName);
    },
  };
}
export default new Global();
