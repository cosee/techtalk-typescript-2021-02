enum Status {
    "OK","Warning","Critical"
}

// I prefer this:
type StatusType = 'OK' | 'Warning' | 'Critical'

// or
const StatusValues = ['OK','Warning','Critical'] as const
type StatusType2 = typeof StatusValues[number]


export {}
