import { expect, type Locator, type Page } from '@playwright/test';

export class TeamsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h1.teams_title__IABsg');
  }

  async goto() {
    await this.page.goto('https://www.euroleaguebasketball.net/en/euroleague/teams');
  }

//   async getStarted() {
//     await this.getStartedLink.first().click();
//     await expect(this.gettingStartedHeader).toBeVisible();
//   }

//   async pageObjectModel() {
//     await this.getStarted();
//     await this.pomLink.click();
//   }
}