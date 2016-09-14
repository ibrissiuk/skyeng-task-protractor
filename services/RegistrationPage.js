'use strict';

class RegistrationPage {
    constructor(header) {
        this.header     = header;

        this.pageHeader             = $('.p-order__holder');
        this.pageTitle              = this.pageHeader.$('h1');
        this.nameField              = this.pageHeader.$('[name="name"]');
        this.emailField             = this.pageHeader.$('[name="email"]');
        this.telephoneNumberField   = this.pageHeader.$('[name="phone"]');
        this.submitButton           = this.pageHeader.$('[type="button"]')
    }

    registerUser(name, email, telephoneNumber) {
        this.fillNameField(name);
        this.fillEmailField(email);
        this.fillTelephoneNumberField(telephoneNumber);
        this.clickSubmitButton();
    }

    fillNameField(name) {
        this.nameField.clear();
        this.nameField.sendKeys(name);
    }

    fillEmailField(email) {
        this.emailField.clear();
        this.emailField.sendKeys(email);
    }

    fillTelephoneNumberField(telephoneNumber) {
        this.telephoneNumberField.clear();
        this.telephoneNumberField.sendKeys(telephoneNumber);
    }

    clickSubmitButton() {
        this.submitButton.click();
    }
}

module.exports = RegistrationPage;
