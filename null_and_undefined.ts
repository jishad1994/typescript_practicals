let valu: string | null | undefined = null;

valu = undefined;


//optional chaining

const person = {
    name: "Alice",
    age: 25
};

console.log(person?.name);  // ✅ Output: Alice
// console.log(person?.address?.city); // ✅ Output: undefined (No error)
let mas=undefined;
console.log(mas??"not avail")