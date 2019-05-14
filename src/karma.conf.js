// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    files: [
//      'app/calc/calc-units.spec.ts'
      'app/*.ts',
      'app/member/*.ts',
      'app/services/*.ts'
    ],
    // list of files to exclude
    exclude: [
    ],
    plugins: [
      'karma-typescript-preprocessor', // add
      // 'karma-phantomjs-launcher', // add
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
//    client: {
//      clearContext: false // leave Jasmine Spec Runner output visible in browser
//    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/componentSample'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    // add karma-typescript-preprocessor
    preprocessors: {
      'app/calc/calc-units.ts': ['typescript'],
      'app/calc/calc-units.spec.ts': ['typescript'],
    },
    typescriptPreprocessor: {
      options: {
        sourceMap: true,
        target: 'es5',
        module: 'commonjs',
      },
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    },
    reporters: ['progress', 'kjhtml', 'junit'],
    junitReporter: {
      outputDir: 'report'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    // logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless'],
    // karma for trvis
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
  
    //browsers: ['PhantomJS'],
    singleRun: false,
    restartOnFileChange: true
  });

  // karma for trvis
  if(process.env.TRAVIS){
    configuration.browsers = ['Chrome_travis_ci'];
    // configuration.reporters = configuration.reporters.concat(['coverage', 'coveralls']);
    // configuration.coverageReporter = {
    //   type : 'lcovonly',
    //   dir : 'coverage/'
    // };
  }
  // karma for trvis
  config.set(configuration);
};
