import { test, expect } from '@playwright/test';
import { CreateUser } from '../pages/userCreate.page'
import {LogInUser} from '../pages/userLogin.page'
import { randomUser  } from '../fixtures/user.fixture';

test('should create a new user and login', async ({ page }) => {
  const createUser = new CreateUser(page);
  const loginUser = new LogInUser(page)

  const { goodUser, badUser } = randomUser();
  await createUser.goto();
  await createUser.openCreateUserFlow();
  await createUser.fillUserNameBox(goodUser.userName);
  await createUser.fillPasswordBox(goodUser.password);
  const signUpMsg = await createUser.signUp();
  expect(signUpMsg).toBe('Sign up successful.');
  await loginUser.loginFlow(goodUser.userName, goodUser.password)
  const welcomeMsg = loginUser.signInConfirmation(goodUser.userName);
  await welcomeMsg.waitFor({ state: 'visible' });
  await expect(welcomeMsg).toContainText(`Welcome ${goodUser.userName}`);
});