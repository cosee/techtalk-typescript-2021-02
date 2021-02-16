import { hasShape } from "src/runtime-checks/003-shape";
import { isNumber, isString } from "src/runtime-checks/001-primitives";
import { RuntimeChecker } from "src/runtime-checks/000-baseTypes";

export type CheckedType<T> = T extends RuntimeChecker<infer P> ? P : never;


const isPerson = hasShape({
  id: isNumber,
  name: isString,
});


type Person = CheckedType<typeof isPerson>;

const person: Person = {
  id: 1,
  name: "string",
};

console.log(person)
