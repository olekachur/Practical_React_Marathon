import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const selectedItem = state.items.find(item => item.id === newItem.id);
            if (selectedItem !== undefined) {
                selectedItem.quantity += 1;
                selectedItem.totalPrice += selectedItem.price;
            } else {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }
            state.totalQuantity += 1;
        },
        removeItemFromCart: (state, action) => {
            const id = action.payload;
            const selectedItem = state.items.find(item => item.id === id);
            if (selectedItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                selectedItem.quantity -= 1;
            }
            state.totalQuantity -= 1;
            selectedItem.totalPrice = selectedItem.totalPrice - selectedItem.price;
        },
    },
});

// these exports should stay the way they are
export const cartActions = cartSlice.actions;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice;
