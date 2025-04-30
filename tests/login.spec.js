// tests/login.spec.js
const { test, expect } = require('@playwright/test');

test('successful login on SauceDemo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Fill username and password
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    // Click login button
    await page.click('#login-button');

    // Check that we are on the inventory page
    await expect(page).toHaveURL(/inventory.html/);

    // Assert some product is visible
    await expect(page.locator('.inventory_item').first()).toBeVisible();
});
