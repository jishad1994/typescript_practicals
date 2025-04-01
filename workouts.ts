function fetchData(): Promise<string> {
    return new Promise((res, rej) => {
        let success = true;

        setTimeout(() => {
            if (success) {
                res("resoleved");
            } else {
                rej("rejected");
            }
        }, 2000);
    });
}

//using .then and .catch
fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

//using async await

async function getData() {
    try {
        let response = await fetchData();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// //implementation of abstraction with interface

interface Rectangle {
    readonly width: number;
    height: number;
    getArea?(): number;
}

const square: Rectangle = {
    width: 9,
    height: 8,
};

square.height = 8;

// class Square implements Rectangle {
//     constructor(private width: number, private height: number) {} // constructor shortcut usage

//     public getArea(): number {
//         return this.height * this.width;
//     }
// }

// function areaCalcultor(shape: Rectangle): number {
//     return shape.getArea();
// }

// const mySquare = new Square(20, 25);

// console.log(areaCalcultor(mySquare));

//typecheck in ts

type Check<T> = T extends string ? "it is string" : "it is not string";

type test1 = Check<number>;

function identifier<T>(data: T): T {
    return data;
}

console.log(identifier<string>("samar"));

function additoner<T, S>(val1: T, val2: S): [T, S] {
    return [val1, val2];
}

abstract class Animals {
    abstract makeSound(): void;
    move(): void {
        console.log("i can move");
    }
}

class Dog extends Animals {
    makeSound(): void {
        console.log("bow bow");
    }
}

const puppy = new Dog();
puppy.move();

interface Cars {
    name: string;
    makeHorn?(): void;
}

const toyota: Omit<Cars, "name"> = {
    makeHorn: () => {
        console.log("beep beep");
    },
};

enum Codes {
    notFound = "404",
    error = "500",
}

console.log(Codes.notFound);

//index signature example

type myType = {
    [key: number]: string;
};

const thirty: myType = {
    77: "sevenseven",
};

let masr = null;
let res = masr ?? "no value provide";
console.log(res);

function gsrs(...rest: number[]): number {
    return rest.reduce((acc, ele) => (acc += ele), 0);
}

let arr: number[] = [1, 2, 3, 4, 5];
gsrs(...arr);

type circle = {
    kind: "circle";
    radius: number;
};
type rect = {
    kind: "Rectangle";
    length: number;
    width: number;
};

type Shape = circle | rect;

function getAr(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "Rectangle":
            return shape.length * shape.width;
    }
}

//parameter destructering

function kayfan({ name, age }: { name: string; age: number }): void {
    console.log(`hii iam ${name} with ${age}`);
}

function hsa<T, S>(val: T, val5: S): [T, S] {
    return [val, val5];
}
interface hast {
    readonly [key: number]: string;
    age: number;
}

const myb: hast = {
    55: "hello",
    age: 55,
};

type myTyper = string;

interface had {
    name: myType;
}

interface jack {
    name: string;
    getName(): void;
}

class gtt implements jack {
    constructor(private readonly name: string) {}
    getName(): void {
        console.log(this.name);
    }
}

function ghjd(callback: (numb: number) => number): number {
    return callback(5);
}

class calculator {
    summon(one: number, two: number): number;
    summon(one: string, two: string): string;

    summon(one: any, two: any): any {
        return one + two;
    }
}
function printer(constructor: Function) {
    console.log(`an instance of ${constructor.name} has been created`);
}

@printer
class Person {
    constructor(name: string) {}
}
