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

async goto () {
    await this.page.goto("https://www.demoblaze.com/index.html")
}
async fillUserNameBox (fixtureName: string, userName: Locator) {
    await userName.fill(fixtureName);
}
async fillPasswordBox(fixturePassword: string,password:Locator) {
    await password.fill(fixturePassword)
}
}