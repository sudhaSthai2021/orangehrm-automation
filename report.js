const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports/json',   // where cucumber JSON is stored
  reportPath: 'reports/html-report',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  }
});