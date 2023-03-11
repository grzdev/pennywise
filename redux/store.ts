import { configureStore } from '@reduxjs/toolkit'
import dailyInputReducer from "./slices/dailyInputSlice"

export const store = configureStore({
  reducer: {
    dailyInput: dailyInputReducer
  },
})



// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { 
//   foodSlice,
//   transitSlice,
//   dataSlice,
//   transfersSlice,
//   othersSlice
//  } from "./slices/dailyInputSlice";

//  const rootReducers = combineReducers({
//   food: foodSlice.reducer,
//   transit: transitSlice.reducer,
//   data: dataSlice.reducer,
//   transfers: transfersSlice.reducer,
//   others: othersSlice.reducer
//  })

//  export const store = configureStore({
//   reducer: rootReducers
//  })

 export type RootState = ReturnType<typeof store.getState>
 export type AppDispatch = typeof store.dispatch