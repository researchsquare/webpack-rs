module.exports = {
    compact: false,
    presets: [
        '@babel/react',
        [
            '@babel/env',
            {
                modules: false,
                targets: {
                    chrome: '25',
                    edge: '14',
                    firefox: '22',
                    ie: '11',
                    safari: '7',
                },
            },
        ],
    ],
    plugins: [
        '@babel/plugin-transform-object-rest-spread',
        '@babel/plugin-transform-class-properties',
        '@babel/plugin-syntax-dynamic-import',
    ],
    env: {
        test: {
            plugins: ['@babel/plugin-transform-modules-commonjs'],
        },
    },
};
