// An enum type is actually an object.  This enum
export enum Status {
  "OK",
  "Warning",
  "Critical",
}
// is equivalent to

const StatusObj = {
  OK: 0,
  Warning: 1,
  Critical: 2,
};

console.log(Status.OK); // 0
console.log(Status.Warning); // 1
console.log(Status[Status.OK]); // "OK"

// we have had many problems with enums in multiple projects and decided to
// use constant union types like instead:

type StatusType = "OK" | "Warning" | "Critical";

// or

const StatusValues = ["OK", "Warning", "Critical"] as const;
type StatusType2 = typeof StatusValues[number];

// This is clearer and does not imply a mapping.


// This is an example for when enums don't work so well
export enum Mapping {
  MyA = "A",
  MyB = "B",
}

function doSomething(param: Mapping): void {

}

// This does not work, even though "Mapping.MyA" equals "A"
// doSomething("A");

export {};
