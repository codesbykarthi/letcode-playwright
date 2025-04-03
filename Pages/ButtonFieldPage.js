const { expect } = require('@playwright/test');
const { getCSSValue } = require('../Utilities');
import defineConfig from '../playwright.config'

class ButtonfieldsPage {

  constructor(page) {
    this.page = page;
    this.btn_goToHome = page.locator("//button[@id='home']");
    this.btn_findPosition = page.locator("//button[@id='position']");
    this.btn_findColor = page.locator("//button[@id='color']");
    this.btn_findSize = page.locator("//button[@id='property']");
    this.btn_isDisabled = page.locator("button:text('Disabled')");
    this.btn_buttonHold = page.locator('button#isDisabled.button.is-primary');
  }

  async navigateToButtonsPage() {
    await this.page.goto(defineConfig.letcodeURL_Button);
    await this.page.waitForTimeout(2000);
  }

  async clickButtonToGoToHome() {
    await this.btn_goToHome.click();
    const currentURL = await this.page.url();
    expect(currentURL).toBe(defineConfig.letcodeURL_Home);
    await this.page.waitForTimeout(2000);
    this.page.goBack();
    await this.page.waitForTimeout(2000);
    const btntURL = await this.page.url();
    expect(btntURL).toBe(defineConfig.letcodeURL_Button);
    await this.page.waitForTimeout(2000);
  }

  async findButtonPosition() {
    const box = await this.btn_findPosition.boundingBox(); // Correct method call
    if (box) {
      console.log("X : " + box.x + " and Y : " + box.y);
    } else {
      console.log("Element not found or not visible");
    }
    await this.page.waitForTimeout(2000);
  }

  async findButtonSize() {
    const box = await this.btn_findSize.boundingBox(); // Correct method call
    if (box) {
      console.log("Height: " + box.height + " and Width : " + box.width);
    } else {
      console.log("Element not found or not visible");
    }
    await this.page.waitForTimeout(2000);
  }

  async getButtonColor() {
    console.log(await getCSSValue(this.btn_findColor, 'background-color'));
    await this.page.waitForTimeout(2000);
  }

  async checkButtonIsDisabled() {
    await expect(this.btn_isDisabled).toBeDisabled();
    await this.page.waitForTimeout(2000);
  }

  async clickAndHoldButtonAndValidateText() {
    const elementHandle = await this.btn_buttonHold.elementHandle();
    const box = await elementHandle.boundingBox();
    if (box) {
      await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await this.page.mouse.down();
      await setWait(5);
      await this.page.mouse.down();
      const afterText = await this.btn_buttonHold.textContent();
      expect(afterText).toEqual(' Button has been long pressed');
    }
    else {
      console.log("Element not found or not visible");
    }
    await this.page.waitForTimeout(2000);
  }

}

export default { ButtonfieldsPage };