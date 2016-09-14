'use strict';

/**
 * Common helper object.
 * @constructor
 */
var CommonHelper = function() {

    /**
     * Clear browser session storage
     *
     */
    this.clearSessionStorage = function () {
        browser.executeScript('window.sessionStorage.clear();');
    };

    /**
     * Clear browser local storage
     *
     */
    this.clearLocalStorage = function () {
        browser.executeScript('window.localStorage.clear();');
    };

    /**
     * Clear cookies
     *
     */
    this.clearCookies = function () {
        browser.manage().deleteAllCookies();
    };

    /**
     * Clear all browser data
     *
     */
    this.clearAllData = function () {
        this.clearSessionStorage();
        this.clearLocalStorage();
        this.clearCookies();
    };

    /**
     * Wait until selected element will be present
     *
     * @param element
     */
    this.waitUntilElementPresent = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.presenceOf(element), 15000);
    };

    /**
     *
     * @param radix
     * @param stringLength
     */
    this.randomString = function (radix, stringLength) {
       return Math.random().toString(radix).replace(/[^a-z]+/g, '').substr(0, stringLength);
    };
};

module.exports = new CommonHelper();