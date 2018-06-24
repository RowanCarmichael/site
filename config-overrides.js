/* config-overrides.js */

const rewireCSS = require('./rewire/react-app-rewire-css-scss');
const rewireSvgReactLoader = require('react-app-rewire-svg-react-loader');

module.exports = function override(config, env) {
  config = rewireCSS(config, env);
  config = rewireSvgReactLoader(config, env);
  return config;
};
