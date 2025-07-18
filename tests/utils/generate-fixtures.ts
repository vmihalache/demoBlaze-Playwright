import { Page } from '@playwright/test';
import * as fs from 'fs/promises';
import { ProductPage } from '../pages/productPage'
import { SingleProduct } from '../business/productCard.ts';

export class syncProductFixture {
    readonly fixturePath: string
    readonly page: Page
    constructor(fixturePath: string, page: Page) {
        this.fixturePath = fixturePath
        this.page = page
        //tests/fixtures/products.json'
    }
    products:{}[] = [];
    async iterateCard() {

        const productPage = new ProductPage(this.page)
        for (let i = 0; i < await productPage.cardLocator().count(); i++) {
            const newCard = new SingleProduct(productPage.cardLocator().nth(i))
            const name = await newCard.nameMethod.textContent();
            const price = await newCard.priceMethod.textContent();
            const description = await newCard.descriptionMethod?.textContent();

            if (name && price && description) {
                this.products.push({
                    name: name, price, description
                });
            }
        }

        await fs.writeFile(this.fixturePath, JSON.stringify(this.products, null, 2));
        console.log(`🔁 Fixture updated dynamically at ${this.fixturePath}`);
    }
    
}