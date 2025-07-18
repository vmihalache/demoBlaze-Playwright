import { Locator, Page } from "@playwright/test";

  export class ProductPage {
    readonly page: Page
    card: Locator
    constructor(page: Page) {
      this.page = page
<<<<<<< HEAD
      this.card = page.locator('.card.h-100')
=======
      this.card = page.locator('.card.h-100 a img')
>>>>>>> productBusiness
    }
    cardLocator () {
      return this.card
    }
    cardLocatorHover() {
      return this.card.hover()
    }
    async productCheck() {
<<<<<<< HEAD
      await this.cardLocator().nth(0).waitFor({ state: "visible" })
   }
=======
      const count = await this.cardLocator().count();
      console.log(`Product cards found: ${count}`);
      if (count === 0) throw new Error('No product cards found after waiting!');
    }    
>>>>>>> productBusiness
  }

