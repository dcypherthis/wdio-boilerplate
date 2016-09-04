/*
 * When Steps
 */

"use strict";

import container from '../utility/container';
let _page, _account, _auth, _route;
const path = require('path');

module.exports = function(){

    this.When(/^I enter "([^"]*)" into the search box$/, arg1 => {
        browser.click(examplePage.searchInput);
        browser.clearElement(examplePage.searchInput);
        browser.setValue(examplePage.searchInput, arg1);
        browser.getValue(examplePage.searchInput).should.equal(arg1);
        browser.pause(500);

    });

    this.When(/^I click the search button$/, () => {
        browser.click(examplePage.searchButton);
    });
};
