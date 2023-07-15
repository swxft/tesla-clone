import { configureStore } from "@reduxjs/toolkit";
import tempSlice from "./temp-slice";

const store = configureStore({
    reducer: {
        temp: tempSlice.reducer,
    }
})

export default store;
