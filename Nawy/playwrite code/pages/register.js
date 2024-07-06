exports.registerpage = class registerpage{

    constructor(page){

      this.page=page
      this.presssignup = page.locator('id=signin2')
      this.usernamesign_textbox = page.locator('id=sign-username')
      this.passwordsign_textbox =  page.locator('id=sign-password')
      this.signin_btn = page.locator('button:has-text("Sign up")')
      this.successmsg = page.locator('text="Sign up successful."')
    }

    

    async gotosigninpage(username){

    await this.presssignup.click()
    
        }


    async enterusernamesignin(username){
    await this.usernamesign_textbox.fill(username)

    }
    
    async enterpasswordsignin(password){

    await this.passwordsign_textbox.fill(password) 

    }

    async clicksigninbtn(){

    await this.signin_btn.click() 
    }


    async chechsiginsuccess(){

    await this.successmsg.isVisible() 
      }
    
    
   
}