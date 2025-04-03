const { expect } = require('@playwright/test');
import defineConfig from '../playwright.config'

class DropdownFieldPage {

    constructor(page) {
        this.page = page;
        this.dpd_sel_Fruits = page.locator("//select[@id='fruits']");
        this.dpd_sel_superHeros = page.locator("//select[@id='superheros']");
        this.dpd_content = page.locator("//p[@class='subtitle' and contains(text(),'You have selected')]/ancestor::div[@class='content']");
        this.dpd_sel_Languages = page.locator("//select[@id='lang']");
        this.dpd_sel_Countries = page.locator("//select[@id='country']");
    }

    async navigateToDropdownsPage() {
        await this.page.goto(defineConfig.letcodeURL_Dropdowns);
        await this.page.waitForTimeout(2000);
    }

    async selectDropdownUsingVisibleTextDPDone() {
        await this.dpd_sel_Fruits.selectOption({ label: 'Pine Apple' });
        expect(await this.dpd_content.first()).toHaveText('You have selected Pine Apple');
        expect(await this.dpd_sel_Fruits.getAttribute('multiple') !== null).toBe(false);
        await this.page.waitForTimeout(2000);
    }

    async selectDropdownUsingIndexAndValidateElementTextandColorDPDTwo() {
        await this.dpd_sel_superHeros.selectOption({ index: 3 });
        expect(await this.dpd_content.nth(1)).toHaveText('You have selected Batman');
        await this.dpd_sel_superHeros.selectOption({ index: 5 });
        expect(await this.dpd_content.nth(1)).toHaveText('You have selected Black Panther');
        await this.page.waitForTimeout(2000);
    }

    async getOptionsAndGetSelectedOptionsDPDThree() {
        const options = await this.dpd_sel_Languages.locator('option').allTextContents();
        console.log(options);
        //await this.dpd_sel_Languages.selectOption({ index : -1});  ----- Selects last option
        const Lastoption = await this.dpd_sel_Languages.locator('option').last().textContent();
        await this.dpd_sel_Languages.selectOption({ label: Lastoption.trim() });
        expect(await this.dpd_content.nth(1)).toHaveText('You have selected C#');
        await this.page.waitForTimeout(2000);
    }

    async selectOptionByValueAndPrintDPDFour() {
        await this.dpd_sel_Countries.selectOption({ value: 'India' });
        console.log(await this.dpd_sel_Countries.evaluate(select => select.value));
        await this.page.waitForTimeout(2000);
    }
}
export default { DropdownFieldPage };