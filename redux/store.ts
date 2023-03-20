import { configureStore } from '@reduxjs/toolkit'
import dailyInputReducer from './slices/dailyInputSlice'

export const store = configureStore({
  reducer: {
    dailyInput: dailyInputReducer
  },
})

 export type RootState = ReturnType<typeof store.getState>
 export type AppDispatch = typeof store.dispatch