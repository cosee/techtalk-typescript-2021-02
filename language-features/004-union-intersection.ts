interface Cat {
    meow(): void
    size: number;
}

interface Dog {
    bark(): void
    size: number;
}

type CatOrDog = Cat | Dog;
const animal: CatOrDog = {
    bark() {
        console.log("wuff")
    },
    size: 4
}

type CatDog = Cat & Dog;
const catDog: CatDog = {
    bark() {
        console.log("wuff")
    },
    meow() {
        console.log("meow")
    },
    size: 4
}


type Status = 'ok' | 'warning' | 'critical'
const status: Status = 'critical'

export {}
