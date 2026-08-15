import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        incrementCounter: (state) => {
            state.count += 1; // Direct mutation allowed
        },
        decrementCounter: (state) => {
            state.count -= 1; // Direct mutation allowed
        },
    },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;