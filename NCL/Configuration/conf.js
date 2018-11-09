let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

    directConnect: true,

    // capabilities: {
    //     browserName: 'chrome'
    // },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // args: [
            //     '--start-fullscreen'
            // ]
        }
      },

      //'--incognito'
   // specs: ['../Tests/GetReadyForYourCruise.spec.js'],

     suites: {
    //     smoke: ['../Tests/BankManagerSimple.spec.js', '../Tests/demo.spec.js'],
        regression: ['../Tests/*.spec.js']

     },

    onPrepare: function () {
        browser.manage().timeouts().implicitlyWait(30000)
        browser.manage().window().setPosition(0, 0);
         browser.driver.manage().window().setSize(920,900);

        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
            showstack: false
        }));
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '../report/screenshots',
            preserveDirectory: false,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            docName: 'CyberBank-Report.html'
        }).getJasmine2Reporter());

    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 40000,
        print: function () { }

    }
};