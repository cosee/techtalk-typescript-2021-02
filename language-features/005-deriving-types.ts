interface User {
    id: number,
    name: string
}
type Users = User[];


// Derive array element type
type DerivedUser = Users[number]
const derivedUser: DerivedUser = {
    id: 1,
    name: "myname"
}

// Derive property type
type IdType = User['id']
const id: IdType = 1


// Pick / Exclude
type IdOnly = Pick<User, 'id'>
type NoId = Exclude<User, 'id'>

export {}
