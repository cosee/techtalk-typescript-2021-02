interface Animal {
    legs: number
}

interface Dog extends Animal {
    bark(): void
}

const animal: Animal = {
    legs: 4
}

const dog: Dog = animal as Dog

export {}
