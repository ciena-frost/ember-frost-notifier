import Ember from 'ember'

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
 * Manages all notifications
 */
export default Ember.Service.extend({
  init: function () {
    this.notifications = Ember.A()
  },

  /**
   * default value to use for clearDuration
   * @type {Number}
   */
  defaultClearDuration: 5000,

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

    var notification = Ember.Object.create({
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
    Ember.run.later(this, function () {
      this.notifications.removeObject(notification)
    }.bind(this), 500)
  },

  /**
   * Automatically dismisses a notification
   * @param {NotificationOption} notification - notification instance
   */
  setupAutoClear: function (notification) {
    Ember.run.later(this, function () {
      // Hasn't been closed manually
      if (this.notifications.indexOf(notification) >= 0) {
        this.notifications.removeObject(notification)
      }
    }.bind(this), notification.clearDuration)
  },

  clearAll: function () {
    this.set('notifications', Ember.A())
  },

  /**
   * Set default value for clearDuration
   * @param {Number} clearDuration - duration in ms
   */
  setDefaultClearDuration: function (clearDuration) {
    if (Ember.typeOf(clearDuration) !== 'number') {
      throw new Error('Clear duration must be a number')
    }

    this.set('defaultClearDuration', clearDuration)
  }
})
