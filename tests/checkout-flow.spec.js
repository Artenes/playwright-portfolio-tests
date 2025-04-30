const { test, expect } = require('@playwright/test');

test('complete checkout flow successfully', async ({ page }) => {
    // Step 1: Login
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory.html/);

    // Step 2: Add a product to cart
    await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // Step 3: Go to cart
    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL(/cart.html/);

    // Step 4: Click checkout
    await page.click('button[data-test="checkout"]');
    await expect(page).toHaveURL(/checkout-step-one.html/);

    // Step 5: Fill out customer info
    await page.fill('input[data-test="firstName"]', 'John');
    await page.fill('input[data-test="lastName"]', 'Doe');
    await page.fill('input[data-test="postalCode"]', '12345');
    await page.click('input[data-test="continue"]');

    // Step 6: Review and finish
    await expect(page).toHaveURL(/checkout-step-two.html/);
    await page.click('button[data-test="finish"]');

    // Step 7: Assert success message
    const confirmationMessage = page.locator('.complete-header');
    await expect(confirmationMessage).toHaveText('Thank you for your order!');
});
