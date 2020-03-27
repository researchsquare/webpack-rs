const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const env = process.env.NODE_ENV || 'production';
const isDev = env === 'development';

module.exports = {
    cache: true,
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: require('./babel-config'),
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
                test: /\.(jpg|eot|png|gif|svg|ttf|woff|woff2|oft|ico)(\?v=\d+\.\d+\.\d+)?$/,
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
            new OptimizeCSSAssetsPlugin({}),
            new TerserJSPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
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
