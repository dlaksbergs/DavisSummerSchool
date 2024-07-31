class Global {
  elements = {
    menuButton: () => cy.getByTestId("nav-menu-button"),
    menuButtonLinks: (pageName) =>
      cy.getByTestId("nav-menu-popup").contains("a", pageName),
    logoutButton: () => cy.getByTestId("logout-button"),
    languageLatvian: () => cy.contains("span", "LV"),
    languageSelectButton: () => cy.get('button[role="combobox"]'),
  };
  navigateMenuButton = {
    openPage: (pageName) => {
      this.elements.menuButton.click;
      this.elements.menuButtonLinks(pageName);
    },
  };
}
export default new Global();
