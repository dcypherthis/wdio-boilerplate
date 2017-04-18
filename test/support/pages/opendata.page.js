/** Example PageObject **/

const Page = require('./page');

module.exports = Object.create(Page, {

    /*
     * Template
     */

    //$name:  { get: function () { return browser.element('$selector'); } },
    //$name:  { value: '$value' },

    pageTitle:    { value: 'ArcGIS Open Data' },
    url:          { value: 'http://opendatadev.arcgis.com/' },
    // searchInput:        { value: '#lst-ib' },
    // searchButton:       { value: '#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)' },
    newestData:        { value: '.featurette-new .row' },

});
