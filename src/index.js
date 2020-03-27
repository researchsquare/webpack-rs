const config = require('./config');
const merge = require('webpack-merge');

module.exports = {
    extendDefaultConfiguration: originalConfig => merge(config, originalConfig),
};
