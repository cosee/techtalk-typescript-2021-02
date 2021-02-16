/* eslint-disable */
import * as t from 'io-ts'

const max: unknown = {
    id: 1,
    name: "Max"
}


const Person = t.type({
    id: t.number,
    name: t.string
})

if (Person.is(max)) {
    console.log(max.id)
}

type UserType = t.TypeOf<typeof Person>

const maxAsUser: UserType = {
    id: 1,
    name: 'Max'
}
