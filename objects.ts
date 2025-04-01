//ts has a speciifc syntax for typing objects

let details: { name: string; age: number; place: string };

details = { name: "jishad", age: 30, place: "tirur" };

//type can infere these properties based on the datatype

const favcar = {
    name: "land cruiser",
};

// favcar.name=88;     will throw an error since it has alreday infered a string type for name index

//index signature
let studentDetails: { [key: string]: string }; // define the index signature

studentDetails = { fast: "super", salary: "ten" };
studentDetails.happy = "yes";
// studentDetails.55="kjlskj"   will throw an error since the key is not type string
