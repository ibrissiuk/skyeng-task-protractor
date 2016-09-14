'use strict';

exports.config = {
    directConnect: true,
    baseUrl: 'http://skyeng.ru',

    multiCapabilities: [
        {
     'browserName': 'chrome'
     }],

    allScriptsTimeout: 30000,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        print: () => {}
    },

    suites: {
        users: './test/e2e/signup.spec.js'
    },

    onPrepare: () => {
        const specReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new specReporter());

        // Store the name of the browser that's currently being used.
        browser.getCapabilities().then(caps => {
            browser.params.browser = caps.get('browserName');
        });

        // disable animations
        browser.addMockModule('disableNgAnimate', function () {
            angular
                .module('disableNgAnimate', [])
                .run(['$animate', function ($animate) {
                    $animate.enabled(false);
                }]);
        });
        browser.addMockModule('disableCssAnimate', function () {
            angular
                .module('disableCssAnimate', [])
                .run(function () {
                    var style = document.createElement('style');
                    style.type = 'text/css';
                    style.innerHTML =
                        '*{-webkit-transition:none!important;' +
                        '-moz-transition:none!important;' +
                        '-o-transition:none!important;' +
                        '-ms-transition:none!important;' +
                        'transition:none!important}';

                    document.getElementsByTagName('head')[0].appendChild(style);
                });
        });
    },

    framework: 'jasmine'
};