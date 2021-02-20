function toArray<T>(item: T): T[] {
    return [item]
}

interface Container<T> {
    item: T,
    setItem: (item: T) => void
}

export {}
