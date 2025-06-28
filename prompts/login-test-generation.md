import { test, expect } from '@playwright/test';
import { CreateUser } from '../../pages/userCreate.Page';
import { fixtureUsers } from '../../fixtures/user.fixture';

test('should create a new user', async ({ page }) => {
  const createUser = new CreateUser(page);
  await createUser.goto();
  await createUser.openCreateUserFlow();
  await createUser.fillUserNameBox(fixtureUsers.goodUser.userName);
  await createUser.fillPasswordBox(fixtureUsers.goodUser.password);
  await createUser.signUp();
  // TODO: Add assertion
});
import { test, expect } from '@playwright/test';
import { CreateUser } from '../../pages/userCreate.Page';

test('should open the sign up modal', async ({ page }) => {
  const createUser = new CreateUser(page);
  await createUser.goto();
  await createUser.openCreateUserFlow();
  // TODO: Assert modal is visible
});
import { test, expect } from '@playwright/test';
import { CreateUser } from '../../pages/userCreate.Page';
import { fixtureUsers } from '../../fixtures/user.fixture';

test('should not create a user with empty fields', async ({ page }) => {
  const createUser = new CreateUser(page);
  await createUser.goto();
  await createUser.openCreateUserFlow();
  await createUser.fillUserNameBox(fixtureUsers.badUser.userName);
  await createUser.fillPasswordBox(fixtureUsers.badUser.password);
  await createUser.signUp();
  // TODO: Assert error or failure response
});
