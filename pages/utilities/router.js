import pages from '../index';
let page, currentUrl;

/**
 * Route class handles context driven decisions for the test suite.
 */
export default class router {

    /**
     * Uses if/else logic with regular expressions to determine the current page base on matching parts of the current
     * url. A matching condition instantiates the corresponding page and returns a page object.
     *
     * @returns {Object} A page object
     * @alias router.getContext
     */
    getContext() {
        currentUrl = browser.getUrl();
        if (currentUrl === 'https://the-internet.herokuapp.com/') {
            page = new pages.TheInternet_page();
        // else if (currentUrl.match(/example/)) {
        //         page = new pages.Example_page();
        } else {
            throw Error(`The url ${currentUrl} does not match any pages defined in the router.js file`);
        }
        return page;
    }

    /**
     * Returns a new page matching the targetPage
     *
     * @param {String} targetPage   The intended page
     * @returns {Object} A page object that matches targetPage.
     * @alias router.setContext
     */
    setContext(targetPage) {
        this.page = page;
        switch (targetPage) {
            case 'The Internet':
                page = new pages.TheInternet_page();
                break;
            default:
                throw Error(`The ${targetPage} page is not defined as a valid case in router.setContext(targetPage)`);
        }
        return page;
    }

    /**
     * Compares current url (from selenium) with destination url (from page object).  If they do not match, it sets page
     * to the the corresponding targetPage, navigates to it via url, and then returns the page object.
     *
     * <example>
     *     :step.js
     *     _page = new login_page();
     *     console.log(_page) // outputs: login_page{}
     *     _page = router.switchPage('home')
     *     console.log(_page) // outputs: home_page{}
     *</examaple>
     *
     * @param {String} targetPage   The intended page
     * @returns {Object} A page object that matches targetPage.
     * @alias router.switchPage
     */
    switchPage(targetPage) {
        const current = browser.getUrl();
        const destination = this.setContext(targetPage).getPageUrl();
        if (current !== destination) {
            page = this.setContext(targetPage);
            page.navigate();
        }
        return page;
    }
}
