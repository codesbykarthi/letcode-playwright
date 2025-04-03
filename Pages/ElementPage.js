const { expect } = require('@playwright/test');
import defineConfig from '../playwright.config'

class ElementPage {

    constructor(page) {
        this.page = page;
        this.inp_username = "//input[@name='username']";
        this.btn_search = "button#search";
        this.txt_gitUser = 'p.title.is-4';
        this.img_gitImage = 'img.is-rounded';
        this.txt_publicRepos = "//span[text()='Public Repos']/parent::div/span[2]";
        this.txt_publicGist = "//span[text()='Public Gist']/parent::div/span[2]";
        this.txt_followers = "//span[text()='Followers']/parent::div/span[2]";
        this.li_repoLinks = "//app-repos//ol[@type='1']/li";
    }

    async navigateToElementsPage() {
        await this.page.goto(defineConfig.letcodeURL_Element);
        await this.page.waitForTimeout(2000);
    }

    async typeAndSearchGitUsername() {
        await this.page.locator(this.inp_username).fill('codesbykarthi');
        await this.page.locator(this.btn_search).click();
        await setWait(3);
        let gitUserName = await this.page.locator(this.txt_gitUser).textContent();
        expect(gitUserName).toEqual('Karthi');
        await this.page.waitForTimeout(2000);
    }

    async getGitElementCounts() {
        let repoCount = await this.page.locator(this.txt_publicRepos).textContent();
        expect(parseInt(repoCount)).toEqual(2);
        let gist = await this.page.locator(this.txt_publicGist).textContent();
        expect(parseInt(gist)).toEqual(0);
        let followers = await this.page.locator(this.txt_followers).textContent();
        expect(parseInt(followers)).toEqual(0);
        await this.page.waitForTimeout(2000);
    }

    async validateUserHasImage() {
        const count = await this.page.locator(this.img_gitImage).count();
        console.log('Image Count:', count);
        if (count > 0) {
            console.log('Image exists');
            let imageSrc = await this.page.locator(this.img_gitImage).getAttribute('src');
            expect(imageSrc).toContain('https://avatars.githubusercontent.com');
        } else {
            console.log('Image not found');
        }
        await this.page.waitForTimeout(2000);
    }

    async validateRepoCountWithLinks() {
        var repoCount = parseInt(await this.page.locator(this.txt_publicRepos).textContent());
        let repoLinks = await this.page.locator(this.li_repoLinks).all();
        console.log(repoLinks);
        expect(repoLinks.length).toEqual(repoCount);
        await this.page.waitForTimeout(2000);
    }
}

export default { ElementPage };