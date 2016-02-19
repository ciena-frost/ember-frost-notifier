import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import Ember from 'ember'

const notifierStub = Ember.Service.extend({
  notifications: Ember.A([
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

describeComponent(
  'frost-notifier',
  'Integration: FrostNotifierComponent',
  {
    integration: true
  },
  function () {
    beforeEach(function () {
      this.register('service:notifier', notifierStub)
      this.inject.service('notifier', {as: 'notifier'})
    })

    describe('renders', function () {
      beforeEach(function () {
        this.render(hbs`{{frost-notifier}}`)
      })

      it('the top-level container', function () {
        expect(this.$()).to.have.length(1)
      })

      it('multiple notifications', function () {
        expect(this.$('.frost-notifications')).to.have.length(2)
      })
    })
  }
)
