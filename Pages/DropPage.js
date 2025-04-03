
import defineConfig from '../playwright.config'

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
        const dragBox = await this.page.locator(this.dgdp_dragBox).boundingBox();
        const dropBox = await this.page.locator(this.dgdp_dropBox).boundingBox();

        if (dragBox && dropBox) {
            const dragBoxX = dragBox.x + dragBox.width / 2;
            const dragBoxY = dragBox.y + dragBox.height / 2;
            const dropBoxX = dropBox.x + dropBox.width / 2;
            const dropBoxY = dropBox.y + dropBox.height / 2;
            await this.page.mouse.move(dragBoxX, dragBoxY);
            await this.page.waitForTimeout(2000);
            await this.page.mouse.down();
            await this.page.waitForTimeout(2000);
            await this.page.mouse.move(dropBoxX, dropBoxY);
            await this.page.waitForTimeout(2000);
            await this.page.mouse.up();
            await this.page.waitForTimeout(2000);
            console.log("Drag and Drop Successful");
        } else {
            console.log("Box not found");
        }
    }
    
}
export default { DropPage };