// array
const stringArray = ['a', 1, 'c']
const otherStringArray: typeof stringArray = ['1', '2', 1]




// const array
const constArray = ['a', 1, 'c'] as const;
type ArrayValue = typeof constArray[number]
const arrValue: ArrayValue = "a"




// objects
const obj = {
    "one-key": 1,
    "second-key": "some string"
}
type MyObject = typeof obj
const obj2: MyObject = {
    "one-key": 1,
    "second-key": "another string"
}




// const object
const constObj = {
    "one-key": 1,
    "second-key": "some string"
} as const

type KeyType = keyof typeof constObj;
const objKey: KeyType = "one-key";
const objValue: typeof constObj[KeyType] = "some string"

export {}
