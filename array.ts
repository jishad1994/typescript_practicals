//  🔠 define an array that only accepts string values

let names: string[] = [];
names.push("jishad");
// names.push(55)  => will throw an error

// 📖  readonly   arrays for saving arrays from being modiefied

let favCar: readonly string[] = ["land cruiser"];

// favCar.push("nissan patrol");    will throw an error

//type inference in arrays will assume the type of the array

let numbers = [1, 2, 3, 4, 5]; //assumed the type of the arrays as number

numbers.push(7); //no error

// numbers.push('8') will throw an error

let head: number = numbers[0];
