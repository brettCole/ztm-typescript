/* eslint-disable */
import { strict as assert } from "assert";

// 'ternary' is a condensed if..else statement that can fit on a
// single line.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

const age = 16;
//          (bool exp) ?    T   :   F
const msg = age >= 18 ? "allow" : "deny";
assert.equal(msg, "deny");

const a = 1;
const b = 2;
const c = 3;
const d = 4;

const badSample = a > 1 ? b > 2 : c > 3 ? d > 4 : true;
console.log(badSample);