import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice'; // Corrected from `product` to `products`

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer, // Changed to 'products'
    },
});

export default store;
