import {RuntimeChecker} from "src/runtime-checks/000-baseTypes";

// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
type ObjectChecker<T> = {
    readonly [Property in keyof T]: RuntimeChecker<T[Property]>
}

export function hasShape<T extends Record<string, unknown>>(propertyCheckers: ObjectChecker<T>): RuntimeChecker<T> {
    return (obj): obj is T => {
        if (obj == null) {
            return false;
        }
        if (typeof obj !== 'object') {
            return false;
        }

        const typedObject = obj as Record<string, unknown>;

        for (const key of Object.keys(propertyCheckers)) {
            const propertyChecker = propertyCheckers[key];
            const objElement = typedObject[key];
            if (!propertyChecker(objElement as unknown)) {
                return false;
            }
        }
        return true;
    }
}
