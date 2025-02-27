
exports.LoginPage = class LoginPage {

    constructor(page){
        this.page = page
        this.email_textbox = page.locator('#email')
        this.password_textbox = page.locator('#password')
        this.login_button = page.getByRole('button', { name : 'Login'})
        
    }

    async goToLoginPage(){
        await this.page.goto('https://app.phptravels.com/login');
    }

    async login(email, password){
        await this.email_textbox.fill(email)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

}

    /*
    import { test, expect } from '@playwright/test';

    test('test', async ({ page }) => {
    await page.goto('https://phptravels.com/demo');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Login' }).click();
    const page1 = await page1Promise;
    await page1.getByPlaceholder('Email').click();
    await page1.getByPlaceholder('Email').fill('juampi_manucha@hotmail.com');
    await page1.getByPlaceholder('Email').press('Tab');
    await page1.getByPlaceholder('Password').fill('Ingeniero2209');
    await page1.getByRole('button', { name: 'Login' }).click();
    await page1.getByRole('link', { name: 'Dashoard' }).click();
    });

    */
