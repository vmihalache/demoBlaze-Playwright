import test from "@playwright/test";
import { syncProductFixture } from '../utils/generate-fixtures'
import { ProductPage } from "../pages/productPage";
import { Navigation } from "../utils/navigation";
import { SingleProduct } from "../business/productCard.ts";
import { ProductUtils } from "../utils/product-utils.ts";
import { ConditionalUtils } from "../utils/conditional-utils.ts";



test('should check random product details', async ({ page }) => {
    const navigation = new Navigation(page)
    const productPage = new ProductPage(page)
    const productUtils = new ProductUtils(page)
    await navigation.goto()
    await productPage.productCheck()
    const syncProduct = new syncProductFixture('tests/fixtures/products.json', page)
    await syncProduct.iterateCard()

    for (let i = 0; i < await productPage.cardLocator().count(); i++) {
        const card = await productUtils.getRandomCard()
        const conditionalUtils = new ConditionalUtils()
        await card.hover();
        const singleProduct = new SingleProduct(card)
        const details = await productUtils.getProductDetailsFromCard(singleProduct);
        if (details) {
            await conditionalUtils.validate(details);
        }
    }
})





