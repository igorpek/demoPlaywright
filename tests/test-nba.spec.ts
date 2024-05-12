import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://nba.com/');
  await page.getByRole('navigation').getByRole('link', { name: 'Teams' }).click();
  await expect(page.locator('h1')).toHaveText("All Teams") 
});