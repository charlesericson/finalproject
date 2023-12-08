import basePage from './base.js'
import Login from './login.js'
import { $ } from '@wdio/globals'

export default new Armybuild();


class Armybuild {

    get rebels () {
        return $('//*[text()="Rebel"]')
    }

    get rebelsHome () {
        return $('//img[@alt="rebels"]')
    }

    async rebelsPage () {
        await this.rebels.click();
        await expect(this.rebelsHome).toBeExisting;
    }

    get clearList () {
        return $('//*[text()="Clear List"]');
    }

    get commander () {
        return $('//img[@alt="commander"]');
    }  

    get hanSolo () {
        return $('//div[@title="Han Solo"]');
    }
    
    get operative () {
        return $('//img[@alt="operative"]'); 
    } 

    get lukeSkywalker () {
        return $('//div[@title="Luke Skywalker"]');
    }

    get corps () {
        return $('//img[@alt="corps"]');
    } 

    get fleetTroopers () {
        return $('//div[@title="Fleet Troopers"]');
    }

    get rebelTroopers () {
        return $('//div[@title="Rebel Troopers"]');
    }

    get rebelVeterans () {
        return $('//div[@title="Rebel Veterans"]');
    }

    get armyTitle () {
        return $('//input');
    }

    get saveList () {
        return $('//*[text()="Save List"]')
    }


}
