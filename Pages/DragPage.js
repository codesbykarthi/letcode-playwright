import defineConfig from '../playwright.config'

class DragPage {

    constructor(page) {
        this.page = page;
        this.drag_box = 'div#sample-box';
        this.drag_boundary = 'div.example-boundary';
    }

    async navigateToDragPage() {
        await this.page.goto(defineConfig.letcodeURL_Drag);
        await this.page.waitForTimeout(2000);
    }

    async dragBoxToBottomLeft() {
        const boundary = await this.page.locator(this.drag_boundary).boundingBox();
        const bottomRightX = boundary.x + boundary.width;
        const bottomRightY = boundary.y + boundary.height;
        const dragBox = await this.page.locator(this.drag_box).boundingBox();
        if (dragBox) {
            // get center of the dragbox
            const centerOfDragBoxX = dragBox.x + dragBox.width / 2;
            const centerOfDragBoxY = dragBox.y + dragBox.height / 2;
            await this.page.mouse.move(centerOfDragBoxX, centerOfDragBoxY);
            await this.page.mouse.down();
            await setWait(3);
            // move to bottom right of boundary
            await this.page.mouse.move(bottomRightX, bottomRightY);
            await this.page.mouse.up();
        }
        else {
            console.log("Box not found")
        }
        await this.page.waitForTimeout(2000);
    }
}

export default { DragPage };