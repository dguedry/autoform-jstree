Package.describe({
  name: 'artjomg:autoform-jstree',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'jsTree input for Autoform',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dguedry/autoform-jstree.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('templating@1.3.0');
  api.use('blaze@2.3.0');
  api.use('aldeed:template-extension@4.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0 || 5.8.1');
  api.addFiles([
    'jstree.html',
    'jstree.js'
  ], 'client');
});
