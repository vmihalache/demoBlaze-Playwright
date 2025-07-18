import { Locator, Page } from "@playwright/test";
import { AbstractProduct } from "./productCard.ts";

export class productCart extends AbstractProduct {
    readonly addToCart: Locator;
    readonly cartAlt: Locator
    constructor(
        card: Locator
    ) {
        super(card, {
            name: 'h2',
            price: 'h3',
            description: '#myTabContent p'
        })
        this.addToCart = this.card.locator('a.btn', { hasText: 'Add to cart' })
    }
    addToCartClick() {
        this.addToCart.click()
    }

}

export class ProductCartDetail extends productCart {
    readonly detailCard:Locator
    constructor(page: Page) {
      const detailCard = page.locator('#tbodyid')
      super(detailCard)
      this.detailCard = detailCard
    }
  }
