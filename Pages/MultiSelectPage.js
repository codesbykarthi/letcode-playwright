const { expect } = require('@playwright/test');
const { getCSSValue } = require('../Utilities').default;
import defineConfig from '../playwright.config'

class Multiselect {

    constructor(page) {
        this.page = page;
        this.container = 'div.list-container';
    }

    async navigateToMultiSelectPage() {
        await this.page.goto(defineConfig.letcodeURL_MultiSelect);
        await this.page.waitForTimeout(2000);
    }

    async selectThreeValuesandGetCount() {
        const list = await this.page.locator(`${this.container} >> div`).all();
        const data = ["Playwright", "Selenium", "Appium", "LetCode"];
        let selectedCount = 0;
        for (let listItem of list) {
            const text = (await listItem.innerText()).trim();
            if (data.includes(text)) {
                await listItem.click();
                await expect(listItem).toHaveClass(/selected/);
                selectedCount = selectedCount+1;
            }
        }
        console.log(`Number of selected items = ${selectedCount}`);
    }
}

export default { Multiselect };