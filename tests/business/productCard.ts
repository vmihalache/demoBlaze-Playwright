import { Locator, Page } from "@playwright/test";

type ProductSelectorConfig = {
  name: string;
  price: string;
  description?: string;
};
export abstract class AbstractProduct {
  protected card: Locator;
  protected name!: Locator;
  protected price!: Locator;
  protected description?: Locator;

  constructor(card: Locator, config: ProductSelectorConfig) {
    this.card = card;
    this.name = card.locator(config.name);
    this.price = card.locator(config.price);
    if (config.description) {
      this.description = card.locator(config.description);
    }
  }
  get priceMethod(): Locator {
    return this.price
  }

  get descriptionMethod(): Locator | undefined {
    return this.description
  }

  get nameMethod(): Locator {
    return this.name
  }
}
export class SingleProduct extends AbstractProduct {
  constructor(card: Locator) {
    super(card, {
      name: 'h4',
      price: 'h5',
      description: 'p.card-text'
    });
  }
}

