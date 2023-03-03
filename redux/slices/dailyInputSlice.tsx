import { createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

interface DailyInputState {
    input: number[]
}
const initialState: DailyInputState = {
    input: []
}

export const dailyInputSlice = createSlice({
    name: "dailyInput",
    initialState,
    reducers:{
        addInput: (state, action: PayloadAction<number> ) => {
            // state.input += action.payload
            state.input.push(action.payload)
        }
    }
})

export const {
    addInput,

} = dailyInputSlice.actions

export const selectCount = (state: RootState) => state.dailyInput.input

export default dailyInputSlice.reducer 