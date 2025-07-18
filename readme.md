# DEMOBLAZE PLAYWRIGHT TESTS

## Project Overview

This repository contains Playwright end-to-end tests for the Demoblaze website.  
It covers user flows such as account creation, login, and logout using a Page Object Model and layered architecture.

## Project Structure

/demoblaze-playwright-tests/  
├── README.md  
├── tests/  
│   └── create-and-login.spec.ts  
│   └── check-product-details.spec.ts
     
├── stories/  
│   └── login-user-stories.md  
│   └── cart-management-stories.md
├── prompts/  
│   └── login-test-generation.md  
│   └── cart-management-test-generation.prompt.md  
├── layers/  
│   └── login-layer-breakdown.md  
│   └── product-management.md
└── gpt-usage.md  

## Prerequisites

- Node.js v24.0.7 or higher  
- Playwright installed (`npm install -D @playwright/test`)  
- Faker installed v9.8.0 or higher  

## Running Tests

npx playwright test

To run a specific test file:

npx playwright test tests/create-and-login.spec.ts  
npx playwright test check-product-details.spec.ts

## Key Concepts

- **Page Object Model (POM):**  
  Encapsulates page elements and actions to promote reuse and abstraction.

- **Layered Architecture:**  
  Separates concerns into business, pages, fixtures, and specs.

- **Use of Data Fixtures:**  
  To manage test data cleanly and keep tests deterministic.

## Current Test Coverage

- User creation  
- User login  
- User logout  
- Modal handling and alert dialogs  
- Product selection in the main view  
- Dynamic detail checks using product models (e.g., `AbstractProduct`, `ProductCartDetail`, etc.)

## Known Issues / TODO

- Add more assertions in some tests (e.g., sign-up failure cases)  
- Expand coverage for invalid credentials and edge cases  
- Expand the range of products that are validated  

## Design Philosophy

- Write stable, readable, and modular tests.  
- Use abstraction when it improves maintainability.  
- Prioritize learning and control over shortcuts.  
- AI is used as a tool, not a crutch.

## Notes on AI Assistance

This project includes selectively used AI-assisted suggestions, primarily for debugging edge cases or prototyping.  
All implementations and final decisions were made by the author to ensure full understanding, ownership, and quality.

## Contribution

Feel free to open issues or PRs to improve test coverage, structure, or code quality.
