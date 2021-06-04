# Webpack RS

This package is intended to manage common assets across our various repositories. This can be installed using

```
yarn add -D webpack-rs
```

This package exposes the following:

 - `extendDefaultWebpackConfiguration`: Use this to merge the base configuration with your apps configuration
 - `Plugins`: plugins where options are likely to vary between projects. This object currently exposes `CopyWebpackPlugin`, `MiniCssExtractPlugin`, and `WebpackManifestPlugin`
 - `helpers`: common functions that can be used in multiple projects
    - `helpers.optimizeImages`: This can be used along w/ `new Plugins.CopyWebpackPlugin` to optimize images copied via webpack (see https://webpack.js.org/plugins/copy-webpack-plugin/#transform for more information)

There's a basic example [here](/example/webpack.config.js) that can be ran using `npx webpack --config=example/webpack.config.js`
