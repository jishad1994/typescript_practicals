//function can be typed accodrding to the type of data they return

//function that returns number
function multer(num1: number, num2: number): number {
    return num1 * num2;
}

//function that doesnt return anything

function greet(name: string): void {
    console.log(`hello ${name}`);
}

//named parameteer function

function area({ length, width }: { length: number; width: number }): number {
    return length * width;
}

//default paratmeter

function sample2(num1: number, num2: number, num3: number = 10) {
    return num1 + num2 + num3;
}

//optional parameter

function optionalFunction(num1: number, num2: number, num3?: number) {
    return num1 + num2 + (num3 || 0);
}

//rest parameter

function sum(num1: number, num2: number, ...rest: number[]): number {
    return num1 + num2 + rest.reduce((acc, ele) => (acc += ele), 0);
}

//function type alias

type Negate=(value:number)=>number;

const negate:Negate=(val)=>val*-1; 

console.log(negate(4))



type fav=(val:number)=>number;

const myFav:fav=(val)=>val;


let variable:unknown=5;

console.log((variable as string).length)