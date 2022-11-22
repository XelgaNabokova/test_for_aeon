import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppStore } from '../store/index'

export const useAppDispatch = () => useDispatch<AppStore['dispatch']>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector