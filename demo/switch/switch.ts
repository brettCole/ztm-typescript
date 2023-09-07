/* eslint-disable */
import { strict as assert } from "assert";
import { Z_ASCII } from "zlib";

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

let someNumber = parseInt("10");
const sample = "sample";
const someString = `${sample}`;

switch(someString) {
    case "test":
        // A
        break;
    case "sample":
        // B
        break;
    case "a":
        // C
        break;
}

if (someString === "test") {
    // A
} else if (someString === "sample") {
    // B
} else if (someString === "c") {
    // C
}

someNumber = parseInt("3");
switch (someNumber) {
    case 1:
        // A
        break;
    case 2:
        // B
        break;
    default:
        // C
}

if (someNumber === 1) {
    // A
} else if (someNumber === 2) {
    // B
} else {
    // C
}

someNumber = parseInt("1");
switch (someNumber) {
    case 1:
        // code
    case 2:
    case 3:
        // code
    case 4:
    case 5:
        // code
        break;
}

if (someNumber >= 1 && someNumber <= 5) {
    // code
}