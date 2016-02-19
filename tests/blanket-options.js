/* globals blanket, module */

var options = {
  modulePrefix: 'ember-frost-notifier',
  filter: '//.*ember-frost-notifier/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['json'],
    autostart: true
  }
}

if (typeof exports === 'undefined') {
  blanket.options(options)
} else {
  module.exports = options
}
