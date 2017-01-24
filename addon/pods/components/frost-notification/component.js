import Ember from 'ember'
import layout from './template'
import computed, {readOnly} from 'ember-computed-decorators'

const {
  A,
  Component,
  inject
} = Ember

export default Component.extend({
  // == Services ==============================================================

  notifier: inject.service('notifier'),

  // == Component properties ==================================================

  layout: layout,
  classNames: ['frost-notifications'],
  classNameBindings: [
    'processedType',
    'notification.dismiss::frost-notifications-in',
    'autoClear::dismissable'
  ],

  // == Computed properties ===================================================

  @readOnly
  @computed('notification.type')
  /**
   * Computed icon path based on type
   * @param {String} type - notification type
   * @returns {String} the icon path
   * NOTE: 'success' isn't handled since there is no success icon available yet
   */
  notificationIcon: function (type) {
    switch (type) {
      case 'warning':
        return 'warning'
      case 'error':
        return 'error'
      case 'info':
        return 'info'
    }
  },

  @readOnly
  @computed('notification.type')
  /**
   * Class name binding for type
   * @param {String} type - notification type
   * @returns {String} class type
   */
  processedType: function (type) {
    if (type && A(['info', 'success', 'warning', 'error']).includes(type)) {
      return `frost-notifications-${type}`
    }
  },

  // == Actions ===============================================================

  actions: {
    removeNotification () {
      this.get('notifier').removeNotification(this.get('notification'))
    },
    onDetailsClicked () {
      const notification = this.get('notification')
      if (notification.onDetailsClick) {
        notification.onDetailsClick(notification.details)
      }
    }
  }
})
