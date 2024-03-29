

import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

// Interface
export interface InputData {
  food: number;
  transit: number;
  data: number;
  transfers: number;
  others: number;
}
interface InputState {
  inputData: InputData;
  currentDay: string;
}

//Initial State
const initialState: InputState = {
  inputData: {
    food: 0,
    transit: 0,
    data: 0,
    transfers: 0,
    others: 0,
  },
  currentDay: new Date().toLocaleDateString('en-US', {weekday: 'short'}),
};

// Slice
const dailyInputSlice = createSlice({
  name: 'dailyInput',
  initialState,
  reducers: {
    onChange: (state, action: PayloadAction<{ name: keyof InputData, value: number }>) => {
      const { name, value } = action.payload;
      state.inputData[name] = value;
    },
    add1k: (state, action: PayloadAction<{ name: keyof InputData, value: number }>) => {
      const { name, value } = action.payload
      state.inputData[name] = value + 1000
    },
    add2k: (state, action: PayloadAction<{ name: keyof InputData, value: number }>) => {
      const { name, value } = action.payload
      state.inputData[name] = value + 2000
    },
    add3k: (state, action: PayloadAction<{ name: keyof InputData, value: number }>) => {
      const { name, value } = action.payload
      state.inputData[name] = value + 3000
    },
    add5k: (state, action: PayloadAction<{ name: keyof InputData, value: number }>) => {
      const { name, value } = action.payload
      state.inputData[name] = value + 5000
    },
    add10k: (state, action: PayloadAction<{ name: keyof InputData, value: number }>) => {
      const { name, value } = action.payload
      state.inputData[name] = value + 10000
    }
  },
});

// Action export
export const { 
  onChange, 
  add1k, 
  add2k, 
  add3k, 
  add5k, 
  add10k, 
} = dailyInputSlice.actions;

export default dailyInputSlice.reducer;

// Selectors
export const selectMyObject = createSelector(
  (state: RootState) => state.dailyInput.inputData,
  (inputData) => inputData
);
export const selectDate = createSelector(
  (state: RootState) => state.dailyInput.currentDay,
  (dateSelect) => dateSelect
)

// Save to local storage
export const saveStateToLocalStorage = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('InputState', serializedState);
  } catch (e) {
    console.log('Error saving state to local storage:', e);
  }
};

