import { Locator} from "@playwright/test";
export class UserFormBase   {
    readonly userName: Locator
    readonly password: Locator
    readonly modalRoot: Locator
    
    constructor(modalRoot: Locator) {
        this.modalRoot = modalRoot;
        this.userName = modalRoot.locator('label:has-text("Username:")').locator('..').locator('input');
        this.password = modalRoot.locator('label:has-text("Password:")').locator('..').locator('input');

    }
}