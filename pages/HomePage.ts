import {Page,expect} from "@playwright/test";

export class HomePage{
    readonly page:Page;
    

    constructor(page:Page){
        this.page=page;
    }

    async navigateBrowser(){
        await this.page.goto('https://www.demoblaze.com/');
    }

}