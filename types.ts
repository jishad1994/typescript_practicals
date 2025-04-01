//explicit type assign
let firstName: string = "jishad";

//implicit type assign AKA 'infer'

let secondName = "kolapurath";

// secondName = 33;

console.log(secondName);

//in implicit type the ts will infer the type 'any' to the variable if we dont specify

let place = "malappuram"; //type is any  by infering

let age: any = 55; //no error
age = "thirty"; //no error
console.log(age);

//  the 'unknown' is a safer alternatibe for 'any'

let degree: unknown = 12334234;

degree = "arts"; //no error

console.log((degree as string).length);

// never type throws an error whenever it tries to define;

// let happy: never = true;     will throw an error when ever tries to  define;

//undefined & null;

let salary: undefined = undefined;
let promotion: null = null; //if tried to assign any other values rather than null or undefined it will throw an error;
