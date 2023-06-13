"use strict";
// Literal types
let myName;
let use;
// Functions
const add = (a, b) => a + b;
const logMsg = (message) => console.log(message);
logMsg("Hello!");
logMsg(123);
let multi = (c, d) => c * d;
multi(2, 3);
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
sumAll(3, 5, 2);
sumAll(3, 5);
sumAll(undefined, 5);
// Rest parameters
const total = (a, ...nums) => a + nums.reduce((prev, cur) => prev + cur);
total(1, 2, 3, 4);
const createErr = (errMsg) => {
    throw new Error(errMsg);
};
