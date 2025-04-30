
# 🎭 Playwright E2E Tests for SauceDemo

This project demonstrates end-to-end (E2E) test automation using [Microsoft Playwright](https://playwright.dev/) against the demo e-commerce website [SauceDemo](https://www.saucedemo.com/).

It showcases:
- UI testing with Playwright's test runner
- Reusable login logic with `beforeEach()`
- Cart validation and checkout flow
- Test isolation and grouping with `test.describe()`

---

## 📁 Project Structure

```
playwright-portfolio-tests/
├── tests/
│   ├── login.spec.js              # Login and inventory verification
│   ├── add-to-cart.spec.js        # Cart badge and contents
│   └── checkout-flow.spec.js      # End-to-end checkout test
│   └── with-login.spec.js         # Showcase of reusable logic in beforeEach()
├── playwright.config.js           # Global Playwright settings
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Artenes/playwright-portfolio-tests.git
cd playwright-portfolio-tests
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

---

## 🧪 Running Tests

### Run all tests (headless)

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/add-to-cart.spec.js
```

### View HTML report

```bash
npx playwright show-report
```

---

## 🔑 Features Demonstrated

- ✅ Login with valid credentials
- ✅ Adding product(s) to the cart
- ✅ Cart badge count validation
- ✅ Navigating to cart and validating item
- ✅ Completing the checkout flow
- ✅ Using `beforeEach()` to reuse login logic
- ✅ Organized tests with `test.describe()`

---

## 🧠 Technologies

- [Playwright](https://playwright.dev/) for browser automation
- JavaScript
- HTML reports and auto-screenshots on failure

---

## 📝 Author

**Artenes Junior Gomes Nogueira**

- GitHub: https://github.com/Artenes
- LinkedIn: https://linkedin.com/in/artenes

---

## 📄 License

This project is licensed under the MIT License.