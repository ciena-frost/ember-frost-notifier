import Ember from 'ember'

export default Ember.Controller.extend({
  notifier: Ember.inject.service('notifier'),
  message: 'Notification message',
  type: 'success',
  clearDuration: 5000,
  details: 'Notification details',
  isError: false,
  autoClear: false,
  selectData: [{
    label: 'success',
    value: 'success'
  }, {
    label: 'info',
    value: 'info'
  }, {
    label: 'error',
    value: 'error'
  }, {
    label: 'warning',
    value: 'warning'
  }],
  actions: {
    text (attrs) {
      this.set('message', attrs.value)
    },
    select (selectedValues) {
      this.set('type', selectedValues[0])
    },
    clearAll () {
      this.get('notifier').clearAll()
    },
    showNotification () {
      const type = this.get('type')

      if (type === 'info') {
        this.set('autoClear', false)
      } else if (type === 'error' || type === 'warning') {
        this.set('isError', true)
        this.set('autoClear', false)
      } else {
        this.set('isError', false)
        this.set('autoClear', true)
      }

      this.get('notifier').addNotification({
        message: this.get('message'),
        details: this.get('details'),
        onDetailsClick: function (details) {
          console.log(details)
        },
        type: type,
        autoClear: this.get('autoClear'),
        clearDuration: this.get('clearDuration')
      })
    }
  }
})
