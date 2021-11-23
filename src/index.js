const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./config.js');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { merge } = require('webpack-merge');

const extendDefaultWebpackConfiguration = originalConfig => merge(config, originalConfig);
const Plugins = {
    CopyWebpackPlugin,
    MiniCssExtractPlugin,
    WebpackManifestPlugin,
};

module.exports = {
    extendDefaultWebpackConfiguration,
    Plugins,
};
