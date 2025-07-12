import { Locator, Page } from "@playwright/test";

  export class ProductPage {
    readonly page: Page
    card: Locator
    constructor(page: Page) {
      this.page = page
      this.card = page.locator('.card.h-100')
    }
    cardLocator () {
      return this.card
    }
    cardLocatorHover() {
      return this.card.hover()
    }
    async productCheck() {
      await this.cardLocator().nth(0).waitFor({ state: "visible" })
   }
  }

