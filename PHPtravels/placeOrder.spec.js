import { test, expect } from '@playwright/test';
import { LoginPage } from './loginPage';
import { Dashboard } from './dashboard';

test ('Place Order', async ({page}) => {

    //En esta prueba vamos a utilizar las clases correspondientes a LoginPage y Dashboard
    
    const Login = new LoginPage(page);
    const Dash = new Dashboard(page);

    await Login.goToLoginPage()
    await Login.login('juampi_manucha@hotmail.com', 'Ingeniero2209')
    await Dash.goToDashboard();
    await Dash.clickOrder(page);

})