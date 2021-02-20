interface User {
    id: number,
    name: string
}

type PropertyName = keyof User;
const prop: PropertyName = "id";



export {}
