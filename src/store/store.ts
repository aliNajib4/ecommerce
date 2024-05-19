import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;