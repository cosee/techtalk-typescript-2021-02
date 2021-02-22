
// Template literal types allow you specify patterns
type IsoDate = `${number}-${number}-${number}T${number}:${number}:${number}`
const x: IsoDate = '2010-10-10T14:00:00'


// You can use derived patterns
type Braced<T extends string> = `(${T})`

type Status = "OK" | "Error" | "Critical"
const y: Braced<Status> = "(Critical)"

export {}
