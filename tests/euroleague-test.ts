import { test, expect } from '@playwright/test';
import { TeamsPage } from '../pages/teams-page';

test('test', async ({ page }) => {
  const teamsPage = new TeamsPage(page);

  await teamsPage.goto();
  await expect(teamsPage.title).toHaveText("Teams") 
});