module.exports = function(config){
    config.set({
      files: [
          // Add your files here, this is just an example:
          { pattern: 'app.js', mutated: true, included: false},
          'test.js'
      ],
      testRunner: 'mocha',
      coverageAnalysis: "off",
      testSelector: null,
      reporter: ['clear-text', 'progress']
    });
  }