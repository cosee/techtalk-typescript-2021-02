import {isString} from "src/runtime-checks/001-primitives";
import {RuntimeChecker} from "src/runtime-checks/000-baseTypes";
import {isArray} from "src/runtime-checks/002-array";

export type CheckedType<T> = T extends RuntimeChecker<infer P> ? P : never;



const isStringArray = isArray(isString)

type StringArray = CheckedType<typeof isStringArray>;

const strArr: StringArray = ["12","23","43"]
