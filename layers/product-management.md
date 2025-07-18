**Test Data**
We use the fixture file products.json as the basis for comparison between a randomly selected product card on the UI and the expected product data.

This JSON is dynamically updated every time the spec runs, by scraping all product cards in the main view.
The update is triggered by calling the iterateCard() method from the syncProductFixture class, which is instantiated directly inside the test spec.


**Page Objects & Logic**
Card selection logic lives in product-utils.ts, which defines two key methods:

getRandomCard(): Randomly selects a product card from the main view.

getProductDetailsFromCard(productX: Locator | AbstractProduct): Extracts name, price, and description from a given card.

The getProductDetailsFromCard() method accepts either a Locator or an instance of AbstractProduct because it uses accessors like:
const name = await productX.nameMethod.textContent();
const price = await productX.priceMethod.textContent();
const description = await productX.descriptionMethod?.textContent();

Both SingleProduct and ProductCartDetail extend AbstractProduct, which defines these shared getters.

Here’s how SingleProduct is implemented:
export class SingleProduct extends AbstractProduct {
  constructor(card: Locator) {
    super(card, {
      name: 'h4',
      price: 'h5',
      description: 'p.card-text'
    });
  }
}
This abstraction was designed because three different product contexts (main view, product view, cart view) all expose name, price, and description, but via different selectors.
By unifying access through AbstractProduct, we decouple selector differences from logic.


**Test File:check-product-details.spec.ts**
The spec file is check-product-details.spec.ts. The ID of the cards verified is random, this is prone to veryfing the same card multiple times, an approach when all of them are checked could be implemented in the future.
The check happens after the products are hovered. It is done in the ConditionalUtils class where the data is also normalized and some string property values(price for ex) are split so as to make the comparisson succesful. 
This spec:

Navigates to the product view,
Updates the fixture with current UI state,
Picks random cards,
Hovers over each card,
Extracts details,
Compares them with the fixture.

Note: Because cards are selected randomly, the same card may be tested multiple times. A more exhaustive approach — testing each card once — could be implemented later.

The comparison logic lives in ConditionalUtils, where extracted strings like price are normalized (e.g., $790 → 790) before validation to ensure matches succeed despite formatting differences.