const { expect } = require('@playwright/test');
const { getCSSValue } = require('../Utilities').default;
import defineConfig from '../playwright.config'

class WaitPage {

    constructor(page) {
        this.page = page;
        this.btn_clickToOpenAlert = page.locator('button#accept');
    }

    async navigateToWaitPage() {
        await this.page.goto(defineConfig.letcodeURL_Wait);
        await this.page.waitForTimeout(2000);
    }

    async clickButtonAndWaitForAlertToAppearAndAccept() {
        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.btn_clickToOpenAlert.click()
          ]);
          
          console.log(dialog.message());
          expect(dialog.message()).toEqual("Finally I'm here, just to say Hi :)");
          await dialog.accept();   
    }
}

export default { WaitPage };