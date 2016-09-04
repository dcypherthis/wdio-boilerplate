require('babel-core/register');
const merge = require('deepmerge');
const masterConf = require('../master.conf.js');
const suiteConf = {
    specs: [
        './test/features/**/*.feature'
    ],
    capabilities: [
        // {
        //    browserName: 'firefox',
        //    autoAcceptAlerts: true,
        //    maxInstances: '1',
        // },
        {
            browserName: 'chrome',
            autoAcceptAlerts: true,
            maxInstances: '1'
        }
    ],
    logLevel: 'result',
    reporters: ['dot', 'spec'],
    cucumberOpts: {
        require: ['./test/stepDefinitions/']
    }
};
exports.config = merge(masterConf.config, suiteConf);
