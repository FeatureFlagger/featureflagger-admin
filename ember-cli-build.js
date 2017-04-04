const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const environment = EmberApp.env();
const isProduction = environment === 'production';

function postcssPlugins() {
    var plugins = [
      {
        module: require('postcss-easy-import')
      },
      {
        module: require('postcss-custom-properties')
      },
      {
        module: require('postcss-color-function')
      },
      {
        module: require('autoprefixer'),
        options: {
            browsers: ['last 2 versions']
        }
      }
  ];

    if (isProduction) {
        plugins.push({
            module: require('cssnano')
        });
    }

    return plugins;
}

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    postcssOptions: {
        compile: {
            enabled: true,
            plugins: postcssPlugins()
        }
    },
    nodeAssets: {
        'jquery-deparam': {
            import: ['jquery-deparam.js']
        },
    },
  });

  app.import('bower_components/validator-js/validator.js');

  return app.toTree();
};
