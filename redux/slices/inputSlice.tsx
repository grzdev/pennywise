import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputState {
    id: string;
    food: number;
    data: number;
    transit: number;
    transfers: number;
    others: number;
}

interface InitialState {
    inputs: InputState[];
  }

const initialState: InitialState = {
    inputs: [
        {
            id: '',
            food: 0,
            data: 0,
            transit: 0,
            transfers: 0,
            others: 0,
        }
    ]
}



export const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {

    }
})

export const {
    
} = inputSlice.actions
export default inputSlice.reducer
