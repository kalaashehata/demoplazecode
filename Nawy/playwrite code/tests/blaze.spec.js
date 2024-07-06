const { test, expect } = require('@playwright/test');
import { loginpage } from '../pages/login';
import { registerpage } from '../pages/register';
import { orderpage } from '../pages/order';
import { logoutpage } from '../pages/logout';


test.beforeEach(async ({ page }) => {
    
    await page.goto('https://www.demoblaze.com/');
});




test.afterEach(async ({ page }) => {
    await page.close();
});



test('Register', async ({ page }) => {

    const register =new registerpage(page)

    test.slow();
    await register.gotosigninpage();
    await register.enterusernamesignin('kalaa');
    await register.enterpasswordsignin('12345678');
    await register.clicksigninbtn();
    await register.chechsiginsuccess();
 
 });

 test('login', async ({ page }) => {

    const login =new loginpage(page)
    test.slow();
    await login.gotologinpage();
    await login.enterusername('kalaa');
    await login.enterpassword('pwd');
    await login.clickloginbtn();
    await login.checksuccesslogin("https://www.demoblaze.com/");

   
 });


 test('order', async ({ page }) => {
    
    const order =new orderpage(page)
    test.slow();
    await order.filterbymonitors();
    await order.chooseapplemonitor24();
    await order.clickaddtocart;
    await order.checkorderadded();
    
 });

 test('logout', async ({ page }) => {

    const logout =new logoutpage(page)
    const login =new loginpage(page)
    test.slow();
    await login.gotologinpage();
    await login.enterusername('kalaa');
    await login.enterpassword('pwd');
    await login.clickloginbtn();
    await logout.clicklogoutbtn();
    await logout.checkloginbtndisplayed();
    await logout.checksuccesslogout("https://www.demoblaze.com/index.html");
   
 });




