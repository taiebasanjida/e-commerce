import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [], // All products
    searchTerm: '', // Current search term
    filteredData: [], // Filtered product list based on search term
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // Set all products in the store
        setProducts(state, action) {
            state.products = action.payload;
        },
        // Set search term and filter products
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
            state.filteredData = state.products.filter(product =>
                product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
            );
        },
    },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
