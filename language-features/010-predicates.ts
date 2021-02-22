// "value is number" tells the compiler that the parameter "value" is a number if this function returns "true"
function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

const x: unknown = 2;
// This does not work here:
// console.log(x.toString(36))
if (isNumber(x)) {
  // Inside this block "x" is of type "number"
  console.log(x.toString(36));
}

const arr: unknown[] = [1, 2, 3];
// This does not work here
// arr.map(item => item.toString(36))
arr.filter(isNumber).map((item) => item.toString(36));
// "filter" ensures that the result is a "number[]" if used with "isNumber"

export {};
