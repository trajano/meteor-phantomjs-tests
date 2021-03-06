Package.describe({
  name: "dispatch:phantomjs-tests",
  summary: "A helper package for Meteor test driver packages. Runs client tests in PhantomJS.",
  git: "https://github.com/dispatch/meteor-phantomjs-tests.git",
  version: '0.0.4',
  testOnly: true,
});

Npm.depends({
  'meteor-force-non-portable': '1.0.0',
  'phantomjs-prebuilt': '2.1.5',
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');

  api.use('ecmascript');

  api.addAssets('phantomjsScript.js', 'server');

  api.mainModule('server.js', 'server');
});
