# 4.3.5 (2017-07-10)
* **Update** to `ember-cli@2.12.3`


# 4.3.4 (2017-06-26)
* **Upgraded** to `pr-bumper@2.x`
* **Upgraded** to recent `ember-cli-code-coverage`
* **Upgraded** `ember-test-utils`
* **Fixed** template lint errors that now properly failed build (thanks to updated `ember-test-utils`)
* **Enabled** code coverage feature in `pr-bumper`


# 4.3.3 (2017-05-31)
* Make use of ember-frost-core z-index variable


# 4.3.2 (2017-05-23)
* **Fixed** display of long, unbroken strings (resolves [#39](https://github.com/ciena-frost/ember-frost-notifier/issues/39))


# 4.3.1 (2017-05-10)
* **Updated** secure auth tokens


# 4.3.0 (2017-04-06)
* **Remove** `blueprints` and use `dependencies` in `package.json` instead to make sure `ember-frost-core` is installed too. 

# 4.2.4 (2017-03-20)
* **Used** info, warning and error icons from `ember-frost-core`

# 4.2.3
* **Updated** the travis scripts used for bumping and publishing

# 4.2.2
* **Fixed** build by disable dependency snapshot which is causing build to fail and not publish.


# 4.2.1
* **Updated** integration tests to remove the deprecated use of `describeComponent()`

# 4.2.0

* **Removed** `lodash` as it isn't needed by this addon.
* **Updated** CI to test both Chrome and Firefox.


# 4.1.2

* **Upgraded** to test against Ember 2.11.


# 4.1.1
- contains -> includes when processing types

# 4.1.0

* **Added** additional builds to CI to make sure addon works with latest versions of Ember.
* **Removed** files from npm package that aren't necessary (all of the various config files).
* **Updated** dependencies to latest versions.


# 4.0.0
- All functionality was maintained

# 3.1.0
* Add icons



# 3.0.0
- **Update** to ember@2.8
- **Update** all other dependencies
- **Update** CI tools (linting, travis, etc.)
- **Add** github templates
- **Fix** linting issues
- **Fix** readme badges
- **Update** build to run tests on Chrome
- **Add** hooks
- **Move** to node >= 6

# 2.1.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.1.0

* **Fixed** deprecation warnings around `frost-icon`.
* **Removed** usage of `bourbon`.

