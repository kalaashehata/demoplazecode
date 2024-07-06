const { expect } = require("@playwright/test")

exports.logoutpage = class logoutpage{

    constructor(page){

      this.page=page
      this.presslogout = page.locator('id=logout2')
      this.presslogin = page.locator('id=login2')
    }

    

    async checkloginbtndisplayed(username){

    await this.presslogin.isVisible()
    
        }




    async clicklogoutbtn(){

    await this.presslogout.click() 
    }

    

    async checksuccesslogout(expectedURL) {
    await expect(this.page).toHaveURL(expectedURL);
          }
    
    

}