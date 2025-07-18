import { expect, Locator, Page } from "@playwright/test"
import { UserFormBase } from "./userFormBase"
import { UserActions } from "./userActions"
import { Navigation } from "../utils/navigation"

export class LogInUser extends UserFormBase {
    readonly page: Page
    readonly openLogInModalButton: Locator
    readonly logInButton: Locator
    constructor (page: Page) {
        super(page.getByRole('dialog', { name: 'Log in' }))
        this.page = page
        this.logInButton=page.getByRole("button", {name:"Log In"})
        this.openLogInModalButton = page.getByRole("link", {name:"Log in"})
        
    }
    signInConfirmation(userName: string) {
        return this.page.getByRole('link', { name: `Welcome ${userName}` });
      }
async loginFlow(username: string, password: string) {
  this.page.once('dialog', async dialog => {
    console.log('Dialog during login:', dialog.message());
    await dialog.accept();
  });
    const actions = new UserActions(this.page);
    const navigation = new Navigation(this.page)
    await navigation.goto();
    await this.openLogInModalButton.click();
    await expect(this.modalRoot).toBeVisible();
    await actions.fillUserNameBox(username, this.userName);
    await expect(this.userName).toHaveValue(username);
    await this.userName.press('Tab'); 
    await actions.fillPasswordBox(password, this.password);
    await expect(this.password).toHaveValue(password);
    await this.page.waitForTimeout(300);
  
    
  
    await this.logInButton.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}