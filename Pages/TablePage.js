const { expect } = require('@playwright/test');
import defineConfig from '../playwright.config'

class Table {

    constructor(page) {
        this.page = page;
        this.tbl_Shopping = 'table[name="listtable"]';
        this.tbl_Attendance = 'table#simpletable';
        this.tbl_SortableTable = 'table.mat-sort.table.is-bordered.is-striped.is-narrow.is-hoverable.is-fullwidth'
    }

    async navigateToTablesPage() {
        await this.page.goto(defineConfig.letcodeURL_Table);
        await this.page.waitForTimeout(2000);
    }

    async addAllValuesFromPriceColumnTableOne() {
        const itemNames = await this.page.locator(`${this.tbl_Shopping} tbody tr td:nth-child(1)`).allTextContents();
        const itemPrices = await this.page.locator(`${this.tbl_Shopping} tbody tr td:nth-child(2)`).allTextContents();
        const itemList = itemNames.map((name, index) => ({
          item: name,
          price: itemPrices[index]
        }));
        console.log(itemList);    
        let sumTotal = 0;
        for(let priceValue of itemPrices) 
        {
            sumTotal = sumTotal + parseInt(priceValue);
        }  
        const footerTotalText = await this.page.locator(`${this.tbl_Shopping} tfoot td:nth-child(2) b`).textContent();
        const footerTotal = parseInt(footerTotalText);
        expect(footerTotal).toEqual(sumTotal);
        console.log(`The total of ${sumTotal} matches with the table footer`);
    }

    async addAttendanceTableTwo() {
        const firstNameList = await this.page.locator(`${this.tbl_Attendance} tbody tr td:nth-child(1)`).allTextContents();
        const lastNameList = await this.page.locator(`${this.tbl_Attendance} tbody tr td:nth-child(2)`).allTextContents();
        const emailList = await this.page.locator(`${this.tbl_Attendance} tbody tr td:nth-child(3)`).allTextContents();
        const personMapping = firstNameList.map((_, index) => ({
          firstName: firstNameList[index],
          lastName: lastNameList[index],
          email: emailList[index]
        }));
        console.log(personMapping);    
        const YashwanthIndex = personMapping.findIndex(person => person.firstName === 'Yashwanth' && person.lastName === 'Raj' && person.email === 'yashwanth@letcode.in');
        await this.page.locator(`${this.tbl_Attendance} tbody tr:nth-child(${YashwanthIndex+1}) td:nth-child(4) input`).check();
    }

    async sortByEachColumsTableThree() {

    }
}

export default { Table };