const { test, defineConfig } = require('@playwright/test');
const { DropPage } = require('../Pages/DropPage').default;
const { DragPage } = require('../Pages/DragPage').default;
const { ElementPage } = require('../Pages/ElementPage').default;
const { WindowPage } = require('../Pages/WindowPage').default;
const { RadioPage } = require('../Pages/RadioPage').default;
const { AlertPage } = require('../Pages/AlertPage').default;
const { DropdownFieldPage } = require('../Pages/DropdownFieldPage').default;
const { InputFieldPage } = require('../Pages/InputFieldPage').default;
const { ButtonfieldPage } = require('../Pages/ButtonFieldPage').default;
const { iFramePage } = require('../Pages/iFramePage').default;
const { SortPage } = require('../Pages/SortPage').default;
const { AdvancedTable } = require('../Pages/AdvancedTablePage').default;
const { Calendar } = require('../Pages/CalendarPage').default;
const { Files } = require('../Pages/FilePage').default;
const { Forms } = require('../Pages/FormPage').default;
const { Multiselect } = require('../Pages/MultiSelectPage').default;
const { Shadow } = require('../Pages/ShadowPage').default;
const { Slider } = require('../Pages/SliderPage').default;
const { Table } = require('../Pages/TablePage').default;
const { WaitPage } = require('../Pages/WaitPage').default;

/*test('Test input fields', async ({ page }) => {
  const inputFieldPage = new InputFieldPage(page);
  await inputFieldPage.navigateToInputFieldPage();
  await inputFieldPage.enterFullNameInTextBoxOne();
  await inputFieldPage.appendTextAndPressKeyboardTabInTextBoxTwo();
  await inputFieldPage.retrievesTheTextInsideTextBoxInTextBoxThree();
  await inputFieldPage.clearTextInsideTextBoxInTextBoxFour();
  await inputFieldPage.validateTextBoxIsDisabledInTextBoxFive();
  await inputFieldPage.validateTextBoxIsReadonlyInTextBoxSix();
});

test('Test Button fields', async ({ page }) => {
  const buttonfieldPage = new ButtonfieldPage(page);
  await buttonfieldPage.navigateToButtonsPage();
  await buttonfieldPage.clickButtonToGoToHome();
  await buttonfieldPage.findButtonPosition();
  await buttonfieldPage.findButtonSize();
  await buttonfieldPage.getButtonColor();
  await buttonfieldPage.checkButtonIsDisabled();
  await buttonfieldPage.clickAndHoldButtonAndValidateText();
});

test('Test dropdown fields', async ({ page }) => {
  const dropdownfieldPage = new DropdownFieldPage(page);
  await dropdownfieldPage.navigateToDropdownsPage();
  await dropdownfieldPage.selectDropdownUsingVisibleTextDPDone();
  await dropdownfieldPage.selectDropdownUsingIndexAndValidateElementTextandColorDPDTwo();
  await dropdownfieldPage.getOptionsAndGetSelectedOptionsDPDThree();
  await dropdownfieldPage.selectOptionByValueAndPrintDPDFour();
});

test('Test Alerts', async ({ page }) => {
  const alertPage = new AlertPage(page);
  await alertPage.navigateToalertPage();
  await alertPage.acceptAlertOne();
  await alertPage.dismissAlertTwo();
  await alertPage.promptInAlertThree();
  await alertPage.handleModalAlertFour();

});

test('Test iFrames', async ({ page }) => {
  const iframePage = new iFramePage(page);
  await iframePage.navigateToIframePage();
  await iframePage.switchTofirstFrameAndEnterfnameAndemail();
  await iframePage.switchToinnerframeAndEnteremailandGetParentFrameText();
});


test('Test Radios and Checkboxed', async ({ page }) => {
  const radioPage = new RadioPage(page);
  await radioPage.navigateToRadioPage();
  await radioPage.radOneclickOnYes();
  await radioPage.radTwoConfirmOnlyOneRadioCanBeChecked();
  await radioPage.radThreeFindTheBug();
  await radioPage.radFourCheckWhichIsSelected();
  await radioPage.radFiveAssertMaybeIsDisabled();
  await radioPage.checkboxOneValidateIsChecked();
  await radioPage.checkboxTwoCheckandUncheckandValidateUnchecked();
});

test('Test WindowHandles', async ({ page }) => {
  const windowPage = new WindowPage(page);
  await windowPage.navigateToWindowsPage();
  await windowPage.navigateParentChildWindowsHomePageButton();
  await windowPage.navigateBetweenMultipleWindows();
});

test('Test Dynamic Elements', async ({ page }) => {
  const elementPage = new ElementPage (page);
  await elementPage.navigateToElementsPage();
  await elementPage.typeAndSearchGitUsername();
  await elementPage.getGitElementCounts();
  await elementPage.validateUserHasImage();
  await elementPage.validateRepoCountWithLinks();
});

test('Test Draggable Box', async ({ page }) => {
  const dragPage = new DragPage(page);
  await dragPage.navigateToDragPage();
  await dragPage.dragBoxToBottomLeft();
});

test('Test Drag and drop element to element', async ({ page }) => {
  const dropPage = new DropPage(page);
  await dropPage.navigateToDropPage();
  await dropPage.dragAndDropIntoElement();
});

test('Test Sortable ToDo List', async ({ page }) => {
  const sortPage = new SortPage(page);
  await sortPage.navigateToSortPage();
  await sortPage.dragItemstoCompletedList();
  await sortPage.dragAllFromCompletedToTODOList();
});

test('Test Multi Select', async ({ page }) => {
  const multiselect = new Multiselect(page);
  await multiselect.navigateToMultiSelectPage();
  await multiselect.selectThreeValuesandGetCount();
});

test('Test Slider', async ({ page }) => {
  const slider = new Slider(page);
  await slider.navigateToSliderPage();
  await slider.slideToAndValidate(35);
  await slider.slideToAndValidate(1);
  await slider.slideToAndValidate(50);
});

test('Test Waits ', async ({ page }) => {
  const waitPage = new WaitPage(page);
  await waitPage.navigateToWaitPage();
  await waitPage.clickButtonAndWaitForAlertToAppearAndAccept();
});*/

test('Test Simple tables', async ({ page }) => {
  const tablePage = new Table(page);
  await tablePage.navigateToTablesPage();
  //await tablePage.addAllValuesFromPriceColumnTableOne();
  //await tablePage.addAttendanceTableTwo();
  await tablePage.sortByEachColumsTableThree();
});

