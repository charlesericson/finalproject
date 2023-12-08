import { browser } from '@wdio/globals'

export default class PageUrl {
   
    mainPage () {
        return browser.url(`https://legionhq.thefifthtrooper.com`)
    }
}