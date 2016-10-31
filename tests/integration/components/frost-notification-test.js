import {expect} from 'chai'
import sinon from 'sinon'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import Ember from 'ember'

const notifierStub = Ember.Service.extend({
  removeNotification: function () {}
})

describeComponent(
  'frost-notification',
  'Integration: FrostNotificationsComponent',
  {
    integration: true
  },
  function () {
    let sandbox, notification
    beforeEach(function () {
      sandbox = sinon.sandbox.create()

      this.register('service:notifier', notifierStub)
      this.inject.service('notifier', {as: 'notifier'})

      sandbox.stub(this.get('notifier'), 'removeNotification')

      notification = {
        message: 'test message',
        details: 'details',
        type: 'success',
        autoClear: true,
        clearDuration: 5000
      }

      this.set('notification', notification)
    })

    afterEach(function () {
      sandbox.reset()
    })

    describe('renders', function () {
      beforeEach(function () {
        this.render(hbs`{{frost-notification notification=notification}}`)
      })

      it('the top-level container', function (done) {
        expect(this.$()).to.have.length(1)
        return capture('frost-notification', done, {
          experimentalSvgs: true
        })
      })

      it('the message', function () {
        expect(this.$('.message').text()).to.match(/test message/)
      })

      it('the details link', function () {
        expect(this.$('.details')).to.have.length(1)
      })
    })

    it('does not display details link when details aren\'t provided', function () {
      this.set('notification.details', undefined)

      this.render(hbs`{{frost-notification notification=notification}}`)
      expect(this.$('.details')).not.to.have.length(1)
    })

    it('calls onDetailsClick when the details link is clicked', function () {
      let spy = sandbox.spy()

      this.set('notification.onDetailsClick', spy)
      this.render(hbs`{{frost-notification notification=notification}}`)
      this.$('.details a').click()

      expect(spy.calledWith('details')).to.equal(true)
    })

    it('removes the notification when closed', function () {
      this.render(hbs`{{frost-notification notification=notification}}`)
      this.$('.close').click()

      expect(this.get('notifier').removeNotification.called).to.equal(true)
    })
  }
)
