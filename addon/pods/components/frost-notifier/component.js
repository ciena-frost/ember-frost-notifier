import Ember from 'ember'
const {Component, inject} = Ember

import layout from './template'

export default Component.extend({
  // == Services ==============================================================

  notifier: inject.service('notifier'),

  // == Component properties ==================================================

  layout: layout,
  classNames: ['frost-notifications-container']
})
