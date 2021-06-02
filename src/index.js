import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import config from './config.js';
import helperFunctions from './helpers.js';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { merge } from 'webpack-merge';

export const Plugins = {
    CopyWebpackPlugin,
    MiniCssExtractPlugin,
    WebpackManifestPlugin,
};

export const helpers = helperFunctions;

export const extendDefaultWebpackConfiguration = originalConfig => merge(config, originalConfig);

export default {
    extendDefaultWebpackConfiguration,
    helpers,
    Plugins,
};
