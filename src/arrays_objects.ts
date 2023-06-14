// 2. Arrays & Objects
// Arrays
let arr: string[] = ["one", "two", "three"];
let arr2: (string | number)[] = ["conal", "22", "mango"];

// "readonly" keyword can prevent arrays from being changed.
const names: readonly string[] = [];

// tuple a typed array with a pre-defined length and types for each index.
let myTuple: [string, number, boolean] = ["name", 22, true];

// Objects
let obj: object = {};
// TH1:
// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// }
// TH2:
interface Guitarist {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}

interface ageGuitarist extends Guitarist {
  age: number;
}

let evh: ageGuitarist = {
  name: "kasn",
  active: false,
  albums: [1982, 7627, "OU76C"],
  age: 18,
};

// Enums
// "unlike most typescript features, enums are not a type-level addition to javascript
// but something added to the language and runtime"
