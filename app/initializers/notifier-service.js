export default {
  name: 'notifier-service',

  initialize: function (container, application) {
//    application.register('service:notifier', NotifierService)
    application.inject('route', 'notifier', 'service:notifier')
  }
}
