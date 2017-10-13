import {expect} from 'chai'
import Ember from 'ember'
const {Service} = Ember
import {$hook, initialize as initializeHook} from 'ember-hook'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

const notifierStub = Service.extend({
  removeNotification: function () {}
})

const notifierHookName = '-notification-wrapper'
const notifierContentHookName = `${notifierHookName}-content`
const notifierContentMessageHookName = `${notifierHookName}-content-message`
const notifierContentDetailsHookName = `${notifierHookName}-content-details`
const notifierCloseIconHookName = `${notifierHookName}-close-icon`

const test = integration('frost-notification')
describe(test.label, function () {
  test.setup()

  let sandbox, notification
  beforeEach(function () {
    initializeHook()
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

    it('should have the top-level container', function () {
      expect($hook(notifierHookName)).to.have.length(1)
      expect($hook(notifierContentHookName)).to.have.length(1)
      expect($hook(notifierContentMessageHookName)).to.have.length(1)
      expect($hook(notifierContentDetailsHookName)).to.have.length(1)
    })

    it('should have the message', function () {
      expect($hook(notifierContentMessageHookName).text()).to.match(/test message/)
    })

    it('should have the details link', function () {
      expect($hook(notifierContentDetailsHookName)).to.have.length(1)
    })
  })

  it('should not display details link when details aren\'t provided', function () {
    this.set('notification.details', undefined)

    this.render(hbs`{{frost-notification notification=notification}}`)
    expect($hook(notifierContentDetailsHookName)).not.to.have.length(1)
  })

  it('should call onDetailsClick when the details link is clicked', function () {
    let spy = sandbox.spy()

    this.set('notification.onDetailsClick', spy)
    this.render(hbs`{{frost-notification notification=notification}}`)
    $hook(notifierContentDetailsHookName).find('a').click()

    expect(spy.calledWith('details')).to.equal(true)
  })

  it('should remove the notification when closed', function () {
    this.render(hbs`{{frost-notification notification=notification}}`)
    $hook(notifierCloseIconHookName).click()

    expect(this.get('notifier').removeNotification.called).to.equal(true)
  })

  it('should change hook', function () {
    this.render(hbs`{{frost-notification notification=notification hook='my-hook'}}`)
    expect($hook(`my-hook${notifierHookName}`)).to.have.length(1)
  })
})
