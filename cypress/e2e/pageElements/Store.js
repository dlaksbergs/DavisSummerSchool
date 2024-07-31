class Store {
  elements = {
    sortByButton: () => cy.get('button[role="combobox"]'),
    highToLowSort: () => cy.contains("span", "Price: High -> Low"),
    lowToHighSort: () => cy.contains("span", "Price: Low -> High"),
    productsList: () => cy.getByTestId("products-list"),
    price: () => '[data-testid="price"]',
    storeViewButton: () =>
      cy.get('a[href="/us/store"] button.transition-fg').contains("Store view"),
    tableViewButton: () => cy.getByTestId("table-view-btn"),
  };

  // Method to sort products
  sortProducts(sortOrder) {
    this.elements.sortByButton().click();
    if (sortOrder === "lowToHigh") {
      this.elements.lowToHighSort().click();
    } else if (sortOrder === "highToLow") {
      this.elements.highToLowSort().click();
    }
    cy.wait(600);
  }

  // Method to get all products' prices
  getAllProductsPrice() {
    return this.elements.productsList().find("li").find(this.elements.price());
  }

  // Method to verify prices are sorted
  verifyPricesSorted(order = "ascending") {
    this.getAllProductsPrice().then(($prices) => {
      const prices = Array.from($prices, (price) =>
        parseFloat(price.innerText.replace("$", "")),
      );
      if (order === "ascending") {
        for (let i = 0; i < prices.length - 1; i++) {
          expect(prices[i]).to.be.at.most(prices[i + 1]);
        }
      } else if (order === "descending") {
        for (let i = 0; i < prices.length - 1; i++) {
          expect(prices[i]).to.be.at.least(prices[i + 1]);
        }
      }
    });
  }
}

export default new Store();
