/*
 * Then Steps
 */

const examplePage = require('../pages/example.page');
const opendataPage = require('../pages/opendata.page');

module.exports = function(){

    this.Then(/^I should see a list of search results$/, () => {
        browser.pause(2000);
        browser.waitForVisible(examplePage.resultsList);
        return browser.isVisible(examplePage.resultsList).should.be.true;
    });

    this.Then(/^I should see the umbrella home page$/, () => {
        // browser.pause(5000);
        browser.waitForVisible(opendataPage.newestData);
        const newstDataPresent = browser.isVisible(opendataPage.newestData).should.be.true;
        const pageTitleIsCorrect = browser.getTitle().should.equal(opendataPage.pageTitle);
        return newstDataPresent && pageTitleIsCorrect;
    });
};
