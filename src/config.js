const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const babelConfig = require('./babel.config.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const env = process.env.NODE_ENV || 'production';
const isDev = env === 'development';

module.exports = {
    cache: true,
    mode: isDev ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        ...babelConfig,
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
            {
                test: /\.(jpg|eot|png|gif|svg|ttf|woff|woff2|otf|ico)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                },
            },
            {
                test: /\.ejs$/,
                use: {
                    loader: 'ejs-loader',
                },
            },
        ],
    },
    optimization: {
        minimize: !isDev,
        minimizer: [
            new CssMinimizerPlugin({
                parallel: true,
            }),
            new TerserJSPlugin({
                parallel: true,
            }),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            chunkFilename: '[id].[contenthash].css',
            filename: '[name].[contenthash].css',
            ignoreOrder: true,
        }),

        ...(process.env.ANALYZE ? [new BundleAnalyzerPlugin({ analyzerMode: 'static' })] : []),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.less'],
    },
    devtool: isDev ? 'cheap-module-source-map' : 'source-map',
    stats: {
        children: false,
        chunks: false,
    },
};
