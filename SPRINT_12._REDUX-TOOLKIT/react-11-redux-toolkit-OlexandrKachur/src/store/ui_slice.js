import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartIsVisible: false,
};

const uiSlice = createSlice({
    name: 'uiSlice',
    initialState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

// these exports should stay the way they are
export const uiActions = uiSlice.actions;
export const { toggle } = uiSlice.actions;
export default uiSlice;
