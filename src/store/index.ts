import {combineReducers, configureStore} from '@reduxjs/toolkit';
import chartReducer from './slices/chart';

const rootReducer = combineReducers({
    chart: chartReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>