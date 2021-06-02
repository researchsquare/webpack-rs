import path from 'path';
import { extendDefaultWebpackConfiguration, Plugins } from '../src/index.js';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default extendDefaultWebpackConfiguration({
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
