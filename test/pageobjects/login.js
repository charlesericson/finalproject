import { $ } from '@wdio/globals';
import PageUrl from './base.js';


class LoginPage extends PageUrl {
    get loginBtn () {
        return $('//span[contains(text(),"Login")]')
    }

    get welcomeMessage () {
        return $('//h1[text()="Welcome"]')
    }

    get loginEmail () {
        return $('#username')
    }

    get loginPassword () {
        return $('#password')
    }

    get continueBtn () {
        return $('//button[@data-action-button-primary="true"]')
    }
    
    async buttonLogin () {
        await this.loginBtn.click();
        await expect(this.welcomeMessage).toBeExisting;
    }


    async loginInfo () {
        await this.loginEmail.setValue('charles.ericson5922@stu.mtec.edu');
        await this.loginPassword.setValue('Welcome123');
        await this.continueBtn.click();
        await expect(this.legionName).toBeExisting;
    }


    mainPage () {
        return super.mainPage('');
    }

}


export default new LoginPage();