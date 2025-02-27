import { test, chromium, firefox } from "@playwright/test";

test('To launch browser', async () =>  {
    //Create a new browser instance

    const browser = await chromium.launch({headless:false, channel:'msedge'});

    //Get the browser context

    const browserContext = await browser.newContext();

    //Create a new page

    const page = await browserContext.newPage();

    //Load the URL

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //To print the title

    const title = await page.title();
    console.log(title);

})