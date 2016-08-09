/*
 * Then Steps
 */

"use strict";

import container from '../utility/container';
let _page, _account, _auth, _route;
const path = require('path');

module.exports = function(){

    this.Then(/^I should see a list of search results$/, () => {
        browser.pause(2000);
        browser.waitForVisible(examplePage.resultsList);
        return browser.isVisible(examplePage.resultsList).should.be.true;
    });
};
