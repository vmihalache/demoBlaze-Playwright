import { Locator, Page } from "@playwright/test";

  export class ProductPage {
    readonly page: Page
    card: Locator
    constructor(page: Page) {
      this.page = page
      this.card = page.locator('.card.h-100 a img')
    }
    cardLocator () {
      return this.card
    }
    cardLocatorHover() {
      return this.card.hover()
    }
    async productCheck() {
      const count = await this.cardLocator().count();
      console.log(`Product cards found: ${count}`);
      if (count === 0) throw new Error('No product cards found after waiting!');
    }    
  }

