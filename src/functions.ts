// 3. Functions
// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Gui = {
  name: string;
  active?: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;

// Literal types
let myName: "Conal";

let use: "conal" | "ken" | "kenzi";

// Functions
const add = (a: number, b: number): number => a + b;
const logMsg = (message: any) => console.log(message);
logMsg("Hello!");
logMsg(123);

type mathFunc = (a: number, b: number) => number;
let multi: mathFunc = (c, d) => c * d;
multi(2, 3);

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

sumAll(3, 5, 2);
sumAll(3, 5);
sumAll(undefined, 5);

// Rest parameters
const total = (a: number, ...nums: number[]) =>
  a + nums.reduce((prev, cur) => prev + cur);

total(1, 2, 3, 4);

const createErr = (errMsg: string): never => {
  throw new Error(errMsg);
};
