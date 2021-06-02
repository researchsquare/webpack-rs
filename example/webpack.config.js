import path from 'path';
import { extendDefaultWebpackConfiguration, Plugins } from '../src/index.js';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default extendDefaultWebpackConfiguration({
    entry: path.join(dirname, 'index.js'),
    plugins: [
        new Plugins.CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(dirname, 'index.js'),
                    to: path.join(dirname, 'dist', 'index-copied.js'),
                },
            ],
        }),
    ],
    output: {
        path: path.join(dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
});
