import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Key } from 'react';
import { RootState } from 'redux/store';

export type Expense = {
    id: string;
    category: string;
    amount: number;
    date: string;
  };
  
export type ExpensesState = {
    expenses: Expense[];
  };
  
  const initialState: ExpensesState = {
    expenses: [],
  };
  
  export const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
      addExpense: (state, action) => {
        state.expenses.push(action.payload);
      },
      deleteExpense: (state, action: PayloadAction<string>) => {
        const index = state.expenses.findIndex((expense) => expense.id === action.payload);
        if (index !== -1) {
          state.expenses.splice(index, 1);
        }
      },
      // add1kAmount: (state, action: PayloadAction<string>) => {
      //   const expense = state.expenses.find((e) => e.id === action.payload);
      //   if (expense) {
      //     expense.amount += 1000;
      //   }
      // },
      // add1kAmount: (state, action: PayloadAction<{ amount: string, value: number }>) => {
      //   const { amount, value } = action.payload;
      //   const expenseIndex = parseInt(amount, 10); // convert amount to number
      //   const expense = state.expenses[expenseIndex];
      
      //   if (expense) {
      //     expense.amount += 1000;
      //   }
      // },
    },
  });
  
  export const { addExpense, deleteExpense} = budgetSlice.actions;
  export default budgetSlice.reducer;

  export const selectExpense = createSelector(
    (state: RootState) => state.budget.expenses,
    (expenses) => expenses
  );
