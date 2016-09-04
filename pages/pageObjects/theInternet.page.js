/**
 * The Internet PageObject, for https://theinternet.herokuapp.com
 **/

import UiMap from '../uiMaps/theIntenet.UiMap';
const _click = require('../utilities/click.util');
let _elements;

export default class theInternet_page {
    constructor() {
        _elements = new UiMap();
    }

    get browser() {
        return browser;
    }

    getPageUrl() {
        return _elements.url;
    }

    navigate() {
        browser.url(_elements.url);
    }

    isOnPage() {
        browser.waitForVisible(_elements.heading);
        return browser.isVisible(_elements.heading);
    }

    clickOn(action) {
        const selector = this.findSelector(action);
        _click.waitAndClick(selector, 10000);
    }

    findSelector(action) {
        switch (action) {
            case 'Heading':
                return _elements.heading;
            case 'Sub-Heading':
                return _elements.subHeading;
            case 'Fork Me On Github':
                return _elements.imgForkMe;
            case 'AB Testing':
                return _elements.aAbTesting;
            case 'Basic Auth':
                return _elements.aBasicAuth;
            case 'Broken Images':
                return _elements.aBrokenImages;
            case 'Challenging DOM':
                return _elements.aChallengingDom;
            case 'Checkboxes':
                return _elements.aCheckboxes;
            case 'Content Menu':
                return _elements.aContentMenu;
            case 'Disappearing Elements':
                return _elements.aDisappearingElements;
            case 'Drag And Drop':
                return _elements.aDragAndDrop;
            case 'Dropdown':
                return _elements.aDropdown;
            case 'Dynamic Content':
                return _elements.aDynamicContent;
            case 'Dynamic Controls':
                return _elements.aDynamicControls;
            case 'Dynamic Loading':
                return _elements.a.aDynamicLoading;
            case 'Exit Intent':
                return _elements.aExitIntent;
            case 'File Download':
                return _elements.aFileDownload;
            case 'File Upload':
                return _elements.aFileUpload;
            case 'Floating Menu':
                return _elements.aFloatingMenu;
            case 'Forgot Password':
                return _elements.aForgotPassword;
            case 'Form Authentication':
                return _elements.aFormAuthentication;
            case 'Frames':
                return _elements.aFrames;
            case 'Geolocation':
                return _elements.aGeolocation;
            case 'Horizontal Slider':
                return _elements.aHorizontalSlider;
            case 'Hovers':
                return _elements.aHovers;
            case 'Infinite Scroll':
                return _elements.aInfiniteScroll;
            case 'JQuery UI Menus':
                return _elements.aJqueryUiMenus;
            case 'Javascript Alerts':
                return _elements.aJsAlerts;
            case 'Javascript Onload Event Error':
                return _elements.aJsOnloadEventError;
            case 'Key Presses':
                return _elements.aKeyPresses;
            case 'Large And Deep DOM':
                return _elements.aLargeDeepDom;
            case 'Multiple Windows':
                return _elements.aMultipleWindows;
            case 'Nested Frames':
                return _elements.aNestedFrames;
            case 'Notification Settings':
                return _elements.aNotificationMessages;
            case 'Redirect Link':
                return _elements.aRedirectLink;
            case 'Secure File Download':
                return _elements.aSecureFileDownload;
            case 'Shifting Content':
                return _elements.aShiftingContent;
            case 'Slow Resources':
                return _elements.aSlowResources;
            case 'Sortable Data Tables':
                return _elements.aSortableDataTables;
            case 'Status Codes':
                return _elements.aStatusCodes;
            case 'Typos':
                return _elements.aTypos;
            case 'WYSIWYG Editor':
                return _elements.aWYSIWYG;
            case 'Vertical Slider':
                return _elements.aVerticalSlider;
            case 'Powered By Elemental Selenium':
                return _elements.aPoweredbyElemental;
            default:
                throw Error(`Selector not found for ${action}`);
        }
    }

    findTimeout(action) {
        switch (action) {
            default:
                return 10000;
        }
    }
}
