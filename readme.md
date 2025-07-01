# DEMOBLAZE PLAYWRIGHT TESTS

## Project Overview

This repository contains Playwright end-to-end tests for the Demoblaze website.  
It covers user flows such as account creation, login, and logout using a Page Object Model and layered architecture.

## Project Structure

/DEMOBLAZE PLAYWRIGHT TESTS/  
├── README.md  
├── tests/  
│   └── create-and-login.spec.ts  
├── stories/  
│   └── login-user-stories.md  
├── prompts/  
│   └── login-test-generation.md  
├── layers/  
│   └── login-layer-breakdown.md  
└── gpt-usage.md  

## Prerequisites

- Node.js v24.0.7 or higher  
- Playwright installed (`npm install -D @playwright/test`)  
- Faker installed v9.8.0 or higher  

## Running Tests

npx playwright test

To run a specific test file:

npx playwright test tests/create-and-login.spec.ts

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

## Known Issues / TODO

- Add more assertions in some tests (e.g., sign-up failure cases)  
- Expand coverage for invalid credentials and edge cases

## Notes on AI Assistance

Some parts of the code and architecture have been assisted by AI suggestions, primarily for prototyping and debugging ideas.  
All final decisions, implementation, and reviews are made by the author to maintain control over quality and learning.

## Contribution

Feel free to open issues or PRs to improve test coverage, structure, or code quality.
