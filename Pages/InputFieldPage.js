import { expect } from '@playwright/test';
import defineConfig from '../playwright.config'
class InputFieldsPage {

  constructor(page) {
    this.page = page;
    this.inp_txtInputFullName = page.locator("//input[@id='fullName']");
    this.inp_txtAppendText = page.locator("//input[@id='join']");
    this.inp_txtInsideTextBox = page.locator("//input[@id='getMe']");
    this.inp_txtClear = page.locator("//input[@id='clearMe']");
    this.inp_txtDisabled = page.locator("//input[@id='noEdit']");
    this.inp_txtReadOnly = page.locator("//input[@id='dontwrite']");
  }

  async navigateToInputFieldPage() {
    await this.page.goto(defineConfig.letcodeURL_Input);
    await this.page.waitForTimeout(2000);
  }


  async enterFullNameInTextBoxOne() {
    await this.inp_txtInputFullName.fill("Karthi Balakrishnan");
    await this.page.waitForTimeout(2000);
  }

  async appendTextAndPressKeyboardTabInTextBoxTwo() {
    var tempText = await this.inp_txtAppendText.inputValue() + " AppendedText";
    await this.inp_txtAppendText.fill(tempText);
    expect(this.inp_txtAppendText).toHaveValue(tempText);
    await this.inp_txtAppendText.focus();
    await this.page.keyboard.press('Tab');
    const hasNoText = await this.page.evaluate((txt) => {
      const activeElement = document.activeElement;
      if (activeElement) {
        return activeElement.value !== txt;
      }
      return true;
    }, tempText);
    expect(hasNoText).toBe(true);
    await this.page.waitForTimeout(2000);
  }

  async retrievesTheTextInsideTextBoxInTextBoxThree() {
    const text = await this.inp_txtInsideTextBox.inputValue();
    expect(text).toEqual('ortonikc')
    await this.page.waitForTimeout(2000);
  }

  async clearTextInsideTextBoxInTextBoxFour() {
    await this.inp_txtClear.fill('');
    expect(this.inp_txtClear).toBeEmpty();
    await this.page.waitForTimeout(2000);
  }

  async validateTextBoxIsDisabledInTextBoxFive() {
    await expect(this.inp_txtDisabled).toBeDisabled();
    await this.page.waitForTimeout(2000);
  }

  async validateTextBoxIsReadonlyInTextBoxSix() {
    await expect(this.inp_txtReadOnly).not.toBeEditable();
    await this.page.waitForTimeout(2000);
  }
}


export default { InputFieldsPage };

