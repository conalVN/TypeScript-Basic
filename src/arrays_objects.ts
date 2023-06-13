// 2. Arrays & Objects
// Arrays
let arr: string[] = ["one", "two", "three"];
let arr2: (string | number)[] = ["conal", "22", "mango"];

// tuple
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

let evh: Guitarist = {
  name: "kasn",
  active: false,
  albums: [1982, 7627, "OU76C"],
};

// Enums
// "unlike most typescript features, enums are not a type-level addition to javascript
// but something added to the language and runtime"
