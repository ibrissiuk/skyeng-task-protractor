'use strict';

class LoginPage {
    constructor(header) {
        this.header     = header;

        this.pageHeader         = $('.p-auth-login__holder');
        this.pageTitle          = this.pageHeader.element(by.className('b-auth-login__title'));
        this.registrationButton = this.pageHeader.element(by.className('b-auth-login__registration-order'));
    }
}

module.exports = LoginPage;
