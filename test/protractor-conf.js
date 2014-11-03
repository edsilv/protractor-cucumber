exports.config = {

    specs: [
        'e2e/features/*.feature'
    ],

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: ['--test-type']
        }
    },

    baseUrl: 'http://localhost:8080/',

    framework: 'cucumber'



};
