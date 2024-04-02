const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://georgilukanov-shopping-list-exam.onrender.com//shopping-list');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  