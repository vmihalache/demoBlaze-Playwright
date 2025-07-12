import {type Locator, type Page} from '@playwright/test'
import { UserFormBase } from './userFormBase'
import { UserActions } from './userActions'
import { Navigation } from '../utils/navigation'

export class CreateUser extends UserFormBase{
    readonly page: Page
    readonly closeButton: Locator
    readonly saveSignUpModal: Locator
    readonly openSignUpModal: Locator

constructor (page: Page) {
    super(page.getByRole('dialog', { name: 'Sign up' }))
this.page = page
this.openSignUpModal=page.getByRole("link", {name:"Sign up"})
this.closeButton=page.getByRole("button", {name:"Close"})
this.saveSignUpModal = page.getByRole("button", {name:"Sign up"})
}

async goto () {
    await new Navigation(this.page).goto()
}
async openCreateUserFlow () {
    await this.openSignUpModal.click();
    
}
async fillUserNameBox (fixtureName: string) {
    await new UserActions(this.page).fillUserNameBox(fixtureName,this.userName)
  
}
async fillPasswordBox (fixturePassword: string) {
    await new UserActions(this.page).fillPasswordBox(fixturePassword,this.password)
  
}
async signUp(): Promise<string> {
    const dialogMessage = new Promise<string>((resolve) => {
      this.page.once('dialog', async (dialog) => {
        const msg = dialog.message();
        await dialog.accept();
        resolve(msg);
      });
    });
  
    await this.saveSignUpModal.click();
    return await dialogMessage;
  }
  
}