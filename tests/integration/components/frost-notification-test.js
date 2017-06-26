import {expect} from 'chai'
import Ember from 'ember'
const {Service} = Ember
import {$hook} from 'ember-hook'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

const notifierStub = Service.extend({
  removeNotification: function () {}
})

const notifierHookName = 'fn-notification-wrapper'
const notifierContentHookName = `${notifierHookName}-content`
const notifierContentMessageHookName = `${notifierHookName}-content-message`
const notifierContentDetailsHookName = `${notifierHookName}-content-details`
const notifierCloseIconHookName = `${notifierHookName}-close-icon`

const test = integration('frost-notification')
describe(test.label, function () {
  test.setup()

  let sandbox, notification
  beforeEach(function () {
    sandbox = sinon.sandbox.create()

    this.register('service:notifier', notifierStub)
    this.inject.service('notifier', {as: 'notifier'})

    sandbox.stub(this.get('notifier'), 'removeNotification')

    notification = {
      message: 'test message',
      onDetailsClick: sandbox.stub(),
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
      this.render(hbs`
        {{frost-notification
          hook='fn'
          hookQualifiers=(hash foo='bar')
          notification=notification
        }}
      `)
    })

    it('the top-level container', function () {
      // FIXME: break into multiple it() blocks (@job13er 2017-06-26)
      expect($hook(notifierHookName), 'a').to.have.length(1)
      expect($hook(notifierContentHookName), 'b').to.have.length(1)
      expect($hook(notifierContentMessageHookName), 'c').to.have.length(1)
      expect($hook(notifierContentDetailsHookName), 'd').to.have.length(1)
    })

    it('the message', function () {
      expect($hook(notifierContentMessageHookName)).to.have.text('test message')
    })

    it('the details link', function () {
      expect($hook(notifierContentDetailsHookName)).to.have.length(1)
    })
  })

  it('does not display details link when details aren\'t provided', function () {
    this.set('notification.onDetailsClick', undefined)

    // FIXME: don't render inside an it(), make a nested describe() with a beforeEach() instead (@job13er 2017-06-26)
    this.render(hbs`
      {{frost-notification
        hook='fn'
        hookQualifiers=(hash foo='bar')
        notification=notification
      }}
    `)
    expect($hook(notifierContentDetailsHookName)).not.to.have.length(1)
  })

  it('calls onDetailsClick when the details link is clicked', function () {
    let spy = sandbox.spy()

    this.set('notification.onDetailsClick', spy)
    // FIXME: don't render inside an it(), make a nested describe() with a beforeEach() instead (@job13er 2017-06-26)
    this.render(hbs`
      {{frost-notification
        hook='fn'
        hookQualifiers=(hash foo='bar')
        notification=notification
      }}
    `)
    $hook(notifierContentDetailsHookName).find('a').click()

    expect(spy.calledWith('details')).to.equal(true)
  })

  it('removes the notification when closed', function () {
    // FIXME: don't render inside an it(), make a nested describe() with a beforeEach() instead (@job13er 2017-06-26)
    this.render(hbs`
      {{frost-notification
        hook='fn'
        hookQualifiers=(hash foo='bar')
        notification=notification
      }}
    `)
    $hook(notifierCloseIconHookName).click()

    expect(this.get('notifier').removeNotification.called).to.equal(true)
  })

  it('change hook', function () {
    this.render(hbs`
      {{frost-notification
        hook='myHook'
        hookQualifiers=(hash foo='bar')
        notification=notification
      }}
    `)
    expect($hook(notifierHookName.replace('fn', 'myHook'))).to.have.length(1)
  })
})
