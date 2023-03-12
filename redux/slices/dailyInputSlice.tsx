// import { createSlice, PayloadAction, } from "@reduxjs/toolkit";

// export interface DailyInputState {
//     food: number
//     transit: number
//     data: number
//     transfers: number
//     others: number
// }

// export const dailyInputSlice = createSlice({
//     name: "dailyInput",
//     initialState: {
//         food: 0,
//         data: 0,
//         transit: 0,
//         transfers: 0,
//         others: 0
//     } as DailyInputState,
//     reducers:{
//         setFood: (state, action) =>{
//             state.food = action.payload
//         }
//     }
// })

// export const {
//     setFood,
// } = dailyInputSlice.actions

// export default dailyInputSlice.reducer 

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface InputState {
//     food: number
//     transit: number
//     data: number
//     transfers: number
//     others: number
// }

// // export const initialState: InputState = {
// //     food: 0,
// //     transit: 0,
// //     data: 0,
// //     transfers: 0,
// //     others: 0,
// // }

// export const foodSlice = createSlice({
//     name: "food",
//     initialState: {
//         food: 0
//     } as InputState,
//     reducers:{
//         foodOnChange: (state, action: PayloadAction<number>) => {
//             state.food = action.payload
//         }
//     }
// })

// export const transitSlice = createSlice({
//     name: "transit",
//     initialState: {
//         transit: 0
//     } as InputState,
//     reducers:{
//         transitOnChange: (state, action: PayloadAction<number>) => {
//             state.transit = action.payload
//         }
//     }
// })

// export const dataSlice = createSlice({
//     name: "data",
//     initialState: {
//         data: 0
//     } as InputState,
//     reducers:{
//         dataOnChange: (state, action: PayloadAction<number>) => {
//             state.data = action.payload
//         }
//     }
// })

// export const transfersSlice = createSlice({
//     name: "transfers",
//     initialState: {
//         transfers: 0
//     } as InputState,
//     reducers:{
//         transfersOnChange: (state, action: PayloadAction<number>) => {
//             state.transfers = action.payload
//         }
//     }
// })

// export const othersSlice = createSlice({
//     name: "others",
//     initialState: {
//         others: 0
//     } as InputState,
//     reducers:{
//         othersOnChange: (state, action: PayloadAction<number>) => {
//             state.others = action.payload
//         }
//     }
// })

// export const { foodOnChange } = foodSlice.actions
// export const { transitOnChange } = transitSlice.actions
// export const { dataOnChange } = dataSlice.actions
// export const { transfersOnChange } = transfersSlice.actions
// export const { othersOnChange } = othersSlice.actions


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NumbersState {
  numbers: number[];
}

const initialState: NumbersState = {
  numbers: [0, 0, 0, 0, 0],
};

const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    setNumberAtIndex(state, action: PayloadAction<{ index: number; value: number }>) {
      const { index, value } = action.payload;
      state.numbers[index] = value;
    },
  },
});

export const { setNumberAtIndex } = numbersSlice.actions;

export default numbersSlice.reducer;