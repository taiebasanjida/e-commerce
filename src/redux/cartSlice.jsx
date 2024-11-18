import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.products.find((item) => item.id === newItem.id);

            if (existingItem) {
                // Update quantity and totalPrice for the existing product
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                // Add new product to the cart
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image,
                });
            }

            // Update overall total price and quantity
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },

        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.products.find((item) => item.id === id);

            if (existingItem) {
                state.totalPrice -= existingItem.totalPrice;
                state.totalQuantity -= existingItem.quantity;

                // Remove item from the cart
                state.products = state.products.filter((item) => item.id !== id);
            }
        },

        updateQuantity(state, action) {
            const { id, type } = action.payload; // `type` can be "increase" or "decrease"
            const existingItem = state.products.find((item) => item.id === id);

            if (existingItem) {
                if (type === "increase") {
                    existingItem.quantity++;
                    existingItem.totalPrice += existingItem.price;
                    state.totalPrice += existingItem.price;
                    state.totalQuantity++;
                } else if (type === "decrease" && existingItem.quantity > 1) {
                    existingItem.quantity--;
                    existingItem.totalPrice -= existingItem.price;
                    state.totalPrice -= existingItem.price;
                    state.totalQuantity--;
                }
            }
        },

        increaseQuantity(state, action) {
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id);

            if (findItem) {
                findItem.quantity++;
                findItem.totalPrice += findItem.price;
                state.totalPrice += findItem.price;
                state.totalQuantity++;
            }
        },

        decreaseQuantity(state, action) {
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id);
            if(findItem.quantity > 1){
            if (findItem) {
                
            }
            }

            if (findItem) {
                if (findItem.quantity > 1) {
                    findItem.quantity--;
                    findItem.totalPrice -= findItem.price;
                    state.totalPrice -= findItem.price;
                    state.totalQuantity--;
                } else {
                    // Remove item if quantity becomes zero
                    state.totalPrice -= findItem.price;
                    state.totalQuantity--;
                    state.products = state.products.filter((item) => item.id !== id);
                }
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
