// "any" can be assigned to anything without casting. No type-check is performed by the compiler.
// This also means that you should type-check you value unless you are sure nothing bad can happen.
const myAny: any = "asdas";
const myFoo: number = myAny;

// "unknown" must be cast in order to assign to a specific type.
const myUnknown: unknown = 10;
const myFoo2: number = myUnknown as number;

// never cannot be assigned
function play(when: never): void {}


export {}
