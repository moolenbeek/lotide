# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @emoolenbeek/lotide`

**Require it:**

`const _ = require('@emoolenbeek/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

1. [assertEqual](/assertEqual.js)
2. [head](/head.js)
3. [tail](/tail.js)
4. [eqArrays](/eqArrays.js)
5. [assertArraysEqual](/assertArraysEqual.js)
6. [without](/without.js)
7. [flatten](/flatten.js)
8. [middle](/middle.js)
9. [countOnly](/countOnly.js)
10. [countLetters](/countLetters.js)
11. [letterPositions](/letterPositions.js)
12. [findKeyByValue](/findKeyByValue.js)
13. [eqObjects](/eqObjects.js)
14. [assertObjectsEqual](/assertObjectsEqual.js)
15. [map](/map.js)
16. [takeUntil](/takeUntil.js)
17. [findKey](/findKey.js)