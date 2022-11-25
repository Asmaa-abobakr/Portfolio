import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import counterSlice  from "./counterSlice";
import authSlice from "./authSlice";

export const store = configureStore({
    reducer:{
        // reducers:
        counterStore: counterSlice,
        cartStore: cartSlice,
        authStore: authSlice
    }
});