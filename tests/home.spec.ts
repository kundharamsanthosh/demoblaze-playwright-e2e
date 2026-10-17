import {test,expect,} from '@playwright/test';

test('launch to dashboard page',async({page})=>{
await page.goto('https://www.demoblaze.com/');
await expect(page).toHaveURL('https://www.demoblaze.com/');
})