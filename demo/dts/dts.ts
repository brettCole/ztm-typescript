/* eslint-disable */
import { strict as assert } from "assert";
import { add, setCase, quote, max } from './mylib';
import type CaseKind from "./mylib";

// Useful links:
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

const message = "hello";
const upper = setCase(message, "uppercase");
assert.equal(upper, "HELLO");

add(1, 2, 3, 4, 5);