//partial: changes the types to be optional for an object

interface rectangle {
    length: number;
    width: number;
}

// const square: Partial<rectangle> = {
//     length: 900,                             if no length or width given it will make an error,compolsury implementaiton in necessary
//     width: 600,
// };

//while using partial utitty type it is not necessry to implement both length and width

//required : will  make the optional parameters required;

interface Humans {
    name: string;
    age: number;
    place?: string;
}

const homosapiens: Required<Humans> = {
    name: "jishad",
    age: 30,
    place: "kerala", //here the required parameter place had to define strictly
};

//record: shortcut to define  a ibject type specific

const developers: Record<number, string> = {
    1: "fullstack",
    2: "MERN",
};

//OMIT : removes keys and values from the specific type

interface farm {
    name: string;
    count: number;
    place?: string;
}

const paultryFarm: farm = {
    name: "paul",
    count: 20,
    place: "trieue",
};

const diaryFarm: Omit<farm, "place" | "count"> = {
    name: "milma", //here i have omitted the place and count from the object
};

const cowFarm: Pick<farm, "name"> = {
    // i could only pick the name attribute and define the object
    name: "rajas farm",
};

//exclude :removes a type from an union

type Primitive = boolean | string | number;

const val: Exclude<Primitive, string> = true;
