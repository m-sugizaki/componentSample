// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// ローカル環境とTravis環境で設定を変える例
// var defBrowser = 'chrome'; 
// var defDirectConnect = true; 
// if (process.env.TRAVIS) {
//   defBrowser = 'phantomjs';
//   defDirectConnect = false;
// }
//
// exports.config = {
//   baseUrl: url
// }

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 20000,
  // allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    // 'browserName': defBrowser,
    'browserName': 'chrome',
    chromeOptions: {
    //   args: [ "--no-sandbox" ]
      args: [ "--headless", "--disable-gpu", "--no-sandbox" ]
    } 
  },
  directConnect: true,
  // directConnect: defDirectConnect,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    browser.waitForAngularEnabled(false); // timeout
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    //Create XMLresult for HTMLReport
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './report/e2e_test',
        filePrefix: 'xmlresults'
    }));
  },

  //HTMLReport called once tests are finished
  onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      var HTMLReport = require('protractor-html-reporter-2');

      testConfig = {
        reportTitle: 'Protractor Test Execution Report',
        outputPath: './report/e2e_test',
        outputFilename: 'ProtractorTestReport',
        // screenshotPath: './screenshots',
        // testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from('./report/e2e_test/xmlresults.xml', testConfig);
    });
  },

  //HTMLReport called once tests are finished
  // よくわからないのでコピー
  onFailure: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      var HTMLReport = require('protractor-html-reporter-2');

      testConfig = {
        reportTitle: 'Protractor Test Execution Report',
        outputPath: './report/e2e_test',
        outputFilename: 'ProtractorTestReport',
        // screenshotPath: './screenshots',
        // testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from('xmlresults.xml', testConfig);
    });
  }
};