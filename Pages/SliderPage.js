const { expect } = require('@playwright/test');
const { getCSSValue } = require('../Utilities').default;
import defineConfig from '../playwright.config'

class Slider{

    constructor(page) {
        this.page = page;
        this.sliderLimit = page.locator('h1.subtitle.has-text-info');
        this.slider = page.locator('input#generate');
        this.btn_getCountries = page.locator('button.button.is-primary');
        this.txt_CountriesList = page.locator('p.has-text-primary-light');
    }

    async navigateToSliderPage() {
        await this.page.goto(defineConfig.letcodeURL_Slider);
        await this.page.waitForTimeout(2000);
    }

    async getSliderLimit() {
        const text = await this.sliderLimit.textContent();
        return text.trim().replace("Word limit : ", "");
    }

    async getCountriesCount() {
        await this.btn_getCountries.click();
        await this.page.waitForTimeout(2000);
        const text = await this.txt_CountriesList.textContent();
        let count = 1;
        if(text.includes('-')){
            count = text.split('-').length;
        }return count
    }

    async slideToAndValidate(targetValue) {
        let minimum = 1;
        let maximum = 50;
        console.log("Minimum Value in slider : " + await this.getCountriesCount());
        console.log("Minimum Value in slider limit : " + await this.getSliderLimit());
        const sliderBox = await this.slider.boundingBox();
        let targetPercentage = (targetValue - minimum) / (maximum - minimum);
        let source_x = sliderBox.x + targetPercentage * sliderBox.width;
        let source_y = sliderBox.y + sliderBox.height / 2; 
        await this.page.mouse.move(sliderBox.x + 1, sliderBox.y);
        await this.page.mouse.down();
        await this.page.mouse.move(source_x, source_y, { steps:20 });
        await this.page.mouse.up();
        console.log("Value in slider (35) : " + await this.getCountriesCount());
        console.log("Value in slider limit (35) : " + await this.getSliderLimit());
        expect(await this.getCountriesCount()).toEqual(await this.getSliderLimit());
    }
}

export default { Slider };