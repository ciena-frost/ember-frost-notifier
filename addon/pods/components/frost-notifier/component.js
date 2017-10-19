import Component from '@ember/component'
import {inject as service} from '@ember/service'

import layout from './template'

export default Component.extend({
  // == Services ==============================================================

  notifier: service('notifier'),

  // == Component properties ==================================================

  layout: layout,
  classNames: ['frost-notifications-container']
})
