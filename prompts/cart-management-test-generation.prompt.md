import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/mainPage';
import { ProductPage } from '../../pages/productPage';
import { CartPage } from '../../pages/cartPage';

test.describe('Cart functionality tests', () => {

  test('@openProductPage - Clicking on a product opens the product page', async ({ page }) => {
    const mainPage = new MainPage(page);
    const productPage = new ProductPage(page);

    await mainPage.goto();
    await mainPage.openProduct('random Product');
    // TODO: Add assertion to verify product page opened
  });

  test('@addProduct - Clicking add product adds it to the cart', async ({ page }) => {
    const mainPage = new MainPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await mainPage.goto();
    await mainPage.openProduct('random Product');
    await productPage.addToCart();
    // TODO: Add assertion to verify product added to cart
  });

  test('@addCart - Clicking add product multiple times stacks it in the cart', async ({ page }) => {
    const mainPage = new MainPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await mainPage.goto();
    await mainPage.openProduct('random Product');
    await productPage.addToCart();
    await productPage.addToCart();
    // TODO: Add assertion to verify multiple quantities in cart
  });

  test('@deleteCart - Deleting a product removes it from the cart', async ({ page }) => {
    const mainPage = new MainPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await mainPage.goto();
    await mainPage.openProduct('random Product');
    await productPage.addToCart();
    await cartPage.goto();
    await cartPage.deleteProduct('random Product');
    // TODO: Add assertion to verify product removed from cart
  });

});