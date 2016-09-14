'use strict';

const bottlejs  = require('bottlejs').pop('test');
const fragments = require('./fragments');

bottlejs.factory('PageFragment', function () {
    return {
        getHeader: function () {
            return new fragments.header;
        }
    };
});

bottlejs.factory('PageObject', function (container) {
    const pageFragments = container.PageFragment;
    return {
        getHomePage: function () {
            const homePage = require('./HomePage');
            return new homePage(pageFragments.getHeader());
        },
        getLoginPage: function () {
            const loginPage = require('./LoginPage');
            return new loginPage(pageFragments.getHeader());
        },
        getRegistrationPage: function () {
            const registrationPage = require('./RegistrationPage');
            return new registrationPage(pageFragments.getHeader());
        },
        getContactPage: function () {
            const contactPage = require('./ContactPage');
            return new contactPage(pageFragments.getHeader());
        }
    }
});

module.exports = bottlejs;
