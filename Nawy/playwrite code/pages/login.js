const { expect } = require("@playwright/test")

exports.loginpage = class loginpage{

    constructor(page){

      this.page=page
      this.presslogin = page.locator('id=login2')
      this.username_textbox = page.locator('id=loginusername')
      this.password_textbox =  page.locator('id=loginpassword')
      this.loginin_btn = page.locator('button:has-text("Log in")')
      this.nameuser = page.locator('id=nameofuser')
    }

    

    async gotologinpage(username){

    await this.presslogin.click()
    
        }


    async enterusername(username){
    await this.username_textbox.fill(username)

    }
    
    async enterpassword(password){

    await this.password_textbox.fill(password) 

    }

    async clickloginbtn(){

    await this.loginin_btn.click() 
    }

    async clickloginbtn(){

    await this.loginin_btn.click() 
        }
    

    async checksuccesslogin(expectedURL) {
    await expect(this.page).toHaveURL(expectedURL);
    await this.nameuser;
          }
    
    

}