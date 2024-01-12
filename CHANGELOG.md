# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Security
## [4.0.11] - 2024-01-12
- Several minor package upgrades
- Major version upgrades:
    - webpack-manifest-plugin 3.4.1 -> 5.0.0 (two major versions)
    - css-minimizer-webpack-plugin 3.4.1 -> 5.0.1
    - node-sass 7.0.3 -> 9.0.0
- Replace deprecated packages
    - Replace @babel/plugin-proposal-class-properties with @babel/plugin-transform-class-properties.
    - Replace @babel/plugin-proposal-object-rest-spread with @babel/plugin-transform-object-rest-spread.

### Security
## [4.0.10] - 2023-12-18

## [4.0.9] - 2023-11-01

### Security
 - Package updates 

## [4.0.8] - 2023-09-08

### Security
 - Minor updates

## [4.0.7] - 2023-04-20

### Security
 - Update `remapping`
 - Update `babble/code-frame`

## [4.0.3] - 2022-04-27

### Security
 - Update `node-sass`
 - Update `sass`
 - Update `sass-loader`

## [4.0.2] - 2022-03-30

### Security
 - Update `node-sass`
 - Update `minimist`
 - Update `nanoid`

## [4.0.1] - 2021-11-29

### Security
 - Update `node-sass`

## [4.0.0] - 2021-11-23

### Removed
 - Removed `imagemin-*` dependencies

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
