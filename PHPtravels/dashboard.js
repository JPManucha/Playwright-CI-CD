
exports.Dashboard = class Dashboard {
    constructor(page){
        
        this.page = page
        this.orders_button = page.getByRole('button', { name: 'Orders' });
        this.newOrder_button = page.getByRole('link', { name: 'New order' });
        this.buy_Button = page.getByRole('button', { name: 'Buy Now' }).nth(3);
        this.dashboard_button = page.getByRole('link', { name: 'Dashoard' });
    }

    async goToDashboard(){
        await this.page.goto('https://app.phptravels.com/dashboard');
    }

    async clickOrder(page){
        await this.orders_button.click();
        await this.newOrder_button.click();
        await this.buy_Button.click();

        await page.on('dialog', async dialog => {
            console.log(`Tipo de diálogo: ${dialog.type()}`);
            console.log(`Mensaje: ${dialog.message()}`);
            await dialog.accept();
        });
        await this.dashboard_button.click();
    }

}


/*

await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('button', { name: 'Orders' }).click();
await page.getByRole('link', { name: 'New order' }).click();
page.once('dialog', dialog => {
  console.log(`Dialog message: ${dialog.message()}`);
  dialog.dismiss().catch(() => {});
});
await page.getByRole('button', { name: 'Buy Now' }).nth(3).click();
await page.goto('https://app.phptravels.com/orders');
await page.getByRole('link', { name: 'Back' }).click();
await page.getByRole('link', { name: 'Dashoard' }).click();
}); */