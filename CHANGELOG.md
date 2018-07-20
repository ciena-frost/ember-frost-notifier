# 9.0.1 (2018-07-20)

* **Fixed** Travis API key.


# 9.0.0 (2018-04-13)

* Upgraded `ember-frost-core` to ^8.0.0

# 8.0.0 (2018-03-20)
* Updated pull request template
* Added issue template
* Updated to pr-bumper version 3
* Updated to node 8
* Added slack integration
* Updated ember-frost-test to ^4.0.1
* Updated ember-test-utils to ^8.1.1
* Updated ember-cli-frost-blueprints to ^5.0.2
* Updated pr-bumper to ^3.7.0.
* Updated ember-frost-core to ^7.0.0
* Removed ignoring of package-lock.json file
* Added package-lock.json file
* Updated Travis CI scripts to allow non-exact node version

# 7.0.0 (2018-01-08)
* Remove `Faker` Bower dependency
* Remove `pretender` Bower dependency
* Remove `ember-spread` NPM devDependency
* Remove `ember-prop-types` NPM devDependency
* Remove `ember-elsewhere` NPM devDependency
* Remove `ember-concurrency` NPM devDependency
* Remove _package-lock.json_ until officially support Node 8
* Remove useLintTree from ember-cli-mocha configuration
* Remove `/visual-acceptance` from .gitignore
* Move `ember-hook` NPM devDependency to dependency and pin to `1.4.2`
* Move `ember-truth-helpers` NPM devDependeny to dependencies
* Move `ember-computed-decorators` NPM devDependency to dependencies
* Pin `ember-cli-code-coverage` at `0.3.12`
* Upgrade and pin `ember-cli-sass` NPM dependency to `7.1.1`
* Upgrade `ember-cli-frost-blueprints` NPM devDependency to `^5.0.0`
* Upgrade and move `ember-frost-core` from devDependency to dependency @ `^5.0.0`
* Install `bower` NPM devDependency @ `^1.8.2`
* Install `ember-frost-test` @ `^4.0.0`

# 6.0.1 (2017-11-13)
* #62 - Bind context to call of this._super.included() in index.js

# 6.0.0 (2017-11-03)

## WARNING: THIS REVERTS EMBER CLI 2.16.2 BACK TO 2.12.3

We apologize for this change. Unfortunately, due to the internal needs of our organization this became a required action.

The 2.16.2 changes are now located in the `ember-cli-2.16.2` branch and will hopefully be contained in a versioned release again in the future.

# 5.0.0 (2017-10-19)
* **Removed** bower.json and .bowerrc since no longer needed
* **Removed** ember-cli-visual-regression
* **Updated** testing dependencies
* **Updated** version of ember-test-utils and fix linting
* **Updated** to Ember CLI 2.16.2 and babel 6
* **Updated** ember-computed-decorators to new version which is now ember-decorators
* **Updated** dependencies to latest versions
* **Updated** to imports to use new Ember Javascript Modules API syntax: https://github.com/ember-cli/ember-rfc176-data
* **Added** eslint plugin to enforce Ember Javascript Modules API syntax usage
* **Updated** README to show usage examples with Ember Javascript Modules API syntax
* **Removed** code coverage verification until issue is resolved: https://github.com/kategengler/ember-cli-code-coverage/issues/133
* **Updated** pr-bumper to version 3 which requires updating to use node 8.1.2
* **Added** package-lock.json

# 4.3.7 (2017-08-10)
* **Updated** ember-cli 2.12.3 inter-dependencies

# 4.3.6 (2017-07-25)
* **Added** code coverage check script to build
* **Updated** gh-pages publish of demo app script (demo app was not being published)

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

