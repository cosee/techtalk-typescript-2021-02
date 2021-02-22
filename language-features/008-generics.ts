// Generics allow you to use types that you do not know (yet).

function toArray<T>(item: T): T[] {
  return [item];
}

const result = toArray(1);
// "typeof result" is "number[]"

interface Container<T> {
  item: T;
  setItem: (item: T) => void;
}

// restrict generic parameter and/or add default value
type Entity = { id: number };
type Person = { name: string } & Entity;
type Animal = { legs: number } & Entity;
type Hit<T extends Entity = Person> = { entity: T; score: number };

// Default applies
const hit: Hit = {
  entity: { id: 1, name: "Me" },
  score: 0.9,
};

// don't use default
const animalHit: Hit<Animal> = {
  entity: { id: 1, legs: 4 },
  score: 0.9,
};

// infer Entity from generic parameter of Hit-type
type EntityFromHit<HitType> = HitType extends Hit<infer T> ? T : never

type AnimalHit = Hit<Animal>
type InferredAnimal = EntityFromHit<AnimalHit>
const inferredAnimal: InferredAnimal = {
    legs: 4,
    id: 1
}


export {};
