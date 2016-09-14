'use strict';

class ContactPage {
    constructor(header) {
        this.header     = header;

        this.pageHeader             = $('.l-global__main');
        this.pageTitle              = this.pageHeader.$('.l-afterApplication__h1');
        this.avatarInputField       = this.pageHeader.$('#inputFileAvatar');
        this.homeIcon               = $('.p-gl-message__icon-home');
        this.uploadedAvatar         = this.pageHeader.$('[src*="//resource.skyeng.ru/user/avatar/"]');
    }

    uploadAvatar() {
        var path = require('path');
        var fileToUpload = '../data/testfiles/smile.jpg',
            absolutePath = path.resolve(__dirname, fileToUpload);
        this.avatarInputField.sendKeys(absolutePath);
    }
}

module.exports = ContactPage;
