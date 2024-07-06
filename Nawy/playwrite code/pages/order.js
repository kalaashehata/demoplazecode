exports.orderpage = class orderpage{

    constructor(page){

      this.page=page
      this.monitors = page.locator('a:has-text(" Monitors")')
      this.applemonitor24 = page.locator('a:has-text(" Apple monitor 24")')
      this.addtocartbtn =  page.locator('a:has-text(" Add to cart")')
      this.productaddedmsg = page.locator('text="Product added"')

    }

    

    async filterbymonitors(username){

    await this.monitors.click()
    
        }


    async chooseapplemonitor24(username){
      
    await this.applemonitor24.click()

    }
    
    async clickaddtocart(password){

    await this.addtocartbtn.click() 

    }

    async checkorderadded(password){

    await this.productaddedmsg.isVisible() 
  
      }


}