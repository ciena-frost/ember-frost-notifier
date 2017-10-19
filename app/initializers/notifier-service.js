export default {
  name: 'notifier-service',

  initialize: function (application) {
    application.inject('route', 'notifier', 'service:notifier')
  }
}
