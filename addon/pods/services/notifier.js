import {A} from '@ember/array'
import EmberObject from '@ember/object'
import {run} from '@ember/runloop'
import Service from '@ember/service'

/**
 * @typedef {Object} NotificationOption
 * @property {String} message - message to display
 * @property {Object|String} details - details to pass to onDetailsClick
 * @property {Function} onDetailsClick - callback for when the details is clicked
 * @property {String} type - type of notification (success, info, warning, error)
 * @property {Boolean} autoClear - whether to dismiss notification automatically
 * @property {Number} clearDuration - time in ms to dismiss if autoCleared
 */

/**
 * Number of ms before notifications are removed when using removeNotification
 * @type {Number}
 */
const removalDuration = 500

/**
 * Manages all notifications
 */
export default Service.extend({
  init: function () {
    this.notifications = A()
  },

  /**
   * default value to use for clearDuration
   * @type {Number}
   */
  defaultClearDuration: 5000,

  // FIXME: refactor to reduce complexity
  /* eslint complexity: [2, 6] */
  /**
   * Adds a notifications
   * @param {NotificationOption} options - notification options
   * @returns {Object} the Emberified notification object
   */
  addNotification: function (options) {
    // If no message is set, throw an error
    if (!options.message) {
      throw new Error('No notification message set')
    }

    const notification = EmberObject.create({
      message: options.message,
      details: options.details,
      onDetailsClick: options.onDetailsClick,
      type: options.type || 'info',
      autoClear: options.autoClear || false,
      clearDuration: options.clearDuration || this.get('defaultClearDuration')
    })

    this.notifications.pushObject(notification)

    if (notification.autoClear) {
      this.setupAutoClear(notification)
    }

    return notification
  },

  /**
   * Removes a specific notifications
   * @param {NotificationOption} notification - notification instance
   */
  removeNotification: function (notification) {
    if (!notification) {
      return
    }
    notification.set('dismiss', true)
    // Delay removal from DOM for dismissal animation
    run.later(this, function () {
      this.notifications.removeObject(notification)
    }.bind(this), removalDuration)
  },

  /**
   * Automatically dismisses a notification
   * @param {NotificationOption} notification - notification instance
   */
  setupAutoClear: function (notification) {
    run.later(this, function () {
      // Hasn't been closed manually
      if (this.notifications.indexOf(notification) >= 0) {
        this.notifications.removeObject(notification)
      }
    }.bind(this), notification.clearDuration)
  },

  clearAll: function () {
    this.set('notifications', A())
  },

  /**
   * Set default value for clearDuration
   * @param {Number} clearDuration - duration in ms
   */
  setDefaultClearDuration: function (clearDuration) {
    this.set('defaultClearDuration', clearDuration)
  }
})
