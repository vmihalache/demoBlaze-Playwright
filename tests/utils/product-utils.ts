import { Page, Locator } from "@playwright/test";
import { AbstractProduct } from "../business/productCard.ts";
import { ProductPage } from "../pages/productPage.ts";
import { ProductCartDetail } from "../business/productCart.ts";

export class ProductUtils {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get productPage() {
        return new ProductPage(this.page);
    }

    async getRandomCard(): Promise<Locator> {
        const count = await this.productPage.cardLocator().count();
        const randomIndex = Math.floor(Math.random() * count);
        return this.productPage.cardLocator().nth(randomIndex);
    }

    async getProductDetailsFromCard(productX: Locator | AbstractProduct) {
        if (productX instanceof ProductCartDetail ) {
            const name = await productX.nameMethod.textContent();
            const price = await productX.priceMethod.textContent();
            const description = await productX.descriptionMethod?.textContent();
            return { name, price, description };
        }
    }
}
