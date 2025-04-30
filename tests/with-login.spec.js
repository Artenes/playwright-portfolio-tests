const { test, expect } = require('@playwright/test');

const login = async (page) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory.html/);
};

test.describe('With logged-in user', () => {
    test.beforeEach(async ({ page }) => {
        await login(page);
    });

    test('cart badge should update after adding item', async ({ page }) => {
        await page.click('button[data-test="add-to-cart-sauce-labs-bike-light"]');
        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    });

    test('can visit cart page directly after login', async ({ page }) => {
        await page.click('.shopping_cart_link');
        await expect(page).toHaveURL(/cart.html/);
    });
});
