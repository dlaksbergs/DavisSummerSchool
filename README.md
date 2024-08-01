# DavisSummerSchool 2024

Welcome to the TDL Summer School project for 2024. This project involves end-to-end testing for an online webstore using Cypress.

## Project Overview

This project includes end-to-end tests for basic functionalities of the online webstore, such as login, add to cart, checkout, and logout.

## Test Scenarios

- ### Full flow

  - **Login Functionality:** Verify that users can successfully log in with valid credentials.
  - **Add to Cart:** Ensure products can be added to the cart from the product detail page and verify cart contents.
  - **Checkout Process:** Test the checkout flow from cart to payment, including shipping and billing information.
  - **Logout Functionality:** Verify successful logout and redirection to the login page.

- ### Additional scenarios
  - **Switching language to Latvian**
  - **Get redirected to Sign up**
  - **Sort by functionality**
  - **Logging out with language set to Latvian**
  - **Different store view functionality**
  - **Gift card or discount code functionality**

## Installation

Clone the repository:

```bash
git clone https://github.com/dlaksbergs/DavisSummerSchool.git
```

Install dependecies:

```bash
npm install
```

## File Formatting

This project uses [Prettier](https://www.npmjs.com/package/prettier) for code formatting.

### Formatting Code

**Format All Files:**

- Open a terminal and navigate to your project directory.
- Run the following command:
  ```bash
  npm run format
  ```

## Running Tests

### Using Cypress

1. **Open the Project:**

   - Ensure you are in the project directory where Cypress is set up.

2. **Open Cypress Test Runner:**

   - Open a terminal and run the command:
     ```bash
     npm run cypress-open
     ```

3. **Select Testing Type:**

   - In the Cypress Test Runner, select **E2E Testing**.

4. **Choose a Browser:**

   - Pick a browser of your choice (Chrome, Firefox, etc.) and click **Start**.

5. **Run the Test File:**
   - Click on the file `e2e.cy.js` to start running the end-to-end tests.

### In headless mode

1. Open a terminal and run the command:
   ```bash
   npm run cypress-run
   ```
