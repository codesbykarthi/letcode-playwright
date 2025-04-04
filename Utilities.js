async function getCSSValue(element, property) {
    const prp = await element.evaluate((el, property) => {
        return window.getComputedStyle(el).getPropertyValue(property);
    }, property);
    return prp;
}

async function dragAndDropBetweenElements(page, sourceElement, destinationElement) {
    let source = await sourceElement.boundingBox();
    let destination = await destinationElement.boundingBox();
    if(source && destination) {
        let Dragbox_X = source.x + source.width / 2;
        let Deagbox_y = source.y + source.height / 2;
        let Dropbox_X = destination.x + destination.width / 2;
        let Dropbox_y = destination.y + destination.height / 2; 
        await page.mouse.move(Dragbox_X, Deagbox_y);
        await page.mouse.down();
        await page.mouse.move(Dropbox_X, Dropbox_y, { steps: 20 });
        await page.mouse.up();    
    }
    else {
        console.log("Cannot find locations of elements")
    }
    
}
export default { getCSSValue, dragAndDropBetweenElements };
