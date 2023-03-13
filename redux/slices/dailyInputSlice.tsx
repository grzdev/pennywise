// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface NumbersState {
//   numbers: number[];
// }

// const initialState: NumbersState = {
//   numbers: [0, 0, 0, 0, 0],
// };

// const numbersSlice = createSlice({ 
//   name: 'numbers',
//   initialState,
//   reducers: {
//     setNumberAtIndex(state, action: PayloadAction<{ index: number; value: number }>) {
//       const { index, value } = action.payload;
//       state.numbers[index] = value;
//     },
//   },
// });

// export const { setNumberAtIndex } = numbersSlice.actions;

// export default numbersSlice.reducer;

import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export interface MyObject {
  food: number;
  transit: number;
  data: number;
  transfers: number;
  others: number;
}

interface MyState {
  myObject: MyObject;
}

const initialState: MyState = {
  myObject: {
    food: 0,
    transit: 0,
    data: 0,
    transfers: 0,
    others: 0,
  },
};

const dailyInputSlice = createSlice({
  name: 'dailyInput',
  initialState,
  reducers: {
    onChange: (state, action: PayloadAction<{ name: keyof MyObject, value: number }>) => {
      const { name, value } = action.payload;
      state.myObject[name] = value;
    },
    add1k: (state, action: PayloadAction<{ name: keyof MyObject, value: number }>) => {
      const { name, value } = action.payload
      state.myObject[name] = value + 1000
    },
    add2k: (state, action: PayloadAction<{ name: keyof MyObject, value: number }>) => {
      const { name, value } = action.payload
      state.myObject[name] = value + 2000
    },
    add3k: (state, action: PayloadAction<{ name: keyof MyObject, value: number }>) => {
      const { name, value } = action.payload
      state.myObject[name] = value + 3000
    },
    add5k: (state, action: PayloadAction<{ name: keyof MyObject, value: number }>) => {
      const { name, value } = action.payload
      state.myObject[name] = value + 5000
    },
    add10k: (state, action: PayloadAction<{ name: keyof MyObject, value: number }>) => {
      const { name, value } = action.payload
      state.myObject[name] = value + 10000
    }
  },
});

export const { 
  onChange, 
  add1k, 
  add2k, 
  add3k, 
  add5k, 
  add10k, 
} = dailyInputSlice.actions;

export default dailyInputSlice.reducer;

export const selectMyObject = createSelector(
  (state: RootState) => state.dailyInput.myObject,
  (myObject) => myObject
);
