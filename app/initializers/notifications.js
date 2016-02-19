import NotifierService from 'frost-notifier/pods/services/notifier-service'

export default {
  name: 'notifier-service',

  initialize: function (application) {
    application.register('service:notifier', NotifierService)
  }
}
