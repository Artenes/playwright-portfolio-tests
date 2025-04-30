const { test, expect } = require('@playwright/test');

test('add product to cart and validate cart contents', async ({ page }) => {
    // Visit login page
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Confirm redirect to inventory page
    await expect(page).toHaveURL(/inventory.html/);

    // Add a product to the cart (e.g., Sauce Labs Backpack)
    await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');

    // Validate cart badge appears with correct count
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');

    // Click the cart icon
    await page.click('.shopping_cart_link');

    // Confirm cart page
    await expect(page).toHaveURL(/cart.html/);

    // Validate that the product is listed in the cart
    const cartItem = page.locator('.cart_item');
    await expect(cartItem).toContainText('Sauce Labs Backpack');
});
