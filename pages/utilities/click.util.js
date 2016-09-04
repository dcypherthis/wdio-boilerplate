/**
 * Waits for a selector to be visible and then clicks on it
 *
 * @param {String} selector element to wait for/click on
 * @param {Number=} timeout time in ms (default: 500)
 * @returns {void}
 */
exports.waitAndClick = (selector, timeout) => {
    if (!timeout) {
        timeout = 20000;
    }
    browser.waitForVisible(selector, timeout);
    browser.click(selector);
};
