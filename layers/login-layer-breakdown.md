**Test Data**
user.fixture.ts is responsible for generating random, valid usernames and passwords used during test runs.

**Page Objects & Logic**

userFormBase.ts
This class defines shared Locators (userName, password, and modalRoot) used across both the Sign Up and Login flows.
This shared base is necessary because both modals (Sign Up and Login) use the same label-based structure in the DOM for username and password inputs.

userCreate.page.ts

Inherits from UserFormBase.
Contains methods:
fillUserNameBox()
fillPasswordBox()
These fill in the form fields with the test user’s credentials.
It also contains:
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
This function handles the browser’s native alert dialog that appears after submitting the sign-up form. 
It Waits for a single dialog event via page.once
Captures and returns the message shown in the alert
Accepts (dismisses) the dialog

userLogin.page.ts
Also inherits from UserFormBase.
Contains the same fillUserNameBox() and fillPasswordBox() methods.
Handles the login form displayed in a modal as well

**Test File**
create-and-login.spec.ts
This is the main test spec that combines both flows: Sign Up and Login.
For clean separation of concerns, it creates instances of both page classes:

const createUser = new CreateUser(page);
const loginUser = new LogInUser(page);

The final expectation asserts that the user has logged in successfully and that their username is shown correctly in the welcome message:
expect(await homePage.welcomeText()).toContain(`Welcome ${goodUser.userName}`);