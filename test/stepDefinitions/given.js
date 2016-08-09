/*
 * Given Steps
 */

"use strict";

import container from '../utility/container';
let _page, _account, _auth, _route;
const path = require('path');

module.exports = function(){

    this.Given(/^I am on the search page$/, () => {
        browser.url(examplePage.googleUrl);
        browser.getTitle().should.equal(examplePage.googlePageTitle);
    });
};
