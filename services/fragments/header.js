'use strict';

class Header {
    constructor() {
        this.header        = $('.b-gl-header');

        this.loginButton   = this.header.element(by.className('b-gl-header__sign'));
    }
}

module.exports = Header;