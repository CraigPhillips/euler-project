# Frozen Exports Euler Project
This repository contains solutions to programming excercises presented by the
[Project Euler site][1].

As the site itself discusses, noone should use this repository as a means to
solving any of the problems presented. The site intends to sharpen skills
related to mathematical and dynamic programming and using any of the ideas
found here to solve one of the problems can greatly hinder that process.

## Prerequisites
To run any of the solutions in this repository, you'll need a system with
[Node][2] v8.10.0 or later available as well as [NPM][3] v6.4.1 or later. Most
of  the codebase uses experimental [ECMAScript modules][8] (in `.mjs` files) so
whichever version of [Node][2] you've got installed most have those available
via the `--experimental-modules` flag.

## Setup
To follow any of the instructions below, you will first need to install this
project's dependencies:

1. Clone this repository and open a command prompt to the resulting directory
1. Run `npm i` to retrieve all dependencies

## Running solutions to individual problems
An [NPM script][4] is available to trigger the execution of the solution to
individual problems. To use this script, you will simply need to know the
number of the problem as presented on the [Project Euler site][1].

Consider problem 5 which reads:

```
2520 is the smallest number that can be divided by each of the numbers from 1 to
10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
```

To see the solution to this problem, simply run:
```
npm run euler -- --p=5
```

You should see:
```
16:16:15.264Z TRACE FE Euler Project Solutions: running solution... (problem=problem00005)
16:16:15.267Z  INFO FE Euler Project Solutions: solution finished (problem=problem00005, result=232792560)
```

This indicates that the solution ran successfully (and quickly!) to produce an
answer of `232792560`.

## Running tests
An [NPM script][4] is available to verify all provided solutions via [Jest][5].
It can be triggered by running:
```
npm test
```

If you've made changes to any of the source files in this repository, you
can run tests only for those solutions affected by your changes by running:
```
npm run test-changed
```

Note that if you have not made any changes to the files in this repository,
don't have [Git][6] installed, or have somehow otherwise made it so [Jest][5]
can't find the [Git][6] settings, you'll see something that looks like:
```
No tests found related to files changed since last commit.
Run Jest without `-o` or with `--all` to run all tests.

```

## Linting
This repository is configured to use [ESLint][11] to statically analyze all
code for adherence to standard [Node][2] best practices. If you are not using
an editor to automatically lint code as changes are made, you can manually
execute [ESLint][11] by running:
```
npm run lint
```

## Change log
A list of changes for each released version can be found in this project's
[CHANGELOG][9] which follows the conventions outlined [here][10].

## License
The source found in this repository can be used under the open source
[MIT License][7].

## Acknowledgements
Many thanks to the proprietors and contributers of Project Euler. It is a great
collection of puzzles and the length of time over which they've maintained
and expanded on the site is impressive.

Thanks! Thanks! Thanks!

[1]:https://projecteuler.net/about
[2]:https://nodejs.org/en/
[3]:https://www.npmjs.com/
[4]:https://docs.npmjs.com/misc/scripts
[5]:https://jestjs.io/
[6]:https://git-scm.com/downloads
[7]:./LICENSE
[8]:https://nodejs.org/api/esm.html
[9]:./CHANGELOG.md
[10]:https://keepachangelog.com/en/1.0.0/
[11]:https://eslint.org/
