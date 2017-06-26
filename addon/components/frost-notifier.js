import Ember from 'ember'
const {Component, inject} = Ember

import layout from 'ember-frost-notifier/templates/components/frost-notifier'

export default Component.extend({
  // == Services ==============================================================

  notifier: inject.service('notifier'),

  // == Component properties ==================================================

  layout: layout,
  classNames: ['frost-notifications-container']
})
