'use strict';

const pageObject        = require('./../../services').container.PageObject;
/** @type {HomePage|exports|module.exports} */
const homePage          = pageObject.getHomePage();
const loginPage         = pageObject.getLoginPage();
const registrationPage  = pageObject.getRegistrationPage();
const contactPage       = pageObject.getContactPage();
const registrationData  = require('./../../data/registration');
const contactData       = require('./../../data/contact');
const loginData         = require('./../../data/login');
const homeData          = require('./../../data/home');
const commonHelper      = require('./../../services/helpers/common.helper');

describe('Register user and upload an avatar', () => {

    var email = registrationData.defaultUser.email;
    var name = registrationData.defaultUser.name;
    var telephoneNumber = registrationData.defaultUser.telephoneNumber;

    beforeAll(() => {
        browser.ignoreSynchronization = false;
        browser.driver.manage().window().maximize();
    });

    afterAll(() => {
        commonHelper.clearAllData();
    });

    // default authorization page state
    describe('user is able to start free lesson and upload avatar', () => {

        beforeAll(() => {
            browser.get(homeData.link);
        });

        afterAll(() => {
            commonHelper.clearAllData();
        });

        it('click on login button', () => {
            homePage.header.loginButton.click();
        });

        it('should be redirected to Login page', () => {
            expect(loginPage.pageTitle.getText()).toEqual(loginData.title);
        });

        it('click on registration button', () => {
            loginPage.registrationButton.click();
        });

        it('should be redirected to Registration page', () => {
            expect(registrationPage.pageTitle.getText()).toEqual(registrationData.title);
        });

        it('fill registration form and submit', () => {
            registrationPage.registerUser(name, email, telephoneNumber);
            browser.sleep(2000);
            commonHelper.waitUntilElementPresent(contactPage.homeIcon);
            expect(contactPage.homeIcon.isDisplayed()).toBe(true);
        });

        it('should be redirected to Contact page', () => {
            commonHelper.waitUntilElementPresent(contactPage.avatarInputField);
            expect(contactPage.pageTitle.getText()).toEqual(contactData.title);
        });

        it('change user avatar', () => {
            contactPage.uploadAvatar();
            commonHelper.waitUntilElementPresent(contactPage.uploadedAvatar)
        });

        it('avatar should be uploaded', () => {
            expect(contactPage.uploadedAvatar.isPresent()).toBe(true);
        })
    });
});
