enum cardinalDirections {
    north,
    east,
    west,
    south,
}

//enums are a special type of class that contains constants(unchangable variables)

//two types of enums
// numeric enums --default
//string enums

//enums constants will contain numeric values which will increment by 1

console.log(cardinalDirections.north); // output 0
console.log(cardinalDirections.east); // output 1

// we can assign new values to these but should be numeric in nature
let currentDirection = cardinalDirections.north;

console.log(cardinalDirections.east === 1); //true

//string enum

enum NewDirections {
    north = "North",
    east = "East",
    west = "West",
    south = "south",
}

//numeric enums with predefined numeric values;
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
