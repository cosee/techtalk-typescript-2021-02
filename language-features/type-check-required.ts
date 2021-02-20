/* eslint-disable */
// These are examples where a runtime check should be done,
// because type-checking in the compiler is circumvented

// The evil "any"-type
const someString: any = "someString";
const someNumber: number = someString;

// Type casting with "as"
type Status = 'ok' | 'error'
const obj1 = "critical"
const obj2: Status = obj1 as Status


export {};
