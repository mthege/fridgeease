import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savedFood: [],
  };

export const foodSlice = createSlice({
    name: "myFridge",
    initialState,
    reducers: {
        SAVED_FOOD: (state, action) => {
            state.value = action.payload.value; 
        },

        DELETE_SAVED_FOOD: (state, action) => {
        state.value = state.value.filter((food) => food.id !== action.payload.id);
        },
  
        UPDATE_SAVED_FOOD: (state, action) => {
        state.value.map((food) => {
          if (food.id === action.payload.id) {
            food.desc = action.payload.desc;
        }
    });
  },
},
});


export const { SAVED_FOOD, DELETE_SAVED_FOOD, UPDATE_SAVED_FOOD } = foodSlice.actions;

export const selectFoods = (state) => state.myFoods.value;

export default foodSlice.reducer;