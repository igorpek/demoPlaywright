import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://infinum.com/');
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  await expect(page.locator('h1')).toHaveText("We are Infinum") 
});