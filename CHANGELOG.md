# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][6], and this project adheres to
[Semantic Versioning][5].

## [Unreleased]
### Added
- solutions to problems 27-29

### Changed
- tweaks to combinatoric, factoring and prime helper logic for linter errors

## [1.1.0]
### Added
- solutions to problems 22-26
- utility function for finding next lexographic permutation of a string

### Changed
- improved find all factors method by eliminating prime factor lookup
- simplified access to utility methods by adding index files

## [1.0.0] - 2018-09-25
### Added
- this CHANGELOG
- solutions to problems 1 - 21
- chained `index.mjs` files to allow launching of nested problem solutions
- [NPM][2] package file
- [Jest][1] configuration
- linting configuration via [ESLint][3]
- [Babel][4] configuration to allow [Jest][1] to process ECMAScript modules

### Changed
- README to contain actual content

### Removed
- Nothing, just keeping this here to use a template for future CHANGELOG
sections

[1]:https://jestjs.io/
[2]:https://www.npmjs.com/
[3]:https://eslint.org/
[4]:https://babeljs.io/
[5]:https://semver.org/spec/v2.0.0.html
[6]:https://keepachangelog.com/en/1.0.0/
