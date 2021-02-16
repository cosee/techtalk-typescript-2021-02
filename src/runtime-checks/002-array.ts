import {RuntimeChecker} from "src/runtime-checks/000-baseTypes";

export function isArray<T>(itemChecker: RuntimeChecker<T>): RuntimeChecker<T[]> {
    return (value): value is T[] => {
        if (!Array.isArray(value)) {
            return false;
        }
        for (const item of value) {
            if (!itemChecker(item)) {
                return false;
            }
        }
        return true;
    }
}

