import {type Locator, type Page} from '@playwright/test'


export class UserActions {
    readonly page: Page
    readonly closeButton: Locator
    readonly saveSignUpModal: Locator
    readonly openSignUpModal: Locator

constructor (page: Page) {
   
this.page = page
this.openSignUpModal=page.getByRole("link", {name:"Sign Up"})
this.closeButton=page.getByRole("button", {name:"Close"})
this.saveSignUpModal = page.getByRole("button", {name:"Sign Up"})

}
// async fillUserNameBox (fixtureName: string, userName: Locator) {
//     await userName.fill(fixtureName);
// }
async fillUserNameBox(fixtureName: string, userName: Locator) {
    await userName.waitFor({ state: 'visible', timeout: 5000 }); // ensure input is visible
    await userName.fill(''); // clear it
    await userName.fill(fixtureName)// simulate slow typing
  }
  async fillPasswordBox(fixtureName: string, password: Locator) {
    await password.waitFor({ state: 'visible', timeout: 5000 }); // ensure input is visible
    await password.fill(''); // clear it
    await password.fill(fixtureName)// simulate slow typing
  }
// async fillPasswordBox(fixturePassword: string,password:Locator) {
//     await password.fill(fixturePassword)
// }
}