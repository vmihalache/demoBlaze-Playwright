import {type Locator, type Page} from '@playwright/test'


export class CreateUser {
    readonly page: Page
    readonly openSignUpModalButton: Locator
    readonly userName: Locator
    readonly password: Locator
    readonly closeButton: Locator
    readonly signUpButton: Locator

constructor (page: Page) {
this.page = page
this.openSignUpModalButton = page.getByTestId("#signInModal")
this.userName = page.getByRole("textbox",{name:"UserName"})
this.password = page.getByRole("textbox",{name:"Password"})
this.signUpButton=page.getByRole("button", {name:"Sign Up"})
this.closeButton=page.getByRole("button", {name:"Close"})
}
async goto () {
    await this.page.goto("https://www.demoblaze.com/index.html")
}
async openCreateUserFlow () {
    await this.openSignUpModalButton.click()
}
async fillUserNameBox (fixtureName: string) {
    await this.userName.fill(fixtureName)
}
async fillPasswordBox(fixturePassword: string) {
    await this.password.fill(fixturePassword)
}
async signUp() {
    await this.signUpButton.click()
}
}