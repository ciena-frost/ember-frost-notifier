import Ember from 'ember'
const {inject} = Ember
import computed, {readOnly} from 'ember-computed-decorators'
import {Component} from 'ember-frost-core'
import {PropTypes} from 'ember-prop-types'

import layout from 'ember-frost-notifier/templates/components/frost-notification'

export default Component.extend({
  // == Dependencies ==========================================================

  notifier: inject.service(),

  // == Keyword properties ====================================================

  classNameBindings: [
    'processedType',
    'notification.dismiss::frost-notifications-in',
    'autoClear::dismissable'
  ],
  layout,

  // == PropTypes =============================================================

  propTypes: {
    i18n: PropTypes.shape({
      labels: PropTypes.shape({
        dismissThisNotification: PropTypes.string.isRequired,
        openDetails: PropTypes.string.isRequired
      }).isRequired
    }),
    notification: PropTypes.shape({
      autoClear: PropTypes.bool,
      clearDuration: PropTypes.number,
      details: PropTypes.any,
      message: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['warning', 'error', 'info', 'success']).isRequired,

      onDetailsClick: PropTypes.func
    }).isRequired
  },

  getDefaultProps () {
    return {
      i18n: {
        labels: {
          dismissThisNotification: 'Dismiss this notification',
          openDetails: 'Open details'
        }
      }
    }
  },

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
    if (type && ['info', 'success', 'warning', 'error'].indexOf(type) !== -1) {
      return `frost-notifications-${type}`
    }
  },

  // == Actions ===============================================================

  actions: {
    handleDetailsClick () {
      const notification = this.get('notification')
      if (notification.onDetailsClick) {
        notification.onDetailsClick(notification.details)
      }
    },

    removeNotification () {
      this.get('notifier').removeNotification(this.get('notification'))
    }
  }
})
