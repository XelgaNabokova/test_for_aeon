export interface IChart {
    id: number,
    period_start: string,
    period_end: string,
    sub: IChart[],
    title: string,
}