const { expect } = require('@playwright/test');
import defineConfig from '../playwright.config'

class AlertPage {

    constructor(page) {
        this.page = page;
        this.btn_acceptAlert = page.locator("#accept");
        this.btn_dismissAlert = page.locator("#confirm");
        this.btn_promptAlert = page.locator("#prompt");
        this.btn_modalAlert = page.locator("#modern");
        this.alert_modal = page.locator(".modal.is-active");
        this.alert_eleTxt = page.locator("//div[@class='box']");
        this.alert_ModalTxt = page.locator(".modal .title");
        this.alert_ModalButtonClose = page.locator("//button[@aria-label='close']");
    }

    async navigateToalertPage() {
        await this.page.goto(defineConfig.letcodeURL_Alert);
        await this.page.waitForTimeout(2000);
    }

    async acceptAlertOne() {
        this.page.once('dialog', async dialog => {
            console.log("Alert detected:", dialog.message());
            await this.page.waitForTimeout(2000);
            await dialog.accept();
        });
        await this.btn_acceptAlert.click();
        await this.page.waitForTimeout(2000);
    }

    async dismissAlertTwo() {
        this.page.once('dialog', async dialog => {
            console.log("Alert detected:", dialog.message());
            await this.page.waitForTimeout(2000);
            await dialog.dismiss();
        });
        await this.btn_dismissAlert.click();
        await this.page.waitForTimeout(2000);
    }

    async promptInAlertThree() {
        this.page.once('dialog', async dialog => {
            console.log("Alert detected");
            await this.page.waitForTimeout(2000);
            await dialog.accept('Karthi Balakrishnan');
            await this.page.waitForTimeout(2000);
            expect(this.alert_eleTxt).toHaveText('Your name is: Karthi Balakrishnan')
        });
        await this.btn_promptAlert.click();
        await this.page.waitForTimeout(2000);
    }

    async handleModalAlertFour() {
        await this.btn_modalAlert.click();
        await this.page.waitForTimeout(2000);
        expect(this.alert_modal).toBeVisible();
        console.log(await this.alert_ModalTxt.innerText());
        await this.alert_ModalButtonClose.click();
        expect(this.alert_modal).toBeHidden();
        await this.page.waitForTimeout(2000);
    }   
}

export default { AlertPage };