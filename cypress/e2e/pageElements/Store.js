class Store {
  elements = {
    sortByButton: () => cy.get('button[role="combobox"]'),
    highToLowSort: () => cy.contains("span", "Price: High -> Low"),
    lowToHighSort: () => cy.contains("span", "Price: Low -> High"),
    productsList: () => cy.getByTestId("products-list"),
    price: () => '[data-testid="price"]',
    storeViewButton: () => cy.get('a[href="/us/store"] button.transition-fg').contains("Store view"), // TODO: is 'button.transition-fg' absolutely necessary? can try removing that part
    tableViewButton: () => cy.getByTestId("table-view-btn"),
  };

  // Method to sort products
  sortProducts(sortOrder) {
    this.elements.sortByButton().click(); // Click on the sort button

    if (sortOrder === "lowToHigh") {
      this.elements.lowToHighSort().click(); // Choose Low -> High
    } else if (sortOrder === "highToLow") {
      this.elements.highToLowSort().click(); // Choose High -> Low
    }

    // Wait for the products to be sorted and verify
    this.verifySortingCompleted();
  }

  // Method to verify sorting completion
  verifySortingCompleted() {
    this.elements.productsList().should('exist'); // Ensure products list exists
    cy.get('button[role="combobox"]').should('not.have.attr', 'aria-busy'); // Ensure the sort button is not busy
    cy.wait(1000); // Optional: adjust or remove if sorting indication is not needed       // TODO: try to get rid of wait and replace waiting for some element to be visible or not visible
  }

  // Method to get all products' prices
  getAllProductsPrice() {
    return this.elements.productsList().find("li").find(this.elements.price());
  }

  // Method to verify prices are sorted
  verifyPricesSorted(order = "ascending") {
    this.getAllProductsPrice().then(($prices) => { //get all of the product prices
      const prices = Array.from($prices, (price) => //put the prices in an array
        parseFloat(price.innerText.replace("$", "")),// remove the $ symbol and parse as float
      );
      if (order === "ascending") {
        for (let i = 0; i < prices.length - 1; i++) {// iterate through the array
          expect(prices[i]).to.be.at.most(prices[i + 1]);//check if current price is at most the next price
        }
      } else if (order === "descending") {
        for (let i = 0; i < prices.length - 1; i++) {//iterate through the array
          expect(prices[i]).to.be.at.least(prices[i + 1]);//check if current price is at least the next price
        }
      }
    });
  }
}

export default new Store();
