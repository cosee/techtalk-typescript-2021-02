import { isNumber } from "src/runtime-checks/001-primitives";

test("isNumber", () => {


  const x: unknown = 2;


  if (!isNumber(x)) {
    throw new Error("Not a number")
  }

  const myNumber: number = x;
  console.log(myNumber)
});

