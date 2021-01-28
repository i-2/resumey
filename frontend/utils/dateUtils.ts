export interface TimeBounded {
    start: Date;
    end: Date;
    [propName: string]: any;
}


export function formatDate(date: Date) {
    const dateString = date.toISOString().slice(0, 10);
    return `${dateString} 00:00:00`
}


export function cleanStartEnd(data: TimeBounded) {
    return {
        ...data,
        start: formatDate(data.start),
        end: formatDate(data.end)
    }
}