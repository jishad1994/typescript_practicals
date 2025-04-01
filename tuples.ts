//tuples are  array with predefined type for each index

let mixture: [number, string, boolean] = [5, "name", true];

//best practice is to make the tuple readonly

let readonlyTuple: readonly [string, number, boolean] = ["jishad", 30, true];

// readonlyTuple .push(56); will throw an error;

//named tuple

const namedTuple: [x: number, y: string] = [55, "890"];

console.log(namedTuple[1]); // result: "890"


//destructuring the tuples

const[x,y]=namedTuple;

console.log(x)//55
console.log(y)//890