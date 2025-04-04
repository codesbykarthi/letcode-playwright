const { expect } = require('@playwright/test');
const { dragAndDropBetweenElements } = require('../Utilities').default;
import defineConfig from '../playwright.config'

class SortPage {

    constructor(page) {
        this.page = page;
    }

    async navigateToSortPage() {
        await this.page.goto(defineConfig.letcodeURL_Sort);
        await this.page.waitForTimeout(2000);
    }

    async dragItemstoCompletedList() {
        const doneList = await this.page.locator("//h2[text()='Done']/parent::div");
        let refreshList = true; // this is used to requery the doneList locator everytime it goes into loop
        while (refreshList) {
            refreshList = false;
            const toDoList = await this.page.locator("//h2[text()='To do']/parent::div//div[@cdkdrag]").all();
            for (let listItem of toDoList) {
                const itemContent = (await listItem.textContent())?.trim();
                if (itemContent === "Go home" || itemContent === "Fall asleep") {
                    await dragAndDropBetweenElements(this.page, listItem, doneList);
                    refreshList = true; // Iterate the loop again 
                    break;
                }
            }
            await this.page.waitForTimeout(2000);
        }
    }

    async dragAllFromCompletedToTODOList() {
        const doneList = await this.page.locator("//h2[text()='Done']/parent::div//div[@cdkdrag]").all();
        const toDoList = await this.page.locator("//h2[text()='To do']/parent::div");
        for (let i = doneList.length - 1; i >= 0; i--) {
            let listItem = doneList[i];
            await dragAndDropBetweenElements(this.page, listItem, toDoList);
        }
        await this.page.waitForTimeout(2000);
    }
}
export default { SortPage };