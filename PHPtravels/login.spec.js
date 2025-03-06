import { test, expect } from '@playwright/test';
import { LoginPage } from './loginPage';


test('Login with correct User', async ({ page }) => {

    
    const Login = new LoginPage(page)

    await Login.goToLoginPage()
    await Login.login('juampi_manucha@hotmail.com', 'Ingeniero2209')
    await browser.close

})