import { Locator, Page } from "@playwright/test";

interface SingleProductLocators {
    name: Locator;
    price: Locator;
    description: Locator;
    page: Page
}

export class SingleProduct implements SingleProductLocators {
    readonly name: Locator;
    readonly price: Locator;
    readonly description: Locator;
    readonly card:Locator
    readonly page: Page
  
    constructor(card: Locator) {
      this.card = card
      this.name = card.locator('h4') 
      this.price = this.card.locator('h5');
      this.description = this.card.locator('p.card-text');
    }
  
    get priceMethod() {
      return this.price;
    }
  
    get descriptionMethod() {
      return this.description;
    }
    get nameMethod() {
      return this.name
    }
  }