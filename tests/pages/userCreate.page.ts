import {type Locator, type Page} from '@playwright/test'
interface Locators {
    page: Page
    Element: Locator
}

export class CrateUser {
    readonly page: Locators['page']
    readonly signUpButton: Locators['Element']
    readonly userName: Locators['Element']
    readonly password: Locators['Element']
    readonly closeButton: Locators['Element']
}