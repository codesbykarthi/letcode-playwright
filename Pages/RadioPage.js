const { expect } = require('@playwright/test');
import defineConfig from '../playwright.config'

class RadioPage {

    constructor(page) {
        this.page = page;
        this.rad_one_yes = "input#yes";
        this.rad_one_no = "input#no";
        this.rad_two_yes = "input#one";
        this.rad_two_no = "input#two";
        this.rad_three_yes = "input#nobug";
        this.rad_three_no = "input#bug";
        this.rad_four_foo = "input#foo";
        this.rad_four_bar = "input#notfoo";
        this.rad_five_Going = "input#going";
        this.rad_five_NotGoing = "input#notG";
        this.rad_five_Maybe = "input#maybe";
        this.check_one = "//label[contains(text(),'Remember me')]/input";
        this.check_two = "//label[contains(text(),'I agree')]/input";
    }


    async navigateToRadioPage() {
        await this.page.goto(defineConfig.letcodeURL_Radio);
        await this.page.waitForTimeout(2000);
    }

    async radOneclickOnYes(){
        await this.page.locator(this.rad_one_yes).click();
        expect(this.page.locator(this.rad_one_yes)).toBeChecked();
        expect(this.page.locator(this.rad_one_no)).not.toBeChecked();
        await this.page.waitForTimeout(2000);
    }
    
    async radTwoConfirmOnlyOneRadioCanBeChecked() { 
        await this.page.locator(this.rad_two_yes).check();
        expect(this.page.locator(this.rad_two_yes)).toBeChecked();
        expect(this.page.locator(this.rad_two_no)).not.toBeChecked();
        await this.page.locator(this.rad_two_no).check();
        expect(this.page.locator(this.rad_two_no)).toBeChecked();
        expect(this.page.locator(this.rad_two_yes)).not.toBeChecked();
        await this.page.waitForTimeout(2000);
    }

    async radThreeFindTheBug() { 
        await this.page.locator(this.rad_three_yes).check();
        expect(this.page.locator(this.rad_three_yes)).toBeChecked();
        expect(this.page.locator(this.rad_three_no)).not.toBeChecked();
        await this.page.locator(this.rad_three_no).check();
        expect(this.page.locator(this.rad_three_no)).toBeChecked();
        //Verify Yes also in selected state
        expect(this.page.locator(this.rad_three_yes)).toBeChecked();
        console.log("Bug is verified successfully")
        await this.page.waitForTimeout(2000);
    }

    async radFourCheckWhichIsSelected() {
        if (await this.page.locator(this.rad_four_foo).isChecked()) {
            console.log("foo is selected");
        } else if (await this.page.locator(this.rad_four_bar).isChecked()) {
            console.log("bar is selected");
        } else {
            console.log("No radio button is selected");
        }
        await this.page.waitForTimeout(2000);
    }
    
    async radFiveAssertMaybeIsDisabled() {
        expect(this.page.locator(this.rad_five_Going)).not.toBeChecked();
        expect(this.page.locator(this.rad_five_NotGoing)).not.toBeChecked();
        await expect(this.page.locator(this.rad_five_Maybe)).toBeDisabled();
        await this.page.waitForTimeout(2000);
    }

    async checkboxOneValidateIsChecked(){
        expect(this.page.locator(this.check_one)).toBeChecked();
        await this.page.waitForTimeout(2000);
    }

    async checkboxTwoCheckandUncheckandValidateUnchecked(){
        expect(this.page.locator(this.check_two)).not.toBeChecked();
        await this.page.locator(this.check_two).check();
        expect(this.page.locator(this.check_two)).toBeChecked();
        await this.page.locator(this.check_two).uncheck();
        expect(this.page.locator(this.check_two)).not.toBeChecked();
        await this.page.waitForTimeout(2000);
    }
}

export default { RadioPage };
