/* eslint-disable */
import { strict as assert } from "assert";

type Link = {
    title: string;
    url: string;
};

const microsoft = {
    title: "microsoft",
    url: "microsoft.com",
};

const typescript = {
    title: "TypeScript",
    url: "typescript.com"
};

//              0           1
const links = [microsoft, typescript];

const tsUrl = links[1].url;

links[0].title = "Microsoft";

console.log(tsUrl);
console.log(links[0]);