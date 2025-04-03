const { expect } = require('@playwright/test');
import defineConfig from '../playwright.config'

class WindowPage {

    constructor(page) {
        this.page = page;
        this.btn_GoToHome = "button#home"
        this.btn_MultipleWindow = "button#multi"
    }

    async navigateToWindowsPage() {
        await this.page.goto(defineConfig.letcodeURL_Window);
        await this.page.waitForTimeout(2000);
    }

    async navigateParentChildWindowsHomePageButton() {
        await this.page.locator(this.btn_GoToHome).click();
        const newPage = await this.page.waitForEvent('popup');
        const windowHandles = await this.page.context().pages();
        console.log("Total Windows Opened:", windowHandles.length);
        await newPage.waitForLoadState();
        console.log("New page loaded");
        await newPage.bringToFront();
        console.log("Switched to new window with URL:", await newPage.url());
        expect(await newPage.url()).toBe(defineConfig.letcodeURL_Workspace);
        await newPage.close();
        console.log("Child window closed");
        await this.page.waitForTimeout(2000);
        await this.page.close(); 
        console.log("Parent window closed");
        await this.page.waitForTimeout(2000);
    }
    
    async navigateBetweenMultipleWindows() {
        let windowHandles = await this.page.context().pages();
        if (windowHandles.length === 0) {
            this.page = await this.page.context().newPage();
            await this.page.goto(defineConfig.letcodeURL_Window);
            console.log("New page created as all pages were closed.");
        }
        await this.page.locator(this.btn_MultipleWindow).click();
        await this.page.waitForEvent('popup');
        windowHandles = await this.page.context().pages();
        console.log(`Total windows opened: ${windowHandles.length}`);
    
        for (const handle of windowHandles) {
            await handle.waitForLoadState();
            await handle.bringToFront();
            console.log("Switched to new window with URL:", await handle.url());
            await handle.close();
            console.log("Closed window:", handle.url());
            await this.page.waitForTimeout(2000);
        }
        windowHandles = await this.page.context().pages()
        console.log(`Remaining open windows: ${windowHandles.length}`);
        await this.page.waitForTimeout(2000);
        this.page.close();
    }
       
}

export default { WindowPage };