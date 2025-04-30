// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        baseURL: 'https://example.com', // Default URL
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
    },
    reporter: [['html', { outputFolder: 'playwright-report' }]],
    testDir: './tests',
});
