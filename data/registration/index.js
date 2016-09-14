'use strict';

const commonHelper      = require('./../../services/helpers/common.helper');

module.exports = {
    link: browser.baseUrl + '/order',
    title: 'Заявка на пробный урок',
    defaultUser: {
        email           : `${commonHelper.randomString(36, 5)}${Date.now()}@test.com`,
        name            : 'Dmitry',
        telephoneNumber : '079654321'
    }
};
