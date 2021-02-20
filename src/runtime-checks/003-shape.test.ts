import { hasShape } from "src/runtime-checks/003-shape";
import { isNumber, isString } from "src/runtime-checks/001-primitives";

const isPerson = hasShape({
    id: isNumber,
    name: isString,
});

type Person = {
  id: number;
  name: string;
}

test("isPerson", () => {
  const x: unknown = {
    id: 1,
    name: "Max",
  };

  if (!isPerson(x)) {
    throw new Error("Not a person");
  }

  const id = x.id;
  const name = x.name;

  const person: Person = x

  console.log(id, name)
});
