// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
process.env.ASSET_PATH = '/';

var webpack = require('webpack'),
  config = require('../webpack.config');

delete config.chromeExtensionBoilerplate;

config.mode = 'production';

webpack(config, function (err, stats) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  
  if (stats.hasErrors()) {
    const errors = stats.toJson().errors;
    console.error('\nBuild failed with', errors.length, 'error(s):\n');
    errors.forEach((error, index) => {
      console.error(`Error ${index + 1}:`);
      console.error(error.message.split('\n').slice(0, 10).join('\n'));
      console.error('');
    });
    process.exit(1);
  }
  
  if (stats.hasWarnings()) {
    const warnings = stats.toJson().warnings;
    console.warn('\nBuild completed with', warnings.length, 'warning(s)');
  }
  
  console.log('\n✓ Build completed successfully!');
  console.log('Output directory:', config.output.path);
});
