require('babel-core/register');
const merge = require('deepmerge');
const masterConf = require('../master.conf.js');
const prodConf = {
    specs: [
        './test/features/**/*.feature'
    ],
    capabilities: [
        {
            browserName: 'Chrome',
            platform: 'Windows 10',
            version: '51',
            chromedriverVersion: '2.22',
            screenResolution: "1280x1024",
            autoAcceptAlerts: true,
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER,
            maxInstances: '8',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false
        }
        //{
        //    browserName: 'Chrome',
        //    platform: 'OS X 10.11',
        //    version: '51',
        //    chromedriverVersion: '2.22',
        //    screenResolution: "1600x1200",
        //    autoAcceptAlerts: true,
        //    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        //    build: process.env.TRAVIS_BUILD_NUMBER,
        //    maxInstances: '8',
        //    webdriverRemoteQuietExceptions: false,
        //    videoUploadOnPass: false,
        // },
        // {
        //    browserName: 'firefox',
        //    platform: 'Windows 10',
        //    version: '47',
        //    screenResolution: "1280x1024",
        //    autoAcceptAlerts: true,
        //    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        //    build: process.env.TRAVIS_BUILD_NUMBER,
        //    maxInstances: '8',
        //    webdriverRemoteQuietExceptions: false,
        //    videoUploadOnPass: false,
        // },
        //{
        //    browserName: 'firefox',
        //    platform: 'OS X 10.11',
        //    version: '47',
        //    screenResolution: "1600x1200",
        //    autoAcceptAlerts: true,
        //    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        //    build: process.env.TRAVIS_BUILD_NUMBER,
        //    maxInstances: '8',
        //    webdriverRemoteQuietExceptions: false,
        //    videoUploadOnPass: false,
        // },
    ],
    logLevel: 'error',
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    reporters: ['dot', 'json'],
    reporterOptions: {
        json: {
            outputDir: './reports/json/'
        }
    },
    cucumberOpts: {
        require: ['./test/stepDefinitions/']
    }
};
exports.config = merge(masterConf.config, prodConf);
