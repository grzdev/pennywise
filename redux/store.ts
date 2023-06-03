import { configureStore } from '@reduxjs/toolkit'
import dailyInputReducer, { saveStateToLocalStorage } from './slices/dailyInputSlice'
import budgetReducer from './slices/budgetSlice';
import inputReducer from './slices/inputSlice';


const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('InputState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log('Error loading state from local storage:', e);
    return undefined;
  }
};

const initialState = loadStateFromLocalStorage();

export const store = configureStore({
  reducer: {
    dailyInput: dailyInputReducer,
    budget: budgetReducer,
    number: inputReducer
  },
  preloadedState: initialState,
})

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { combineReducers } from '@reduxjs/toolkit'
// import dailyInputReducer from './slices/dailyInputSlice'
// import storage from 'redux-persist/lib/storage'
// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   // blacklist: ['apiProductSlice'],
// }
// export const rootReducers = combineReducers({
//   dailyInput: dailyInputReducer
// })
// const persistedReducer = persistReducer(persistConfig, rootReducers)
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     })
// })
// setupListeners(store.dispatch)
// export default store