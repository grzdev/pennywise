import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Key } from 'react';
import { RootState } from 'redux/store';
import { produce } from 'immer';

// Interface
export type Expense = {
  id: string;
  category: string;
  amount: number;
  date: string;
  isDone: boolean;
  selectedDate: string;
};
export type ExpensesState = {
  expenses: Expense[];
  isBudgetDone: boolean;
};
  
//Initial State
const initialState: ExpensesState = {
  expenses: [],
  isBudgetDone: false,
};
  
// Slice
export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      const index = state.expenses.findIndex((expense) => expense.id === action.payload);
      if (index !== -1) {
        state.expenses.splice(index, 1);
      }
    },
    toggleBudgetDone: (state, action: PayloadAction<string>) => {
      const budget = state.expenses.find((expense) => expense.id === action.payload);
      if (budget) {
        budget.isDone = !budget.isDone;
      }
    },
  },
});

// Action exports
export const { 
  addExpense, 
  deleteExpense, 
  toggleBudgetDone
} = budgetSlice.actions;

export default budgetSlice.reducer;

// Selector
export const selectExpense = createSelector(
  (state: RootState) => state.budget.expenses,
  (expenses) => expenses
);
