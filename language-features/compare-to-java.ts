// Unlike in Java, compiled typescript code cannot detect any class cast exceptions.
// You have to do manual checks in those cases.

interface Animal {
    legs: number
}

interface Dog extends Animal {
    bark(): void
}

const animal: Animal = {
    legs: 4
}

const dog: Dog = animal as Dog // no runtime exception here

// ... many lines of code ...

dog.bark() // runtime exception happens here

export {}
