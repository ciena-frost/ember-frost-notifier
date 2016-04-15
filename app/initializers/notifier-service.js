export default {
  name: 'notifier-service',

  initialize: function (application) {
//    application.register('service:notifier', NotifierService)
    application.inject('route', 'notifier', 'service:notifier')
  }
}
