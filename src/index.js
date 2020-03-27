const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./config');
const merge = require('webpack-merge');

module.exports = {
    copyFiles: files => new CopyWebpackPlugin(files),
    extendDefaultWebpackConfiguration: originalConfig => merge(config, originalConfig),
};
