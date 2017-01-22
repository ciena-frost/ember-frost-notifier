import Ember from 'ember'
const {Application} = Ember

import loadInitializers from 'ember-load-initializers'
import Resolver from 'ember-resolver'
import config from './config/environment'

var App

Ember.MODEL_FACTORY_INJECTIONS = true

App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
})

loadInitializers(App, config.modulePrefix)

export default App
