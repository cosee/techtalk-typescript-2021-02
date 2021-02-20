import { isArray } from "src/runtime-checks/002-array";
import { isString } from "src/runtime-checks/001-primitives";

test("isArray", () => {

  const isStringArray = isArray(isString);
  const array: unknown = ["1", "2", "3"];

  if (!isStringArray(array)) {
    throw new Error("not a string array")
  }

  const x: string[] = array

});
