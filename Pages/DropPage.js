
import defineConfig from '../playwright.config'
const { dragAndDropBetweenElements } = require('../Utilities').default;

class DropPage {

    constructor(page) {
        this.page = page;
        this.dgdp_dragBox = 'div#draggable';
        this.dgdp_dropBox = 'div#droppable';
    }

    async navigateToDropPage() {
        await this.page.goto(defineConfig.letcodeURL_Drop);
        await this.page.waitForTimeout(2000);
    }

    async dragAndDropIntoElement() {
        const dragBox = await this.page.locator(this.dgdp_dragBox);
        const dropBox = await this.page.locator(this.dgdp_dropBox);
        await dragAndDropBetweenElements(this.page, dragBox, dropBox);
    }
    
}
export default { DropPage };