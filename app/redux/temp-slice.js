// export const incrementTemperature = () => ({
//     type: 'INCREMENT_TEMPERATURE',
//   });
  
//   export const decrementTemperature = () => ({
//     type: 'DECREMENT_TEMPERATURE',
//   });

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temperature: 0, // Set your initial temperature value here
};

const tempSlice = createSlice({
  name: "temp",
  initialState,
  reducers: {
    incrementTemp: (state, action) => {
      state.temperature = state.temperature++
    },
    decrementTemp: (state, action) => {
      state.temperature = state.temperature--
    }
  }
});

export const { incrementTemp, decrementTemp } = tempSlice.actions;

export default tempSlice;


  