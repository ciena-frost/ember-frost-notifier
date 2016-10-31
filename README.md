[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-notifier.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-notifier

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-notifier.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-notifier

[npm-img]: https://img.shields.io/npm/v/ember-frost-notifier.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-notifier

[ember-observer-badge]: http://emberobserver.com/badges/ember-frost-notifier.svg "Ember Observer score"
[ember-observer-badge-url]: http://emberobserver.com/addons/ember-frost-notifier

[ember-img]: https://img.shields.io/badge/ember-2.3+-orange.svg "Ember 2.3+"

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

[bithound-img]: https://www.bithound.io/github/ciena-frost/ember-frost-notifier/badges/score.svg "bitHound"
[bithound-url]: https://www.bithound.io/github/ciena-frost/ember-frost-notifier

# ember-frost-notifier
###### Dependencies

![Ember][ember-img]
[![NPM][npm-img]][npm-url]

###### Health

[![Travis][ci-img]][ci-url]
[![Coveralls][cov-img]][cov-url]

###### Security

[![bitHound][bithound-img]][bithound-url]

###### Ember Observer score
[![EmberObserver][ember-observer-badge]][ember-observer-badge-url]

A service and component for managing application notifications

 * [Installation](#Installation)
 * [API](#API)
 * [Examples](#Examples)
 * [Contributing](#Contributing)

## Installation

```
ember install ember-frost-notifier
```

## API

`ember-frost-notifier` registers the `notifier` *service* which can be injected into your controllers and routes to add and remove notifications.  You must have only one `{{frost-notifier}}` in your application template to display these notifications.

### Methods

#### addNotification

Adds a single notification to the list. Takes a single parameter `options` and returns the `notification` object.

**NotificationOption**:

| Name | Type | Description |
| --------- | ----- | ----------- |
| `message` | `String` | Message to display |
| `details` | `Object` | details to pass to onDetailsClick |
| `onDetailsClick` | `Function` | callback for when the details is clicked |
| `type` | `String` | type of notification (success, info, warning, error) |
| `autoClear` | `Boolean` | whether to dismiss notification automatically |
| `clearDuration` | `Number` | time in ms to dismiss if autoCleared |

#### removeNotification

Removes a single notification from the list. Takes the instance of the `notification`

#### clearAll

Removes all notifications.

## Examples

In your application/template.hbs:

```
{{frost-notifier}}
{{outlet}}
```

In your controller:

```javascript
import Ember from 'ember'

export default Ember.Controller.extend({
	notifier: Ember.inject.service('notifier'),
	actions: {
		showNotification () {
			this.get('notifier').addNotification({
				message: 'Something terribly bad happened',
				details: 'It was bad. It was really really bad!',
				onDetailsClick (details) {
					console.log(details)
				},
				type: 'error',
				autoClear: false,
			})
		}
	}
})
```

##Contributing

This following outlines the details of collaborating on this Ember addon:

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
