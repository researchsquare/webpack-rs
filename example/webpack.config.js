const path = require('path');
const { extendDefaultWebpackConfiguration, Plugins } = require('../src/index.js');

module.exports = extendDefaultWebpackConfiguration({
    entry: path.join(__dirname, 'index.js'),
    plugins: [
        new Plugins.CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'index.js'),
                    to: path.join(__dirname, 'dist', 'index-copied.js'),
                },
            ],
        }),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
});
