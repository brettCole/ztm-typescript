// Using functions and template literals, print out your first and last name.
//
// Requirements:
// - Use a single function to generate your first name
// - Use a single function to generate your last name
// - Use a single function to generate your full name by using the other
//   functions
// - Print out your full name using the functions

import { strict as assert } from "assert";

function firstName(name:string) {
    console.log(`${name}`);
}

function lastName(name:string) {
    console.log(`${name}`);
}

function completeName(firstName:string, lastName:string) {
    console.log(`${firstName} ${lastName}`);
}

firstName('Brett');
lastName('Cole');
completeName('Brett', 'Cole');