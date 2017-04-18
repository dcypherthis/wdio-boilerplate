/** Example PageObject **/

const Page = require('./page');

const examplePage = Object.create(Page, {

    /*
     * Template
     */

    //$name:  { get: function () { return browser.element('$selector'); } },
    //$name:  { value: '$value' },

    googlePageTitle:    { value: 'Google' },
    googleUrl:          { value: 'https://www.google.com/' },
    searchInput:        { value: '#lst-ib' },
    searchButton:       { value: '#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)' },
    resultsList:        { value: '#rso' },

});

module.exports = examplePage;
