//alias is something that we substitute a type with a name

type Year = number;
type Model = string;
type Name = string;

type Car = {
    name: Name;
    model: Model;
    year: Year;
};

let myFavCar: Car = {
    name: "land cruider",
    model: "Toyota",
    year: 2025,
};

//InTERFACE   is similar to aliase BUT they only apply to objects

interface Family {
    name: string;
    count: number;
    father: string;
    mother: string;
}

let thayyilHouse: Family = {
    name: "ThayyilHouse",
    count: 5,
    father: "Abu",
    mother: "Salma",
};

//UNION

function printStatusCode(code: number | string) {
    console.log(`the status code ${code}`);
}

printStatusCode(404);
printStatusCode("404");


