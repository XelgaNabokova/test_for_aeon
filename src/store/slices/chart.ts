import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChart } from "../../models";

interface INewChart extends IChart {
    hide: boolean,
    level: number
}

interface ChartState {
    chart: IChart,
    chartTitle: string
}

interface ChartPayload {
    project: '',
    period: '',
    chart: IChart
}

// const list: INewChart[] = [];

// const newChartF = (chart: IChart[], level = 1) => {

//   chart.map(i => {
//     list.push({...i, hide: true, level: level});
//     if(i.sub) newChartF(i.sub, level + 1)
//   })

//   return list
// }

const initialState: ChartState  = {
    chart: {id: 0, period_start: '', period_end: '', sub: [], title: ''},
    chartTitle: ''
}

export const chartSlice = createSlice({
    name: "chart",
    initialState: initialState,
    reducers: {
        getData: (state, action: PayloadAction<ChartPayload>) => {
            state.chart = action.payload.chart;
            state.chartTitle = `${action.payload.project} / ${action.payload.period}` 
        },
        setVisible: (state, action: PayloadAction<number>) => {

        },
    }
})

export const { 
    getData,
    setVisible,
} = chartSlice.actions;

export default chartSlice.reducer