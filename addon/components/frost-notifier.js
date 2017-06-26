import Ember from 'ember'
const {inject} = Ember
import {Component} from 'ember-frost-core'

import layout from 'ember-frost-notifier/templates/components/frost-notifier'

export default Component.extend({
  // == Dependencies ==========================================================

  notifier: inject.service(),

  // == Keyword Properties ====================================================

  classNames: ['frost-notifications-container'],
  layout,

  // == PropTypes =============================================================

  propTypes: {},

  getDefaultProps () {
    return {}
  },

  // == Computed Properties ===================================================

  // == Functions =============================================================

  // == DOM Events ============================================================

  // == Lifecycle Hooks =======================================================

  // == Actions ===============================================================

  actions: {
  }
})
