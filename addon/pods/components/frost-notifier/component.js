import Ember from 'ember'
import layout from './template'

export default Ember.Component.extend({
  notifier: Ember.inject.service('notifier'),
  layout: layout,
  classNames: ['frost-notifications-container']
})
