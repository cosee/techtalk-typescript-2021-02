import { hasShape } from "src/runtime-checks/003-shape";
import { isNumber, isString } from "src/runtime-checks/001-primitives";

const isPerson = hasShape({
    id: isNumber,
    name: isString,
});

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

  console.log(id, name)
});
