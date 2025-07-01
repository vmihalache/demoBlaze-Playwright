My Contributions

✅ Designed the overall structure: pages/, tests/, models/, with some later refinements.

✅ Implemented the initial login flow using Playwright’s expect() and core selector strategies.

✅  Organized a clean folder layout, including components/, fixtures/, and logical grouping of pages.

✅ Wrote and named test cases like login.spec.ts and signup.spec.ts, with clear flow purposes.

✅ Introduced the use of data-* attributes to simplify and stabilize locators.

✅ Authored meaningful assertions, not just relying on visual cues but using state/DOM checks.

✅  Drove the effort to cover both login and sign-up flows, even when facing retry logic or brittle selectors.


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

Note
This file serves as documentation of human vs. AI contributions for transparency and learning.
It also reflects a workflow where AI acts as a pairing assistant, but not the originator of decisions or owner of the codebase.

_Last updated: July 1, 2025 — Project owner: Vali_