import LoginPage from '../pageobjects/login.js'



describe('Login Process', () => {
    it('should log you in', async () => {
        await LoginPage.mainPage()
        await LoginPage.buttonLogin()
        await LoginPage.loginInfo()
       
    })


})