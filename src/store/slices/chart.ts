import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChart } from "../../models";

interface INewChart extends IChart {
    hide: boolean,
    level: number
}

interface ChartState {
    chart: INewChart[],
    chartTitle: string
}

interface ChartPayload {
    project: '',
    period: '',
    chart: IChart
}

const list: INewChart[] = [];

const newChartF = (char: IChart[], level = 1) => {

  char.map(i => {
    list.push({...i, hide: true, level: level});
    if(i.sub) newChartF(i.sub, level + 1)
  })

  return list
}

const initialState: ChartState  = {
    chart: [],
    chartTitle: ''
}

export const chartSlice = createSlice({
    name: "chart",
    initialState: initialState,
    reducers: {
        getData: (state, action: PayloadAction<ChartPayload>) => {
            state.chart = newChartF([action.payload.chart]);
            state.chartTitle = `${action.payload.project} / ${action.payload.period}` 
        },
        setVisible: (state, action: PayloadAction<number>) => {
            state.chart = state.chart.filter(item => {
                if(item.id === action.payload) {
                    const itemsID = item.sub && item.sub.map(i => i.id)
                    
                    return itemsID.map(i => {
                        i === item.id ? {...item, hide: false} : item
                    })
                }
            });
        },
    }
})

export const { 
    getData,
    setVisible,
} = chartSlice.actions;

export default chartSlice.reducer