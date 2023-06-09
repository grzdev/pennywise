import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";


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

const initialState: MySliceState = {
  items: [],
}; 

const generateId = (): number => {
  return Math.floor(Math.random() * 100000);
};



export const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
      addItem: (state, action: PayloadAction<Item>) => {
        const currentDate = new Date();
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const formattedDate = `${weekdays[currentDate.getDay()]}, ${months[currentDate.getMonth()]} ${currentDate.getDate()}`;

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

export const {
    addItem, deleteItem, updateItem
} = inputSlice.actions
export default inputSlice.reducer
