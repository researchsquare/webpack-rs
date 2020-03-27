# Webpack RS

This package is intended to manage common assets across our various repositories. This can be installed using

```
yarn add -D webpack-rs
```

This package exposes two functions:

 - `extendDefaultWebpackConfiguration`: Use this to merge the base configuration with your apps configuration
 - `copyFiles`: Use this to copy files from one location to another

There's a basic example [here]((/example/webpack.config.js) that can be ran using `npx webpack --config=example/webpack.config.js`
