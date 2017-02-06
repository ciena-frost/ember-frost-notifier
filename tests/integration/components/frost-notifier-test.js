import {expect} from 'chai'
import Ember from 'ember'
const {A, Service} = Ember
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const notifierStub = Service.extend({
  notifications: A([
    {
      message: 'test message 1',
      type: 'info',
      autoClear: false
    },
    {
      message: 'test message 2',
      type: 'info',
      autoClear: false
    }
  ])
})

const test = integration('frost-notifier')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    this.register('service:notifier', notifierStub)
    this.inject.service('notifier', {as: 'notifier'})
  })

  describe('renders', function () {
    beforeEach(function () {
      this.render(hbs`{{frost-notifier}}`)
    })

    it('the top-level container', function (done) {
      expect(this.$()).to.have.length(1)
      return capture('frost-notifier', done, {
        experimentalSvgs: true
      })
    })

    it('multiple notifications', function () {
      expect(this.$('.frost-notifications')).to.have.length(2)
    })
  })
})
