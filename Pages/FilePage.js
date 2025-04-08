const { expect } = require('@playwright/test');
const { getCSSValue } = require('../Utilities').default;
import defineConfig from '../playwright.config'

class Files{

    constructor(page) {
        this.page = page;
    }
}

export default { Files };