My Contributions

✅ Designed the overall structure: pages/, tests/, models/, with some later refinements.

✅ Implemented the login/productCart flows using Playwright’s expect() and core selector strategies.

✅  Organized a clean folder layout, including components/, fixtures/, and logical grouping of pages.

✅ Wrote and named test cases like login.spec.ts and signup.spec.ts, with clear flow purposes.

✅ Introduced the use of data-* attributes to simplify and stabilize locators.

✅ Authored meaningful assertions, not just relying on visual cues but using state/DOM checks.

✅ Drove the effort to cover both login and sign-up flows, even when facing retry logic or brittle selectors.
    
✅  Initialy implemented the dynamic fixure classes and logic
   
✅  Was at the head of implementing abstraction through AbstractProduct and its extended classes.
   
✅  Wrote the initial form of the conditional logic that will run through all the productCart checks in all their views.
   


GPT's Suggestions and Interventions

All code was generated based on my prompts, questions, and architectural direction. Every suggestion was reviewed and validated by me. GPT served as a support tool for rapid prototyping and research, not as a replacement for implementation. Some ideas were explicitly rejected—for instance, repeated suggestions to use #id selectors were avoided due to their inflexibility in Playwright.

✅ Extracted UserFormBase as a reusable abstraction for shared modal controls (username, password).

✅ Composed deeply-nested locators like:
modalRoot.locator('label:has-text("Username:")').locator('..').locator('input')
—to match DOM structures that lacked clean hooks.

✅ Wrapped the page.once('dialog') listener in a Promise<string>, capturing alert messages for assertions.

✅ Proposed an abstract BaseModal class to generalize modal behaviors across pages.

✅ Encouraged role-based and label-based selectors, such as getByRole() or getByLabelText(), for resilience.

✅ Introduced visual and state assertions like toHaveText, toBeVisible, strengthening test reliability.

✅ Suggested clearer separation of concerns between test logic and page object logic.

✅ Refactored repetitive code into helpers or abstractions to improve readability and maintenance.
Advised clean separation of concerns, keeping assertions in tests and behaviors in POMs — especially during the abstraction of product card details and conditional validation utilities.

✅ Supported fixture workflow design, guiding the syncing of products.json via scraping logic (syncProductFixture.iterateCard()), and suggested organizing dynamic fixture handling as its own class for modularity.

✅ Helped refine test naming and structure for readability and intent clarity — e.g., check-product-details.spec.ts clearly communicates the flow and scope.

✅ Helped describe and refine the concept of reusing the same method interface (nameMethod, priceMethod, descriptionMethod) across different product contexts (main view, product page, cart) by using a shared base class (AbstractProduct). This allowed test utilities to handle all types uniformly without extra conditionals.

Note
This file serves as documentation of human vs. AI contributions for transparency and learning.
It also reflects a workflow where AI acts as a pairing assistant, but not the originator of decisions or owner of the codebase.

_Last updated: July 18, 2025 — Project owner: Vali_