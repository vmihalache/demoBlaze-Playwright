import { expect, type Locator, type Page } from '@playwright/test'
import { UserFormBase } from './userFormBase'
import { UserActions } from './userActions'

export class LogInUser extends UserFormBase {
    readonly page: Page
    readonly openLogInModalButton: Locator
    readonly logInButton: Locator
    constructor(page: Page) {
        super(page.getByRole('dialog', { name: 'Log in' }))
        this.page = page
        this.logInButton = page.getByRole("button", { name: "Log in" })
        this.openLogInModalButton = page.getByRole("link", { name: "Log in" })

    }
    signInConfirmation(userName: string) {
        return this.page.getByRole('link', { name: `Welcome ${userName}` });
    }

    async loginFlow(fixtureName: string, fixturePassword: string) {
        const actions = new UserActions(this.page)
        await actions.goto()
        await this.openLogInModalButton.click();
        await expect(this.modalRoot).toBeVisible();
        await actions.fillUserNameBox(fixtureName, this.userName)
        await actions.fillPasswordBox(fixturePassword, this.password)
        await this.logInButton.click()
        this.page.once('dialog', async dialog => {
            console.log('Dialog message:', dialog.message());
            await dialog.accept();
          });



    }
}

