import Ember from 'ember'
import layout from './template'

export default Ember.Component.extend({
  // == Services ==============================================================

  notifier: Ember.inject.service('notifier'),

  // == Component properties ==================================================

  layout: layout,
  classNames: ['frost-notifications-container']
})
