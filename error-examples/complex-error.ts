interface LogEntry {
    severity: 'ok' | 'warning' | 'error' | 'critical'
    message: string
    date: string
}

export interface Log {
    errors: LogEntry[]
}

function someFunction(log: Log) {
    console.log(log)
}

const log: Log = {
    errors: [
        {severity: 'ok', date: '2021-02-02', message: 'log message'}
    ]
};

someFunction(log)
