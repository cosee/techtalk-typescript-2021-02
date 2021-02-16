import {RuntimeChecker} from "src/runtime-checks/000-baseTypes";


export const isNumber: RuntimeChecker<number> = (value): value is number => {
  return typeof value === "number";
};

export const isString: RuntimeChecker<string> = (value): value is string => {
  return typeof value === "string";
};


