import test, { expect } from "@playwright/test";
import { syncProductFixture } from '../utils/generate-fixtures'
import * as fs from 'fs/promises';
import { ProductPage } from "../pages/productPage";
import { Navigation } from "../utils/navigation";
import { SingleProduct } from "../business/productCard.ts";

test('should check random product details', async ({ page }) => {
    const navigation = new Navigation(page)
    const productPage = new ProductPage(page)
    await navigation.goto()
    await productPage.productCheck()
    const syncProduct = new syncProductFixture('tests/fixtures/products.json', page)
    await syncProduct.iterateCard()
    const data = JSON.parse((await fs.readFile('tests/fixtures/products.json')).toString());

    const count = await productPage.cardLocator().count()
    for (let i = 0; i < count; i++) {
        const prodToCheck = productPage.cardLocator().nth(Math.floor(Math.random() * count))
        await prodToCheck.hover()
        const product = new SingleProduct(prodToCheck)
        const name = await product.nameMethod.textContent()
        const description = await product.descriptionMethod.textContent()
        const price = await product.priceMethod.textContent()
        if (name && description && price) {
            expect(data.some(dataValue =>
                dataValue.name === name 
                && dataValue.description === description 
                && dataValue.price === price 
            )).toBeTruthy()

        }
    }
})
