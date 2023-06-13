// tsc file.ts -w  -handle when file ts change

// 1. Basic types
let fullName: string = "Conal KM";

let age: number = 22;

let isStudent: boolean = false;

let album: any;
album = 1;
album = "string";
album = true;

const sum = (a: number, b: number) => a + b;

let postId: string | number;
let isActive: number | boolean | string;

let re: RegExp = /\w+/g;
