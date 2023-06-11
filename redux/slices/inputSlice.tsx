import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";


// Interface
interface Item {
  id?: number;
  food: number;
  data: number;
  transit: number;
  transfers: number;
  others: number;
  date: string;
  sum: number;
}
interface MySliceState {
  items: Item[];
}

// Initial state
const initialState: MySliceState = {
  items: [],
}; 

// Auto id
const generateId = (): number => {
  return Math.floor(Math.random() * 100000);
};

//Slice
export const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
      addItem: (state, action: PayloadAction<Item>) => {
        const currentDate = new Date();
        const options: Intl.DateTimeFormatOptions = {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);

        const newItem: Item = {
          id: generateId(),
          food: action.payload.food,
          data: action.payload.data,
          transit: action.payload.transit,
          transfers: action.payload.transfers,
          others: action.payload.others,
          date: formattedDate,
          sum: action.payload.food + action.payload.data + action.payload.transit + action.payload.transfers + action.payload.others,
        };
        state.items.push(newItem);
      },
      deleteItem: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      },
      updateItem: (state, action: PayloadAction<Item>) => {
        const { id, food, data, transit, transfers, others } = action.payload;
        const index = state.items.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.items[index] = {
            ...state.items[index],
            food,
            data,
            transit,
            transfers,
            others,
          };
        }
      },
    }
})

// Action export
export const {
  addItem, 
  deleteItem, 
  updateItem
} = inputSlice.actions

export default inputSlice.reducer
