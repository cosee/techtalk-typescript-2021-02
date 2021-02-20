interface PersonInterface {
    name: string;
    age: number;
    pet?: string;
}

type PersonType = {
    name: string,
    age: number,
    pet?: string
}

const person: PersonType = {name: "Max", age: 15}






export {}
