const { expect } = require('@playwright/test');
import defineConfig from '../playwright.config'

class iFramePage {

    constructor(page) {
        this.page = page;
        this.inp_fname = "//input[@placeholder='Enter name']";
        this.inp_email = "//input[@placeholder='Enter email']";
    }

    async navigateToIframePage() {
        await this.page.goto(defineConfig.letcodeURL_Iframe);
        await this.page.waitForTimeout(2000);
    }

    async switchTofirstFrameAndEnterfnameAndemail(){
        const frame_one = this.page.frameLocator("//iframe[@name='firstFr']"); 
        await frame_one.locator(this.inp_fname).fill("Karthi Balakrishnan");
        await frame_one.locator(this.inp_email).fill("Frame1Email");
        await this.page.waitForTimeout(2000);
    }

    async switchToinnerframeAndEnteremailandGetParentFrameText(){
        const frame_two = this.page.frameLocator("//iframe[@name='firstFr']").frameLocator("//iframe[@src='innerframe']");
        await frame_two.locator(this.inp_email).fill("Email entered in Inner frame");
        await this.page.waitForTimeout(2000);
        this.page.mainFrame();
        const frame_one = this.page.frameLocator("//iframe[@name='firstFr']");
        expect(frame_one.locator('.title.has-text-info')).toHaveText('You have entered Karthi Balakrishnan Frame1Email');

    }

}

export default { iFramePage };
