import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: [],
};

const productSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    STORE_PRODUCTS(state, action) {
      //   console.log(action.payload);
      state.products = action.payload.products;
    },
},
});


const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
      FILTER_BY_SEARCH(state, action) {
        const { products, search } = action.payload;
        const tempProducts = products.filter(
          (product) =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase())
        );
  
        state.filteredProducts = tempProducts;
      },
    }
    })

export const { STORE_PRODUCTS, FILTER_BY_SEARCH } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default productSlice.reducer;