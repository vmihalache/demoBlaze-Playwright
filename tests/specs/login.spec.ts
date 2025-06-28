import { test, expect } from '@playwright/test';
import { CreateUser } from '../../tests/pages/userCreate.page'
import { randomUser  } from '../../tests/fixtures/user.fixture';

test('should create a new user', async ({ page }) => {
  const createUser = new CreateUser(page);
  const { goodUser, badUser } = randomUser();
  await createUser.goto();
  await createUser.openCreateUserFlow();
  await createUser.fillUserNameBox(goodUser.userName);
  await createUser.fillPasswordBox(goodUser.password);
  page.on('dialog', dialog => dialog.accept());
  await createUser.signUp();
  await page.getByRole('button').click();
});