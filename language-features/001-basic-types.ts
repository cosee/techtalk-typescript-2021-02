const myNumber: number = 15;
const myString: string = "myString";
const myBoolean: boolean = true
const myConstant: 'firstName' = "firstName"; // this is called a "literal type"
const myStringUnion: 'firstname' | 'lastName' | 1 = "lastName"

const myArray: string[] = ["string1","string2"];
const myRecord: Record<string, number> = {
    "Fifteen": 15
}
const myFunction: (value: number) => number = (value) => value + 5
const myObject: { name: string, age: number, pet?: string } = {
    name: 'Max',
    age: 15,
}





export {}
