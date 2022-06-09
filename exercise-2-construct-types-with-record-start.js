"use strict";
/**
 * START: Follow the instructions below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencies = exports.currency = void 0;
// Fix this use of the `Record` utility type so it constructs a valid type.
const currency = {
    name: "United States dollar",
    code: "USD",
    symbol: "$",
};
exports.currency = currency;
const currencies = {
    france: {
        name: "Euro",
        code: "EUR",
        symbol: "€",
    },
    china: {
        name: "Renminbi",
        code: "CNY",
        symbol: "¥",
    },
    colombia: {
        name: "Colombian peso",
        code: "COP",
        symbol: "$",
    },
};
exports.currencies = currencies;
