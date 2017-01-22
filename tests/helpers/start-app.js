import Ember from 'ember'
const {merge, run} = Ember

import Application from '../../app'
import config from '../../config/environment'

export default function startApp (attrs) {
  var application

  var attributes = merge({}, config.APP)
  attributes = merge(attributes, attrs) // use defaults, but you can override

  run(function () {
    application = Application.create(attributes)
    application.setupForTesting()
    application.injectTestHelpers()
  })

  return application
}
