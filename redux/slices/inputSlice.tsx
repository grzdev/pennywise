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
  totalSum: number;
}

// Initial state
const initialState: MySliceState = {
  items: [],
  totalSum: 0,
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
          weekday: "long",
          month: "long",
          day: "numeric",
        };
        const formattedDate = currentDate.toLocaleDateString("en-US", options);
  
        const existingItemIndex = state.items.findIndex(
          (item) => item.date === formattedDate
        );
  
        if (existingItemIndex !== -1) {
          // Update existing item
          const existingItem = state.items[existingItemIndex];
          existingItem.food += action.payload.food;
          existingItem.data += action.payload.data;
          existingItem.transit += action.payload.transit;
          existingItem.transfers += action.payload.transfers;
          existingItem.others += action.payload.others;
          existingItem.sum =
            existingItem.food +
            existingItem.data +
            existingItem.transit +
            existingItem.transfers +
            existingItem.others;
        } else {
          // Create new item
          const newItem: Item = {
            id: generateId(),
            food: action.payload.food,
            data: action.payload.data,
            transit: action.payload.transit,
            transfers: action.payload.transfers,
            others: action.payload.others,
            date: formattedDate,
            sum:
              action.payload.food +
              action.payload.data +
              action.payload.transit +
              action.payload.transfers +
              action.payload.others,
          };
          state.items.push(newItem);
        }
  
        // Recalculate totalSum
        state.totalSum = state.items.reduce(
          (sum, item) => sum + item.sum,
          0
        );
      },
      deleteItem: (state, action: PayloadAction<number>) => {
        const deletedItem = state.items.find(item => item.id === action.payload);
        if (deletedItem) {
          state.totalSum -= deletedItem.sum; // Deduct the deleted item's sum from the totalSum
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      },
      updateItem: (state, action: PayloadAction<Item>) => {
        const { id, food, data, transit, transfers, others } = action.payload;
        const index = state.items.findIndex((item) => item.id === id);
        if (index !== -1) {
          const previousSum = state.items[index].sum;
          state.items[index] = {
            ...state.items[index],
            food,
            data,
            transit,
            transfers,
            others,
            sum: food + data + transit + transfers + others,
          };
          state.totalSum += state.items[index].sum - previousSum;
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
