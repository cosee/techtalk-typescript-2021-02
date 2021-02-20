interface Animal {
}

interface Dog extends Animal {
}

function add(animal: Animal) {
    const dog: Dog = animal; // no compile error, because Animal and Dog have the same structure
}

add({})



export {}
