# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.2] - 2020-07-14

### Security
 - Updated `imagmin-*` dependencies to address security vulernabilities
 - Updated `css-minimizer-webpack-plugin` to address security vulernabilities

## [3.0.1] - 2020-07-01

### Security
 - Updated `node-sass` to address security vulernabilities

## [3.0.0] - 2020-06-03

### Added
 - Added `Plugins` export that contains common plugins where options are likely to vary between projects
 - Added `helpers` export that contains functions that may be useful / common in projects. At the moment, this includes an `optimizeImages` function, which can be used along w/ `CopyWebpackPlugin` to optimize images that are copied via webpack.
 - Added `WebpackManifestPlugin` so that projects can expose a manifest (which can assist with managing private sourcemaps and cache busting)

### Removed
 - Removed `copyFiles`. This should be replaced with `CopyWebpackPlugin` (exposed via `Plugins.CopyWebpackPlugin`)

### Security
 - This updates `webpack-bundle-analyzer`, babel dependencies, and `node-sass` to address security vulnerabilities
