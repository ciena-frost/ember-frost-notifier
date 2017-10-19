/* eslint-env node */
'use strict'

module.exports = {
  name: 'ember-frost-notifier',

  /* eslint-disable complexity */
  init: function (app) {
    this.options = this.options || {}
    this.options.babel = this.options.babel || {}
    this.options.babel.plugins = this.options.babel.plugins || []

    if (this.options.babel.plugins.indexOf('transform-decorators-legacy') === -1) {
      this.options.babel.plugins.push('transform-decorators-legacy')
    }

    if (this.options.babel.plugins.indexOf('transform-class-properties') === -1) {
      this.options.babel.plugins.push('transform-class-properties')
    }

    /* eslint-disable no-unused-expressions */
    this._super.init && this._super.init.apply(this, arguments)
    /* eslint-enable no-unused-expressions */
  },
  /* eslint-enable complexity */

  included: function (app) {
    this._super.included(app)
  }
}
