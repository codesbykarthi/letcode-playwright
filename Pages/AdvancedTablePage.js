const { expect } = require('@playwright/test');
const { getCSSValue } = require('../Utilities').default;
import defineConfig from '../playwright.config'

class AdvancedTable{

    constructor(page) {
        this.page = page;
    }
}

export default { AdvancedTable };