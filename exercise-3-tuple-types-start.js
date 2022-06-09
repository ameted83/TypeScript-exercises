"use strict";
/**
 * START: Follow the instructions below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryCurrency = exports.countryPopulation = void 0;
// Add a tuple type annotation for this tuple.
const countryPopulation = ["China", 1412600000];
exports.countryPopulation = countryPopulation;
const countryCurrency = ["Italy", "Euro", "EUR"];
exports.countryCurrency = countryCurrency;
// Add a tuple type annotation that prevents this tuple from being modified.
// Use the readonly modifier and the tuple type syntax: readonly [type, type]
// This will cause a type error. Remove the code that now has a type error.
const countryLanguage = ["Greece", "Greek"];
countryLanguage.reverse();
console.log(countryLanguage);
