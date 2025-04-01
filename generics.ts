//generics are used to create flexible functions with flexible data types
// code reusability
//type of safety

//genric function with single type parameter

function identity<T>(val: T): T {
    return val;
}
//examples

console.log(identity<string>("hello world")); //hello world

console.log(identity<number>(55)); //output:55

//generic function with multiple type parameters
function sample<T, S>(val1: T, val2: S): [T, S] {
    return [val1, val2];
}

//generic interface
interface empID<S> {
    Id: S;
}

//expamplel
let employee: empID<string> = {
    Id: "766",
};

//generic class

class MyClass<T> {
    public count: T;

    constructor(count: T) {
        this.count = count;
    }

    public getCount(): T {
        return this.count;
    }
}

const classNine = new MyClass<number>(500);

console.log(classNine.getCount()); //out put:500
