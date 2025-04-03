async function getCSSValue(element, property) {
    const prp = await element.evaluate((el, property) => {
        return window.getComputedStyle(el).getPropertyValue(property);
    }, property);
    return prp;
}
module.export = { getCSSValue };
